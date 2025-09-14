import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utils";
import Input from "../components/Input";


function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axiosInstance.get("/recipes");
        setRecipes(res.data);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="home-container">
      <h1>Recipes List</h1>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image"
              />
            )}
            <div className="recipe-content">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="home-actions">
        <a className="btn" href="/">
          Start exploring
        </a>
        <Input />
      </div>
    </div>
  );
}

export default Home;
