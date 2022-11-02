import './App.css';
import foods from './foods.json';
import { useState } from "react"
import FoodBox from './components/FoodBox';

function App() {

 const [list, setList] = useState (foods)
  return (<div className="App">

       {list.map((food, index) =>{
        return(

          <div>

           

           <FoodBox food={ {
           name: food.name,
           calories: food.calories,
           image: food.image,
           servings: food.servings
          }} />

          </div>
          

        )
        
       })}

   </div>






  )


  
  
  

  
}


export default App;