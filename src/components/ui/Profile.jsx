import { CircleHelp } from 'lucide-react';
import DarkGrid from '../Grid';

const ProfileUI = () => {
  const tabs = ['About Me', 'Experiences', 'Recommended'];

  return (
    <div>
    <div className=" flex justify-end px-28 lg:px-18 md:px-10 ">
      <div className="bg-customGray rounded-2xl p-4  mb-4 w-full max-w-2xl lg:max-w-xl xl:max-w-2xl shadow-md shadow-black transition-all duration-300 ease-in-out ">
        <div className="flex flex-col sm:flex-row items-center mb-4">
          <CircleHelp className="opacity-30 text-white mb-2 sm:mb-0  md:visible sm:invisible" />
          <div className="flex text-lg sm:text-xs justify-center bg-zinc-900 rounded-3xl shadow-zinc-900 shadow-lg w-full sm:w-5/6 sm:ml-4 p-1">
            {tabs.map((tab) => (
              <button
                className="focus:bg-zinc-700 focus:transition-all relative font-semibold my-1 mx-1 px-4 sm:px-6 py-2 rounded-xl text-base text-white overflow-hidden group w-full sm:w-auto"
                key={tab}
              >
                <span className="relative z-10 transition-colors duration-300">
                  {tab}
                </span>
                <span className="focus:bg-zinc-700 absolute left-0 top-0 w-0 h-full bg-zinc-700 opacity-25 transition-all duration-300 ease-out group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-1">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <DarkGrid  />
          </div>
          <div className="flex items-center flex-grow">
            <p className=" md:px-3 sm:px-0 text-white text-sm sm:text-base opacity-45 md:mb-2">
              Hello! I &apos;m Dave, your sales rep here from Salesforce. I &apos;ve been
              working at this awesome company for 3 years now.
              <br />
              <br />
              I was born and raised in Albany,NY & have been living in Santa
              Carla for the past 10 years with my wife Tiffany and my 4 year old
              twin daughters, Emma and Ella. Both of them are just starting
              school, so my calendar is usually blocked between 9-10 AM. This is
              a...
            </p>
          </div>
          <div className=" md:visible sm:invisible w-full sm:w-6 h-4 sm:h-16 bg-gray-500 rounded-full sm:ml-4"></div>
        </div>
      </div>
      
    </div>

    </div>
  );
};

export default ProfileUI;