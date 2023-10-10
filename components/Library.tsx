"use client"

import { twMerge } from "tailwind-merge";
import { TbPlaylist } from "react-icons/tb";
import {AiOutlinePlus} from "react-icons/ai"

const Library = () => {
  const onClick = () => {
    // handle it later
  };

  return (
    <div className={twMerge(`flex flex-col`)}>

      <div className="flex items-center justify-between px-5 pt-5 ">
      <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400 font-medium text-md"/>
          <p className="text-neutral-400 font-medium text-md ">Your Library</p>{" "}
      </div>
        <AiOutlinePlus size={20} className="text-neutral-400 hover:text-white transition cursoer-pointer " onClick={onClick}/>
      </div>
      
      <div className="flex flex-col gap-y-2 mt-4 px-3"> List of Songs!</div>



    </div>
  );
};

export default Library;
