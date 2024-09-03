import React from "react";

export function GridBackgroundDemo() {
  return (
    <div
      className="fixed inset-0 h-full w-screen z-0 flex-wrap dark:bg-customBlack bg-white dark:bg-grid-white/[0.02] bg-grid-gray-600/[0.1] flex items-center justify-center"
    >
      {/* Optional radial gradient for a faded look */}
      {/* <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      ></div> */}
    </div>
  );
}
