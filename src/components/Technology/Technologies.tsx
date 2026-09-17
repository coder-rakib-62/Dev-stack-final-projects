import { use } from "react";
import type { Itechnology } from "../../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologyProps {
  technologyPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologyPromise }: TechnologyProps) => {
  const technology = use(technologyPromise);
  console.log(technology);
  return (
    <div>
      <TechnologyCard technology={technology}></TechnologyCard>
 
    </div>
  );
};

export default Technologies;
