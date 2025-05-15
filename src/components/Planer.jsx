import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "./Planner.css";

const Planner = () => {
  const { user } = useAuth();
  const [plans, setPlans] = useState(() => {

    const storedPlans = localStorage.getItem("plans");
    return storedPlans ? JSON.parse(storedPlans) : [];
  });
  const [newPlan, setNewPlan] = useState({ title: "", priority: "high" });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingPlan, setEditingPlan] = useState(null);

  const [tasks, setTasks] = useState([
    { id: 1, task: "Walk 10,000 steps", completed: false },
    { id: 2, task: "Sleep 7 hours", completed: false },
    { id: 3, task: "Drink 2 liters of water", completed: false },
  ]);

  useEffect(() => {
    localStorage.setItem("plans", JSON.stringify(plans));
  }, [plans]);

  const addPlan = () => {
    if (!newPlan.title.trim()) return;
    setPlans([...plans, { ...newPlan, id: Date.now() }]);
    setNewPlan({ title: "", priority: "high" });
  };

  const deletePlan = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  const editPlan = (id, updatedTitle) => {
    setPlans(
      plans.map((plan) =>
        plan.id === id ? { ...plan, title: updatedTitle } : plan
      )
    );
    setEditingPlan(null);
  };

  const filteredPlans = plans.filter((plan) => {
    const matchesSearch = plan.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filter === "all" || plan.priority === filter;
    return matchesSearch && matchesFilter;
  });

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <main className="page">
      <div className="ttlCotain">
        <h1 className="title">
          You can set plans for all day in there and also you will learn work
          with yourself !
        </h1>
      </div>
      <section class="images">
        <div class="topImage">
          <img
            class="image-item"
            src="https://i.pinimg.com/736x/bb/87/7e/bb877e132ce41ceb491832f73845bc4a.jpg"
            alt=""
          />
          <img
            class="image-item"
            src="https://i.pinimg.com/736x/b6/f1/9a/b6f19a0d478e686799d4c14ff4897638.jpg"
          />
          <img
            class="image-item blue-bg"
            src="https://i.pinimg.com/736x/c7/e6/fe/c7e6fe155f70146883f0d72a1a1e90b2.jpg"
            alt=""
          />
        </div>
        <div class="bottomImage">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/056/396/007/small/rustic-metallic-letters-spelling-plan-on-desk-in-modern-office-photo.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="Customers">
        <img
          src="./kisspng-computer-icons-clip-art-portable-network-graphics-pair-of-blue-stars-icons-bing-images-5b6a2433842ed3.8835517515336827395414-removebg-preview__1_-removebg-preview.png"
          alt="Happy customers"
        />
        <div className="CustomersInside">
          <p>
            <strong>Over 1,7K+ </strong>Satisfied Customers
          </p>
        </div>
      </section>
      <div className="ttlCotain">
        <h1 className="title">Hey, {user?.username} 👋</h1>
      </div>
      <div className="controls">
        <input
          type="text"
          placeholder="Type a plan..."
          value={newPlan.title}
          onChange={(e) => setNewPlan({ ...newPlan, title: e.target.value })}
          className="input"
        />
        <select
          value={newPlan.priority}
          onChange={(e) => setNewPlan({ ...newPlan, priority: e.target.value })}
          className="select"
        >
          <option value="high">Маңызды</option>
          <option value="medium">Орташа</option>
          <option value="low">Оңай</option>
        </select>
        <button onClick={addPlan} className="button add">
          ➕
        </button>
      </div>

      <div className="searchfilter">
        <input
          type="text"
          placeholder="🔍 Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        />

        <div className="radioinputs">
          {["all", "high", "medium", "low"].map((level) => (
            <label className="radio" key={level}>
              <input
                type="radio"
                name="priorityfilter"
                value={level}
                checked={filter === level}
                onChange={(e) => setFilter(e.target.value)}
              />
              <span className="name">{level}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="planzone">
        {filteredPlans.map((plan) => (
          <div key={plan.id} className={`plan ${plan.priority}`}>
            {editingPlan === plan.id ? (
              <input
                type="text"
                defaultValue={plan.title}
                onBlur={(e) => editPlan(plan.id, e.target.value)}
                className="editinput"
              />
            ) : (
              <span>{plan.title}</span>
            )}
            <div className="actions">
              <button onClick={() => setEditingPlan(plan.id)}>✏️</button>
              <button onClick={() => deletePlan(plan.id)}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
      <h2 className="chlg">Daily Challenges</h2>
      <div className="tasks">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task ${task.completed ? "done" : ""}`}
            onClick={() => toggleTask(task.id)}
          >
            {task.task}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Planner;
