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
    <div className="container">
      <section className="hero">
        <div class="title__wrapper">
          <h1 class="title">
            <span class="highlight">Healthy</span> meals, zero fuss
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
    </div>
  );
}

export default Home;
