import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, PlusCircle ,CircleHelp} from 'lucide-react';

const ProfileUI = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const tabs = ['About Me', 'Experiences', 'Recommended'];

  return (
    <div className="">
     

      <div className="bg-customGray  rounded-lg p-4 mb-4 w-4/5  ">
      
      {/* <CircleHelp/> */}
      <div className='flex '>
      <CircleHelp style={{ opacity: 0.3}} color='white' />


        <div className="flex justify-center mb-4 bg-zinc-900 rounded-3xl shadow-black shadow-2xl w-11/12 ml-2">
      
          {tabs.map((tab) => (
            <button
             
              className='focus:bg-zinc-700 font-semibold my-2  mx-1 px-10 py-2 opacity-75 rounded-xl text-white'
              key={tab}
            >
              {tab}
            </button>
          ))}
     </div>
        </div>
        <div className="px-7 opacity-45 text-white text-base mt-2">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been
          working at this awesome company for 3 years now.
          <br /><br />
          I was born and raised in Albany, NY& have been living in Santa
          Carla for the past 10 years my wife Tiffany and my 4 year old twin
          daughters- Emma and Ella. Both of them are just starting school,
          so my calender is usually blocked between 9-10 AM. This is a...
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <button className="px-4 py-2 rounded-full bg-gray-700">Gallery</button>
          <div className="flex items-center space-x-2">
            <button className="bg-gray-700 p-2 rounded-full flex items-center">
              <PlusCircle size={16} /> <span className="ml-1">ADD IMAGE</span>
            </button>
            <button className="bg-gray-700 p-2 rounded-full"><ChevronLeft size={16} /></button>
            <button className="bg-gray-700 p-2 rounded-full"><ChevronRight size={16} /></button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
              <img src="/api/placeholder/100/100" alt="Gallery item" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileUI;