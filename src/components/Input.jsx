import React, { useState } from "react";

function Input({ recipes, setFilteredRecipes }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filtered = recipes.filter((recipe) => {
      // title orqali qidirish
      if (recipe.title.toLowerCase().includes(value)) return true;

      // ingredients massiv bo'lsa qidirish
      let ingredients = recipe.ingredients;
      if (typeof ingredients === "string") {
        try {
          ingredients = JSON.parse(ingredients);
        } catch {
          ingredients = [ingredients];
        }
      }

      return ingredients.some((ing) => ing.toLowerCase().includes(value));
    });

    setFilteredRecipes(filtered);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by name or ingredient..."
        className="search-input"
        value={query}
        onChange={handleSearch}
      />
      <img
        src="/images/icon-search.svg"
        alt="search icon"
        className="search-icon"
      />
    </div>
  );
}

export default Input;
