import React from "react";
import PillList from "@/components/PillList";

const FilterSettings = ({ lists, onPillClick }) => {
  return (
    <div className="flex flex-col gap-6">
      {lists.map((list, index) => (
        <div key={index}>
          <h2 className="text-lg font-bold text-black">{list.category}</h2>
          <PillList
            pills={list.pills}
            onPillClick={(pillLabel) => onPillClick(index, pillLabel)}
          />
        </div>
      ))}
    </div>
  );
};

export default FilterSettings;
