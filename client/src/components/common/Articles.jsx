import React, { useState, useEffect, useContext } from "react";
import "../../font.css";
import CoolanimationText from "../Coolanimationtext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../contexts/ColorContext";
import { useAuth } from "@clerk/clerk-react";

function Articles() {
  const { isNightMode } = useContext(ThemeContext);
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const onReadMore = (articleObj) => {
    navigate(`../${articleObj.articleId}`, { state: articleObj });
  };

  async function getArticles() {
    try {
      const token = await getToken();
      let res = await axios.get("http://localhost:3000/author-api/articles", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.message === "article List") {
        setArticles(res.data.payload);
        setFilteredArticles(res.data.payload);
        extractCategories(res.data.payload);
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError("Failed to fetch articles");
    }
  }

  function extractCategories(articles) {
    const uniqueCategories = [
      "All",
      ...new Set(articles.map((article) => article.category)),
    ];
    setCategories(uniqueCategories);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    if (event.target.value === "All") {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(
        articles.filter((article) => article.category === event.target.value)
      );
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="text-center mb-5 pt-10">
        <CoolanimationText
          text="Articles"
          className="text-3xl font-semibold text-white"
        />
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Category Dropdown */}
      <div className="text-center mb-4">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="bg-gray-800 text-white border-gray-600 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        >
          {categories.map((category) => (
            <option
              key={category}
              value={category}
              className="bg-gray-800 text-white"
            >
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Article List */}
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="space-y-6">
          {filteredArticles.length === 0 && (
            <p className="text-center text-gray-400 text-2xl">
              No articles found
            </p>
          )}
          {filteredArticles.map((article) => (
            <div
              key={article._id}
              className="bg-gray-800 text-white rounded-xl shadow-lg p-5 flex gap-4 transition-transform transform hover:scale-101"
            >
              <img
                src={
                  article.authorData.profileImageUrl ||
                  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                }
                alt="Author"
                className="w-14 h-14 rounded-full border-2 border-gray-600"
              />
              <div className="flex flex-col justify-between flex-1">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p
                  className={`${
                    isNightMode ? "text-gray-300" : "text-gray-600"
                  } text-sm`}
                >
                  {article.content.length > 100
                    ? `${article.content.substring(0, 100)}...`
                    : article.content}
                </p>
                <button
                  className={`mt-2 px-4 py-2 ${
                    isNightMode
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white rounded-md transition-all`}
                  onClick={() => onReadMore(article)}
                >
                  Read More
                </button>
                <p
                  className={`${
                    isNightMode ? "text-gray-400" : "text-gray-500"
                  } text-xs mt-2`}
                >
                  Last updated on: {article.dateOfModification}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;
