import { CircleHelp } from 'lucide-react';
import DarkGrid from '../Grid';

const ProfileUI = () => {
  const tabs = ['About Me', 'Experiences', 'Recommended'];

  return (
    <div className="bg-customGray rounded-2xl p-4 mb-4 max-w-2xl shadow-md shadow-black">
      <div className="flex items-center mb-1">
        <CircleHelp className="opacity-30 text-white" />
        <div className="flex justify-center mb-4 bg-zinc-900 rounded-3xl shadow-zinc-900 shadow-lg w-5/6 ml-4">
      {tabs.map((tab) => (
        <button
          className=" focus:bg-zinc-700 focus:transition-all relative font-semibold my-2 mx-1 px-10 py-2 rounded-xl text-white overflow-hidden group"
          key={tab}
        >
          <span className="relative z-10 transition-colors duration-300 ">
            {tab}
          </span>
          <span className=" focus:bg-zinc-700 absolute left-0 top-0 w-0 h-full bg-zinc-700 opacity-25 transition-all duration-300 ease-out group-hover:w-full"></span>
        </button>
      ))}
   

        </div>
      </div>

      <div className="flex gap-2  mt-1">
        <DarkGrid />
        <div className="flex items-center">
          <p className=" px-3 text-white text-lg opacity-45">
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.
            <br />
            <br />
            I was born and raised in Albany, NY & have been living in Santa
            Carla for the past 10 years with my wife Tiffany and my 4-year-old
            twin daughters, Emma and Ella. Both of them are just starting
            school, so my calendar is usually blocked between 9-10 AM. This is
            a...
          </p>
        </div>
        <div className="w-6 h-16 bg-gray-500 rounded-full ml-4 "></div>

      </div>
    </div>
  );
};

export default ProfileUI;
