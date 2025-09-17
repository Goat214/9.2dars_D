import React, { useState, useEffect } from "react";
import Cooking from "../components/Cooking";

function About() {
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPending(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isPending ? (
        <div className="loading container">Loading...</div>
      ) : (
        <div>
          <section className="about__hero container">
            <div className="mission__main__wrapper">
              <p className="mission__remark">Our mission</p>
              <h1 className="mission__title">
                Help more people cook nourishing meals, more often.
              </h1>
              <p className="mission__des first">
                Healthy Recipe Finder was created to prove that healthy eating
                can be convenient, affordable, and genuinely delicious.
              </p>
              <p className="mission__des secend">
                We showcase quick, whole-food dishes that anyone can master—no
                fancy equipment, no ultra-processed shortcuts—just honest
                ingredients and straightforward steps.
              </p>
            </div>
            <div>
              <div className="about__img__wrapper">
                <picture className="about__img">
                  <source
                    media="(max-width: 120rem)"
                    srcSet="../images/image-about-our-mission-small.webp"
                  />
                  <source
                    media="(max-width: 50rem)"
                    srcSet="../images/image-about-our-mission-small.webp"
                  />
                  <img
                    className="large__img__about"
                    src="../images/image-about-our-mission-large.webp"
                    alt="Hero image"
                  />
                </picture>
              </div>
            </div>
          </section>
          <hr className="about__hr" />
          <section className="exist container">
            <h2 className="exist__title">Why we exist</h2>
            <ul className="exist__list">
              <li className="exist__item">
                <div className="item__title__wrapper">
                  <img src="../images/icon-bullet-point.svg" alt="" />{" "}
                  <p className="exist__item__title">Cut through the noise.</p>
                </div>
                <p className="exist__item__des">
                  The internet is bursting with recipes, yet most busy cooks
                  still default to take-away or packaged foods. We curate a
                  tight collection of fool-proof dishes so you can skip the
                  scrolling and start cooking.
                </p>
              </li>
              <li className="exist__item">
                <div className="item__title__wrapper">
                  <img src="../images/icon-bullet-point.svg" alt="" />{" "}
                  <p className="exist__item__title">Empower home kitchens. </p>
                </div>
                <p className="exist__item__des">
                  When you control what goes into your meals, you control how
                  you feel. Every recipe is built around unrefined ingredients
                  and ready in about half an hour of active prep.
                </p>
              </li>
              <li className="exist__item">
                <div className="item__title__wrapper">
                  <img src="../images/icon-bullet-point.svg" alt="" />{" "}
                  <p className="exist__item__title">Make healthy look good. </p>
                </div>
                <p className="exist__item__des">
                  High-resolution imagery shows you exactly what success looks
                  like—because we eat with our eyes first, and confidence
                  matters.
                </p>
              </li>
            </ul>
          </section>
          <hr />
          <section className="exist exist__secend container" id="">
            <h2 className="exist__title  exist__title__two">
              Our food philosophy
            </h2>
            <ul className="exist__list">
              <li className="exist__item">
                <div className="item__title__wrapper">
                  <img src="../images/icon-bullet-point.svg" alt="" />{" "}
                  <p className="exist__item__title">
                    Whole ingredients first.{" "}
                  </p>
                </div>
                <p className="exist__item__des">
                  Fresh produce, grains, legumes, herbs, and quality fats form
                  the backbone of every recipe.
                </p>
              </li>
              <li className="exist__item">
                <div className="item__title__wrapper">
                  <img src="../images/icon-bullet-point.svg" alt="" />{" "}
                  <p className="exist__item__title">
                    {" "}
                    Flavor without compromise.{" "}
                  </p>
                </div>
                <p className="exist__item__des">
                  Spices, citrus, and natural sweetness replace excess salt,
                  sugar, and additives.
                </p>
              </li>
              <li className="exist__item">
                <div className="item__title__wrapper">
                  <img src="../images/icon-bullet-point.svg" alt="" />{" "}
                  <p className="exist__item__title">Respect for time. </p>
                </div>
                <p className="exist__item__des">
                  Weeknight meals should slot into real schedules; weekend
                  cooking can be leisurely but never wasteful.
                </p>
              </li>
              <li className="exist__item">
                <div className="item__title__wrapper">
                  <img src="../images/icon-bullet-point.svg" alt="" />{" "}
                  <p className="exist__item__title"> Sustainable choices. </p>
                </div>
                <p className="exist__item__des">
                  Short ingredient lists cut down on food waste and carbon
                  footprint, while plant-forward dishes keep things
                  planet-friendly.
                </p>
              </li>
            </ul>
          </section>
          <hr />

          <section className="beyond container">
            <div className="beyond__main">
              <h2 className="beyond__title">Beyond the plate</h2>
              <p className="beyond__des">
                We believe food is a catalyst for community and well-being. By
                sharing approachable recipes, we hope to:
              </p>
              <ul className="beyond__list">
                <li className="beyond__item">Encourage family dinners and social cooking.</li>
                <li className="beyond__item">Reduce reliance on single-use packaging and delivery waste.</li>
                <li className="beyond__item">Spark curiosity about seasonal produce and local agriculture.</li>
              </ul>
            </div>
            <div className="beyond__img__wrapper">
              <img className="beyond__img" src="../images/image-about-beyond-the-plate-large.webp" alt="" />
            </div>
          </section>
          <section className="container">
            <Cooking/>
          </section>
        </div>
      )}
    </div>
  );
}

export default About;
