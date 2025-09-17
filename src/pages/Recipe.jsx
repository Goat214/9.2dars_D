import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../utils";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [otherRecipes, setOtherRecipes] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axiosInstance.get(`/recipes?id=eq.${id}`);
        const data = res.data[0];
        setRecipe(data);
        const allRes = await axiosInstance.get("/recipes");
        const filtered = allRes.data.filter((r) => r.id !== data.id);
        setOtherRecipes(filtered);

        setIsPending(false);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setIsPending(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (isPending) return <div className="loading">Loading...</div>;
  if (!recipe) return <div className="error">Recipe not found</div>;

 // Avval stringni array ichiga olamiz
const rawIngredients = recipe.ingredients ? [recipe.ingredients] : [];
const rawInstructions = recipe.instructions ? [recipe.instructions] : [];

// Keyin har bir elementni vergul bo‘yicha ajratamiz va bo‘sh joylarni olib tashlaymiz
const ingredientsArray = rawIngredients
  .flatMap(str => str.split(",").map(item => item.trim()).filter(i => i !== ""));

const instructionsArray = rawInstructions
  .flatMap(str => str.split(",").map(item => item.trim()).filter(i => i !== ""));


  return (
    <div className="container">
      <p className="recipe_nav">
        <Link to={`/recipes`}><span>recipes / </span></Link>
        {recipe.title}
      </p>
      <section className="recipe-detail">
        <div className="single__img__wrapper">
          <img
            src={
              recipe.image ||
              "https://th.bing.com/th/id/R.51879f9aeaaf6060aa42a64df71696f1?rik=h8Ox9c2rUwGi%2fg&pid=ImgRaw&r=0"
            }
            alt={recipe.title}
            className="recipe-image"
          />
        </div>
        <div className="single__info__wrapper">
          <h1 className="recipe-title">{recipe.title}</h1>
          <p className="recipe-overview">{recipe.overview}</p>

          <div className="recipe__info" id="recipe__info">
            <div className="recipe__f_wrapper">
              <span className="reciep__info__wrapper">
                <img src="../images/icon-servings.svg" alt="" /> Servings:{" "}
                {recipe.servings}
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

          <h2 className="ingredients-title">Ingredients:</h2>
          {ingredientsArray.length > 0 ? (
            <ul className="ingredients-list">
              {ingredientsArray.map((ingredient, idx) => (
                <li className="ingredients__item" key={idx}>
                  <img src="../images/icon-bullet-point.svg" alt="" />{" "}
                  {ingredient}
                </li>
              ))}
            </ul>
          ) : (
            <p>No ingredients available</p>
          )}

          <h2 className="instructions-title">Instructions:</h2>
          <p className="instructions-text">
            {instructionsArray.length > 0 ? (
              <ul className="ingredients-list">
                {instructionsArray.map((instructions, idx) => (
                  <li className="ingredients__item" key={idx}>
                    <img src="../images/icon-bullet-point.svg" alt="" />
                    {instructions}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No instructionsavailable</p>
            )}
          </p>
        </div>
      </section>

      <hr />
      <section className="other-recipes">
        <h2 className="section-title">Other Recipes</h2>
        <div className="recipes__list">
          {otherRecipes.map((r) => (
            <div key={r.id} className="recipe__card">
              <img
                src={
                  r.image ||
                  "https://th.bing.com/th/id/R.51879f9aeaaf6060aa42a64df71696f1?rik=h8Ox9c2rUwGi%2fg&pid=ImgRaw&r=0"
                }
                alt={r.title}
                className="recipe__img"
              />
              <h2 className="recipe__title">{r.title}</h2>
              <p className="recipe__desc">{r.overview}</p>
              <div className="recipe__info">
                <div className="recipe__f_wrapper">
                  <span className="reciep__info__wrapper">
                    <img src="../images/icon-servings.svg" alt="" /> Servings:{" "}
                    {r.servings}
                  </span>
                  <span className="reciep__info__wrapper">
                    <img src="../images/icon-prep-time.svg" alt="" /> Prep:{" "}
                    {r.prepMinutes} mins
                  </span>
                </div>
                <div className="recipe__s_wrapper">
                  <span className="reciep__info__wrapper">
                    <img src="../images/icon-cook-time.svg" alt="" /> Cook:{" "}
                    {r.cookMinutes} mins
                  </span>
                </div>
              </div>
              <Link to={`/recipes/${r.id}`} className="btn__view">
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Recipe;
