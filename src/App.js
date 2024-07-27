import React, { useState, useEffect } from "react";
import "./App.css";
import articlesData from "./data.json";

function App() {
  const [articles, setArticles] = useState([]);
  const [sortType, setSortType] = useState("upvotes");

  useEffect(() => {
    // Initially sort by upvotes
    const sortedArticles = [...articlesData].sort(
      (a, b) => b.upvotes - a.upvotes
    );
    setArticles(sortedArticles);
  }, []);

  const sortByUpvotes = () => {
    const sortedArticles = [...articles].sort((a, b) => b.upvotes - a.upvotes);
    setArticles(sortedArticles);
    setSortType("upvotes");
  };

  const sortByDate = () => {
    const sortedArticles = [...articles].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setArticles(sortedArticles);
    setSortType("date");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Article Sorting App</h1>
        <div className="buttons">
          <button
            onClick={sortByUpvotes}
            className={sortType === "upvotes" ? "active" : ""}
          >
            Most Upvoted
          </button>
          <button
            onClick={sortByDate}
            className={sortType === "date" ? "active" : ""}
          >
            Most Recent
          </button>
        </div>
        <div className="article-grid">
          {articles.map((article, index) => (
            <div key={index} className="article-tile">
              <h2>{article.title}</h2>
              <p>Upvotes: {article.upvotes}</p>
              <p>Date: {article.date}</p>
            </div>
          ))} 
        </div>

        
      </header>
    </div>
  );
}

export default App;
