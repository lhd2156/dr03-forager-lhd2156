import React from 'react';

const BackgroundScreen = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-[#F1F3EB] flex flex-col">
      {children}
    </div>
  );
};

export default BackgroundScreen;
