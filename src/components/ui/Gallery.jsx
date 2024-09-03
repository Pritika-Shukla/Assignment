import React, { useState, useRef } from "react";
import { CircleHelp, ArrowLeft, ArrowRight, Plus } from "lucide-react";
import DarkGrid from "../Grid";

const Gallery = () => {
  const [images, setImages] = useState([
    "https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__",
    "https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__",
    "https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__",
  ]);

  const scrollContainerRef = useRef(null);

  const handleAddImage = () => {
    const newImage = "https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__";
    setImages((prevImages) => [...prevImages, newImage]);
  };

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-customGray rounded-2xl py-5 px-3  mb-4 w-full max-w-2xl lg:max-w-xl xl:max-w-2xl shadow-md shadow-black transition-all duration-300 ease-in-out ml-11 ">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-4 sm:mb-8 ">
        <div className="flex justify-between space-x-4 mb-4 sm:mb-0">
          <CircleHelp className="opacity-30 text-white" />
          <button className="px-6 sm:px-10 py-3 sm:py-4 bg-zinc-900 text-white rounded-2xl text-xs sm:text-sm font-medium">
            Gallery
          </button>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end space-x-4 mr-20">
          <button
            onClick={handleAddImage}
            className="bg-customGray px-3 py-3 font-semibold rounded-full flex items-center text-white shadow-black shadow-md text-xs mb-2 sm:mb-0 sm:mr-5"
          >
            <Plus size={14} strokeWidth={2} className="mr-1" /> ADD IMAGE
          </button>
          <button 
            className="opacity-40 hover:opacity-100 p-3 shadow-lg shadow-cyan-200 hover:shadow-cyan-300 hover:shadow-2xl rounded-full text-white bg-zinc-900 "
            onClick={() => handleScroll('left')}
          >
            <ArrowLeft size={20} strokeWidth={3} />
          </button>
          <button 
            className="opacity-40 hover:opacity-100 p-3 shadow-lg shadow-cyan-200 hover:shadow-cyan-300 hover:shadow-2xl rounded-full text-white bg-zinc-900 "
            onClick={() => handleScroll('right')}
          >
            <ArrowRight size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mt-1">
        <div className="hidden sm:block">
          <DarkGrid />
        </div>
        <div 
          ref={scrollContainerRef}
          className="w-full sm:w-11/12 mx-auto sm:mx-4 overflow-x-hidden"
        >
          <div className="flex">
            {images.map((image, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-black transition-transform duration-300 ease-in-out transform hover:translate-x-2"
              >
                <img
                  src={image}
                  alt={`Gallery item ${i + 1}`}
                  className="h-32 w-32 sm:h-44 sm:w-44 object-cover grayscale hover:grayscale-0 mr-4 rounded-3xl "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;