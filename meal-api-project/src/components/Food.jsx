import useMealFetch from "../hooks/useMealFetch";
import loader from "../utils/loader";

function Food() {
  const [data] = useMealFetch("salt");
  if (!data) {
    return loader();
  }
  const dataList = data.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <div key={idMeal}>
        <h1>{strMeal}</h1>
        <p key={idMeal}>#{idMeal}</p>
        <img src={strMealThumb} alt={strMeal} />
      </div>
    );
  });
  return <div>{dataList}</div>;
}

export default Food;
