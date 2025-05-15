import React, { useState, useEffect } from "react";
import "./PagnitationPage.css";
import { fetchLifestyleData } from "../api/mockApi";

const categories = [
  { id: "Диета", label: "🥗 Diet" },
  { id: "Жаттығу", label: "🧘‍♀️ Workout" },
  { id: "Мотивация", label: "🧠 Motivation" },
  { id: "Демалу", label: "🛌 Rest" },
];

const LifestylePage = () => {
  const [activeCategory, setActiveCategory] = useState("diet");
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const itemsPerPage = 6;

  useEffect(() => {
    fetchData();
  }, [activeCategory, currentPage]);
  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const result = await fetchLifestyleData(
        activeCategory,
        currentPage,
        itemsPerPage
      );
      setData(result.data);
      setTotal(result.total);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div className="lifestyle-page">
      <h1 className="page-title">Lifestyle Content</h1>

      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`category-button ${
              activeCategory === category.id ? "active" : ""
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="content-grid">
          {data.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} className="card-image" />
              <h2 className="card-title">{item.title}</h2>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      )}

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LifestylePage;
