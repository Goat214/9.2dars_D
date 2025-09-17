import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import { axiosInstance } from "../utils";
import DropdownFilter from "../components/DropDown";
import { Link } from "react-router-dom";

function Recipes() {
  const [isPending, setIsPending] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axiosInstance.get("/recipes"); // table nomi
        setRecipes(res.data);
        setFilteredRecipes(res.data);
        setIsPending(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setIsPending(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="">
      {isPending ? (
        <div className="loading container">Loading...</div>
      ) : (
        <>
          <div className="container">
            <section className="recipes__header">
              <h1 className="recipes__title">
                Explore our simple, healthy recipes
              </h1>
              <p className="recipes__desc">
                Discover eight quick, whole-food dishes that fit real-life
                schedules and taste amazing. Use the search bar to find a recipe
                by name or ingredient, or simply scroll the list and let
                something delicious catch your eye.
              </p>
            </section>

            <Input recipes={recipes} setFilteredRecipes={setFilteredRecipes} />

            <div className="p-10 flex gap-6">
              <DropdownFilter
                label="Max Prep Time"
                options={["0 minutes", "5 minutes", "10 minutes"]}
              />
              <DropdownFilter
                label="Max Cook Time"
                options={[
                  "0 minutes",
                  "5 minutes",
                  "10 minutes",
                  "15 minutes",
                  "20 minutes",
                ]}
              />
            </div>

            <section className="recipes__list">
              {filteredRecipes.map((recipe) => (
                <div key={recipe.id} className="recipe__card">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="recipe__img"
                  />
                  <h2 className="recipe__title">{recipe.title}</h2>
                  <p className="recipe__desc">{recipe.overview}</p>
                  <div className="recipe__info">
                    <div className="recipe__f_wrapper">
                      <span className="reciep__info__wrapper">
                        <img src="../images/icon-servings.svg" alt="" />{" "}
                        Servings: {recipe.servings}
                      </span>
                      <span className="reciep__info__wrapper">
                        <img src="../images/icon-prep-time.svg" alt="" /> Prep:{" "}
                        {recipe.prepMinutes} mins
                      </span>
                    </div>
                    <div className="recipe__s_wrapper">
                      <span className="reciep__info__wrapper">
                        <img src="../images/icon-cook-time.svg" alt="" /> Cook:{" "}
                        {recipe.cookMinutes} mins
                      </span>
                    </div>
                  </div>
                  <Link to={`/recipes/${recipe.id}`} className="btn__view">
                    View Recipe
                  </Link>
                </div>
              ))}
            </section>
          </div>

          <hr id="reciep__hr" />
        </>
      )}
    </div>
  );
}

export default Recipes;
