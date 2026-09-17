import React from "react";
import type { Itechnology } from "../../types/technology";

const TechnologyCard = ({ technology }) => {
  console.log(technology, "technologies from technologyCard");
  return (
    <div className="grid grid-cols-3 gap-4">
      {technology.map((technology: Itechnology) => {
        return (
          <div className="w-full max-w-[365px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* Top Section */}
            <div className="mb-7 flex items-start justify-between">
              {/* Technology Icon */}
              <div className="flex h-12 w-12 items-center justify-center">
                <img
                  src={technology.technologyIcon}
                  alt="technologyIconImage"
                  className="h-10 w-10 object-contain"
                />
              </div>

              {/* Badge */}
              <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-600">
                {technology.badge}
              </span>
            </div>

            {/* Technology Name */}
            <h2 className="mb-2 text-[24px] font-bold text-slate-900">
              {technology.technologyName}
            </h2>

            {/* Description */}
            <p className="min-h-18 text-[16px] leading-7 text-slate-500">
              {technology.description}
            </p>

            {/* Divider */}
            <div className="my-5 h-px bg-slate-100"></div>

            {/* Information */}
            <div className="mb-5 flex items-center justify-between gap-2 text-sm">
              {/* Category */}
              <span className="rounded-md bg-slate-100 px-3 py-1.5 text-slate-600">
                {technology.category}
              </span>

              {/* Difficulty */}
              <span className="text-slate-500">{technology.difficulty}</span>

              {/* Rating */}
              <span className="flex items-center gap-1 font-semibold text-slate-700">
                <span className="text-[17px] text-amber-400">★</span>
                {technology.rating}
              </span>
            </div>

            {/* Button */}
            <button className="w-full rounded-xl bg-slate-950 py-3.5 text-[15px] font-medium text-white transition-all duration-300 hover:bg-slate-800 active:scale-[0.98]">
              Add to Stack
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologyCard;
