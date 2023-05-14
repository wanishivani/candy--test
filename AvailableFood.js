import MealItem from "./MealsItem/MealItem";
import "./Available.css";
import Card from '../UI/Card';
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Ecliear",
    description: "Chcolaty",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Mango bite",
    description: "spicey & sweet!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Candyman",
    description: "Creamy",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Melody",
    description: "Dark chcolaty",
    price: 18.99,
  },
];




const AvailableFood = (props) => {
  const mealList = DUMMY_MEALS.map((meals) =>(
     <MealItem 
        key={meals.id}
        id={meals.id}
       name={meals.name} 
       Amount={meals.amount}
     description={meals.description}
      price={meals.price}/>
      )
  );
  

  return (       
    <section className='meals'>
       <div className='div'>
     <label>Candy Name:</label>
      <input type='text'></input>
      <label>Description:</label>
      <input type='text'></input>
      <label>Price:</label>
      <input type='number'></input>
      <button onsubmit='submit'>Add</button>
     </div>
      <Card>
      <ul>{mealList}</ul>
      </Card>

    </section>
      

  );
};

export default AvailableFood;
