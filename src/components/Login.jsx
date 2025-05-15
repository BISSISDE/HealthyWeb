  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import "./Login.css";
  import { useAuth } from "../context/AuthContext";
  import { useTheme } from "../context/ThemeContext";

  const Login = () => {
    const [isRegister, setIsRegister] = useState(false); 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login, logout, user } = useAuth(); 
    const { theme } = useTheme();
    const handleRegister = (e) => {
      e.preventDefault();

      if (!username || !password) {
        setError("Барлыгын толтырыңыз!");
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.find((user) => user.username === username);

      if (userExists) {
        setError("Бул пайдаланушы аты бұрыннан бар!");
      } else {
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        setError("");
        alert("Тіркеу сәтті аякталды!");
        login(username); 
        navigate("/home"); 
      }
    };

    const handleLogin = (e) => {
      e.preventDefault();

      if (!username || !password) {
        setError("Барлык өрісті толтырыңыз!");
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        setError("");
        alert("Сәтті кірдіңіз!");
        login({
          username: user.username,
          name: user.name || "John Doe",
          age: user.age || 30,
          weight: user.weight || 70,
          height: user.height || 175,
          goal: user.goal || "Lose 5 kg",
        });
        navigate("/profile");
      } else {
        setError("Кате логин немесе пароль!");
      }
    };

    const handleLogout = () => {
      logout(); 
      navigate("/");
    };

    return (
      <div
        id="form-ui"
        className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div
          className="w-full max-w-md p-8 rounded-xl shadow-lg"
          style={{
            background: theme === "dark" ? "black" : "#f8f8f8",
            color: theme === "dark" ? "#fff" : "#222",
          }}
        >
          {user ? (
            <div className="text-center">
              <h2 className="!text-7xl font-bold mb-6">
                Welcome, {user.username}!
              </h2>
              <button
                onClick={handleLogout}
                id="logout-button"
                className="w-full py-2 px-4 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
              >
                Account-тан шығу
              </button>
            </div>
          ) : (
            <form onSubmit={isRegister ? handleRegister : handleLogin} id="form">
              <div id="form-body">
                <div id="welcome-lines" className="mb-8 text-center">
                  <div id="welcome-line-1" className="text-3xl font-bold mb-2">
                    BisbenOzger
                  </div>
                  <div id="welcome-line-2" className="text-lg mb-4">
                    {isRegister ? "Register" : "Login"}
                  </div>
                </div>
                <div id="input-area" className="mb-6">
                  <div className="form-inp mb-4">
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className={`w-full p-2 rounded border ${
                        theme === "dark"
                          ? "bg-[#232323] border-gray-700 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-black placeholder-gray-500"
                      } outline-none`}
                    />
                  </div>
                  <div className="form-inp mb-4">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`w-full p-2 rounded border ${
                        theme === "dark"
                          ? "bg-[#232323] border-gray-700 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-black placeholder-gray-500"
                      } outline-none`}
                    />
                  </div>
                </div>
                {error && (
                  <p className="error-message text-red-500 mb-4">{error}</p>
                )}
                <div id="submit-button-cvr" className="mb-4">
                  <button
                    id="submit-button"
                    type="submit"
                    className="w-full py-2 px-4 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
                  >
                    {isRegister ? "Register" : "Login"}
                  </button>
                </div>
                <div id="toggle-auth" className="text-center">
                  <p>
                    {isRegister
                      ? "Already have an account?"
                      : "Don't have an account?"}{" "}
                    <span
                      onClick={() => {
                        setIsRegister(!isRegister);
                        setError("");
                      }}
                      className="text-blue-600 cursor-pointer underline"
                    >
                      {isRegister ? "Login" : "Register"}
                    </span>
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  };

  export default Login;
