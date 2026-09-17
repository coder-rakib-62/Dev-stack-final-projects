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
    <div className="container mx-auto ">
      <h2 className="mb-2 font-bold text-4xl">
        Explore the{" "}
        <span className="bg-gradient-to-r from-[#DC4BA8] to-[#CB4FB9] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="mb-12">Pick one technology per category to build your ideal stack.</p>
      <TechnologyCard technology={technology}></TechnologyCard>
    </div>
  );
};

export default Technologies;
