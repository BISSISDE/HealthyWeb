import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./profilepage.css";

const ProfilePage = () => {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    age: user?.age || "",
    weight: user?.weight || "",
    height: user?.height || "",
    goal: user?.goal || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    alert("Profile updated successfully!");
  };

  const calculateBMI = () => {
    const heightInMeters = formData.height / 100;
    return (formData.weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const progressPercentage = () => {
    const goalWeight = parseFloat(formData.goal.replace(/\D/g, "")) || 0;
    if (goalWeight && formData.weight) {
      const progress = ((formData.weight - goalWeight) / formData.weight) * 100;
      return Math.max(0, Math.min(100, progress.toFixed(1)));
    }
    return 0;
  };

  return (
    <div className="profilepage">
      <h1 className="profiletitle">Profile Page</h1>

      <div className="prof">
        <div className="profilecard">
          <h2 className="cardtitle">Personal Information</h2>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Age:</strong> {formData.age}
          </p>
          <p>
            <strong>Weight:</strong> {formData.weight} kg
          </p>
          <p>
            <strong>Height:</strong> {formData.height} cm
          </p>
          <p>
            <strong>BMI:</strong> {calculateBMI()}
          </p>
          <p>
            <strong>Goal:</strong> {formData.goal}
          </p>

          <div className="progressblock">
            <p>
              <strong>Progress:</strong>
            </p>
            <div className="progressbar">
              <div
                className="progressfill"
                style={{ width: `${progressPercentage()}%` }}
              ></div>
            </div>
            <p className="progresstext">{progressPercentage()}% to goal</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="formcard">
          <h2 className="cardtitle">Update Information</h2>
          {["name", "age", "weight", "height", "goal"].map((field) => (
            <div className="formgroup" key={field}>
              <label className="formlabel">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={
                  field === "age" || field === "weight" || field === "height"
                    ? "number"
                    : "text"
                }
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="forminput"
              />
            </div>
          ))}
          <button type="submit" className="submitbtn">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
