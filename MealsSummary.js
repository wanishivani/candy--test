import Card from '../UI/Card';
import  './Meals.Summary.modules.css';
const MealsSummary = (props) => {
  return (
    <section className='summary'>
      <Card>
      <h2>Delicious candy, Delivered To You</h2> 
      <p>
        Choose your favorite Candy from our broad selection of available candy
        and enjoy a delicious candy.
    <br></br>
      </p>
      </Card>
    </section>  
  )
};

export default MealsSummary;
