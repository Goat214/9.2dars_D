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
    <div className="">
      <section className="container hero">
        <div className="title__wrapper">
          <h1 className="title">
            <span className="highlight">Healthy</span> meals, zero fuss
          </h1>
        </div>

        <p className="description">
          Discover eight quick, whole-food recipes that you can cook tonight—no
          processed junk, no guesswork.
        </p>
        <button className="btn main__btn">Start exploring</button>
      </section>

      <section className="site__image">
        <div className="container">
          <picture>
            <source
              media="(max-width: 120rem)"
              srcSet="../images/image-home-hero-small.webp"
            />
            <source
              media="(max-width: 50rem)"
              srcSet="../images/image-home-hero-small.webp"
            />
            <img
              className="large__img"
              src="../images/image-home-hero-large.webp"
              alt="Hero image"
            />
          </picture>
        </div>
      </section>

      <section className="container will__get">
        <h2 className="will__get__title">What you’ll get</h2>
        <ul className="will__get__list">
          <li className="will__get__item">
            <img
              className="ietm__img"
              src="../images/icon-whole-food-recipes.svg"
              alt=""
            />
            <h3 className="item__title">Whole-food recipes</h3>
            <p className="item__description">
              Each dish uses everyday, unprocessed ingredients.
            </p>
          </li>
          <li className="will__get__item">
            <img
              className="ietm__img"
              src="../images/icon-minimum-fuss.svg"
              alt=""
            />
            <h3 className="item__title">Minimum fuss</h3>
            <p className="item__description">
              All recipes are designed to make eating healthy quick and easy.
            </p>
          </li>
          <li className="will__get__item">
            <img
              className="ietm__img"
              src="../images/icon-search-in-seconds.svg"
              alt=""
            />
            <h3 className="item__title">Search in seconds</h3>
            <p className="item__description">
              Filter by name or ingredient and jump straight to the recipe you
              need.
            </p>
          </li>
        </ul>
      </section>
      <hr />
      <section className="container built">
        <div className="built__wrapper">
          <h2 className="built__title">Built for real life</h2>
          <p className="built__des_one">
            Cooking shouldn’t be complicated. These recipes come in under{" "}
            <span className="remark">30 minutes</span> of active time, fit busy
            schedules, and taste good enough to repeat.
          </p>
          <p className="built__des_two">
            Whether you’re new to the kitchen or just need fresh ideas, we’ve
            got you covered.
          </p>
        </div>
        <div className="built__img__wrapper">
          <img
            className="built__img"
            src="../images/image-home-real-life-large.webp"
            alt=""
          />
        </div>
      </section>
      <section className="container ">
      <div className="cooking">
      <h2 className="cooking__title">Ready to cook smarter?</h2>
        <p className="cooking__des">Hit the button, pick a recipe, and get dinner on the table—fast.</p>
        <button className="btn">Browse recipes</button>
      </div>
      </section>
    </div>
  );
}

export default Home;
