import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Main.css";

import getContentful from "../../getContentful";

import React from "react";

const Main = () => {
  const [foods, setFoods] = useState(null);
  const [recepies, setRecepies] = useState()

  const { getFoods } = getContentful();

  // useEffect(() => {
  //   // set the foods here since it 's already an array
  //   getFoods()
  //     .then((res) => {
  //       // console.log(res);
  //       setFoods(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, [getFoods]);

  useEffect(() => {
    fetch('https://cookbook-api-w7xc.onrender.com/recepies').then(data => data.json()).then(data => setFoods(data)).catch(err => console.error(err))
  }, [])


  return (
    <div className="container" style={{ background: "#FAF7F0" }}>
      <div className="slider">
        {foods &&
          foods.map((food) => (

            <div
              key={food.id}
              className="img-display"
            >
              <Link to={food.title}>
                <img
                  src={`${food.img_url}`}
                  alt={food.img_url}
                  className="img"
                />
              </Link>

              <div>
                <Link to={food.title} className="link">
                  {food.title}
                </Link>
              </div>
            </div>

          ))
            .reverse()}
      </div>
    </div>
  );
};

export default Main;
