import "./FoodItems.css";
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
    getFoods()
      .then((res) => {
        const singleFood = res.find(
          (item) => item.mainImage.title === params.food
        );
        // console.log(singleFood)
        setFoodItems(singleFood);
      })
      .catch((err) => console.log(err));
  }, [getFoods, params.food]);

  return (
    foodItems && (
      <>
        <header className="bg- lighttext-center" style={{background: "#EDE4E0"}}>
          <div className="container--narrow">
            <h1>{foodItems.title}</h1>
            <p>{foodItems.description}</p>
          </div>
        </header>

        <section className="bg-accent" style={{background: "#EDE4E0"}}>
          <div className="container">
            <div className="container-divs image">
              <img
                src={`${foodItems.mainImage.file.url}`}
                alt={foodItems.mainImage.file.url}
              />
            </div>
            <div className="container-divs instructions">
              <h2>Instructions</h2>
              <p>{foodItems.instructions}</p>
            </div>
            <div className="container-divs ingredients">
              <h4>Ingredients</h4>
              <ul>
                {foodItems.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </>
    )
  );
};

export default FoodItems;
