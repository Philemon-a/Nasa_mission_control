import { useEffect, useState } from "react";

import { httpGetPlanets } from "./requests";

function usePlanets() {
  const [planets, savePlanets] = useState([]);

  

  useEffect(() => {
    const getPlanets = async () => {
      const fetchedPlanets = await httpGetPlanets();
      savePlanets(fetchedPlanets);
    };
    getPlanets();
  }, []);

  return planets;
}

export default usePlanets;
