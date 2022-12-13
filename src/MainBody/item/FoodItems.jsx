// import "./FoodItems.css";
import "./FoodItems2.css";
import Recommend from "../../components/logo/recommend/Recommend";

import getContentful from "../../getContentful";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const FoodItems = () => {
  let params = useParams();
  // console.log(params);

  const [foodItems, setFoodItems] = useState(null);

  const { getFoods } = getContentful();

  useEffect(() => {
    // set the foods here since it 's already an array
    fetch('https://cookbook-api-w7xc.onrender.com/recepies')
    .then(data => data.json())
      .then((res) => {
        console.log(res)
        const singleFood = res.find(
          (item) => item.title === params.food
        );
        // console.log(singleFood)
        setFoodItems(singleFood);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    foodItems && (
      <>
      <div className="grid_main">
      <div className="grid_main_left">
        <Recommend foodItems={params}/>
      </div>
      <div className="grid_main_center">
        
      <header className="bg-lighttext-center" style={{background: "#EDE4E0"}}>
          <div className="container--narrow">
            <h1>{foodItems.title}</h1>
            <p>{foodItems.description}</p>
          </div>
        </header>

        <section className="bg-accent" style={{background: "#EDE4E0"}}>
          <div className="container">
            <div className="container-divs image">
              <img
                src={`${foodItems.img_url}`}
                alt={foodItems.img_url}
              />
            </div>
            <div className="container-divs instructions">
              <h2>Instructions</h2>
              <p>{foodItems.instructions}</p>
            </div>
            <div className="container-divs ingredients">
              <h4>Ingredients</h4>
              <ul>
                <li>{foodItems.ingredients}</li>
                {/* {foodItems.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))} */}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="grid_main_right"></div>
      </div>
      </>
    )
  );
};

export default FoodItems;
