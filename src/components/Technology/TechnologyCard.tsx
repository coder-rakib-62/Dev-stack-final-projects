import React from "react";

const TechnologyCard = ({ technology }) => {
  console.log(technology, "technologies from technologyCard");
  return (
    <div className="container mx-auto">
      <h2 className="mb-2 font-bold text-4xl">
        Explore the{" "}
        <span className="bg-gradient-to-r from-[#DC4BA8] to-[#CB4FB9] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p>Pick one technology per category to build your ideal stack.</p>
    </div>
  );
};

export default TechnologyCard;
