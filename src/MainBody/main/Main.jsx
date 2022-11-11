import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Main.css";

import getContentful from "../../getContentful";

import React from "react";

const Main = () => {
  const [foods, setFoods] = useState(null);

  const { getFoods } = getContentful();

  useEffect(() => {
    // set the foods here since it 's already an array
    getFoods()
      .then((res) => {
        // console.log(res);
        setFoods(res);
      })
      .catch((err) => console.log(err));
  }, [getFoods]);

  return (
    <div className="container" style={{background: "#FAF7F0"}}>
      <div className="slider">
        {foods &&
          foods.map((food) => (
            
              <div
                key={food.mainImage.file.details.size}
                className="img-display"
              >
                <Link to={food.mainImage.title}>
                <img
                  src={`${food.mainImage.file.url}`}
                  alt={food.mainImage.file.url}
                  className="img"
                />
                  </Link>

                <div>
                  <Link to={food.mainImage.title} className="link">
                    {food.title}
                  </Link>
                </div>
              </div>
            
          ))}
      </div>
    </div>
  );
};

export default Main;
