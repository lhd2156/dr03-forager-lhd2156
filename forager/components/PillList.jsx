"use client";
import React, { useState } from "react";
import Pill from "@/components/Pill";

const PillList = ({ category, pills, onPillClick }) => {
  const [pillStates, setPillStates] = useState(pills);

  // Handle pill click and update state
  const handlePillClick = (clickedLabel) => {
    const updatedPills = pillStates.map((pill) =>
      pill.label === clickedLabel
        ? { ...pill, isSelected: !pill.isSelected }
        : pill
    );
    setPillStates(updatedPills);
    onPillClick(clickedLabel);
  };

  return (
    <div>
      <h2 className="text-lg font-bold">{category}</h2>
      <div className="flex flex-wrap gap-2 mt-2">
        {pillStates.map((pill, index) => (
          <Pill
            key={index}
            label={pill.label}
            isSelected={pill.isSelected}
            onClick={handlePillClick}
          />
        ))}
      </div>
    </div>
  );
};

export default PillList;
