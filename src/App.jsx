import React from "react";
import { GridBackgroundDemo } from "./components/GridBackground";
import ProfileUI from "./components/ui/Profile";
import Gallery from "./components/ui/Gallery";

const App = () => {
  return (
    <div style={{ position: "fixed", height: "100vh", width: "100%" }}>
      <GridBackgroundDemo />

      <div
        className="left-[25%] lg:left-[53%]"
        style={{
          position: "absolute",
          top: "10%",
          zIndex: 1,
        }}
      >
        <ProfileUI />

        <div className="border border-b-4 rounded-md opacity-55 border-zinc-700 w-5/6 mb-4 ml-16"></div>
        <div className="mr-20">
        <Gallery />
        </div>
       
        <div className="border border-b-4 rounded-md opacity-55 border-zinc-700 w-5/6 mt-4 ml-16"></div>
      </div>
    </div>
  );
};

export default App;
