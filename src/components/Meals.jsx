import MealItem from './MealItem.jsx';
import Errors from './Errors.jsx';
import useHttp from '../hooks/useHttp.js';

const requestConfig = {};

export default function Meals(){
    const {data: loadedMeals, isLoading, error} = useHttp('http://localhost:3000/meals', requestConfig, []);

    if(isLoading){
        return <p className="center">Fetching Meals...</p>
    }

    if(error){
        return <Errors title="Failed to fetch meals" message={error} />
    }

    return (
        <ul id="meals">
            {loadedMeals.map((m) => (
                <MealItem key={m.id} meal={m} />
            ))}
        </ul>
    )
}