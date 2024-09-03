import React from 'react';

const DarkGrid = () => {
  return (
    <div className="flex justify-center items-start mt-5  ">
        <div className="grid grid-cols-2 gap-0.5  p-0.5 w-6 ">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white opacity-15 aspect-square   md:visible sm:invisible"></div>
          ))}
        </div>
        </div>
  );
};

export default DarkGrid;