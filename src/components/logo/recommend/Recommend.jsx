import React, {useEffect,useState} from 'react'
import './recommend.css'
import getContentful from "../../../getContentful";
import { Link } from "react-router-dom";

export default function Recommend({foodItems}) {
    const { getFoods } = getContentful();
    const [food,SetFood] = useState(null)
    useEffect(() => {
        // set the foods here since it 's already an array
        getFoods()
          .then((res) => { SetFood(res);
          })
          .catch((err) => console.log(err));
      }, []);

    //   USING SPLICE TO REMOVE THE CURRENT ELEMENT FROM THE FOOD ARRAY
    //USING indexOf to indetify the index of the current element in the food array
    
//       console.log(food)
// const[spliced,setSpliced]=useState()
// useEffect(() => {
//     const filtered = (food) && food.findIndex(ele => ele.mainImage.title === foodItems.food)
//     const spliced2 = (food) && food
//     {(spliced2) && spliced2.splice(filtered,1)} 
//     setSpliced(spliced2) 
//     console.log("spliced2",spliced2) 
//     console.log("spliced",spliced)    

// }, [])

  return (
    <>  
    <div className='Card_Container21'>
    {food && food.map((ele) => 
        <>
         <Link className='Link' to={`/cookbook-v2/${ele.mainImage.title}`}>
        <div className='main_Card_Item'>
        <div className='Card_Item_Image'>
        <img src={ele.mainImage.file.url} alt={ele.title} />
        </div>
        <div className='Card_Item_Desc'>
            <h4>{ele.title}</h4>
        <p>{ele.description}</p>
        </div>

    </div>
                  </Link>
    </>
    )}
    </div>
</>
  )
}
