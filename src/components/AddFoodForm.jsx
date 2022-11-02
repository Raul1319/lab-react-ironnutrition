import { useState } from "react";

function AddForm(props){

    const [name, setName] = useState("");
    const [imag, Setimag] = useState("");
    const [calories, stCalories] = useState("");
    const [servings, setServings] = useState(0);

    const addFodd = (event) =>{
        event.preventDefault()
    }

    const foodNew ={
        name: name,
        image: imag,
        calories: calories,
        servings: servings
    }
}