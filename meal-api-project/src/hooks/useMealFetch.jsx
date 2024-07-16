import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function useMealFetch(meal) {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`)
      .then((r) => setData(r.data.meals))
      .catch((err) => console.log(err));
  }, [meal]);
  return [data];
}

export default useMealFetch;
