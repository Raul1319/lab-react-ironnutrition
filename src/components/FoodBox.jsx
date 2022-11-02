import { Card } from "antd";
import { useState } from "react"


function FoodBox({food}) {
return (
 
    <card title={food.name}>
    <img src={food.image} height={90}/>
    <p>Calories: {food.calories}</p>
    <p>Servings: {food.servings}</p>
 
    <p>Total Calories: {food.calories * food.servings}</p>

    <button type="primary">Delete</button> 
    </card>






)





}






















export default FoodBox;