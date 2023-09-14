"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import {RxCaretLeft, RxCaretRight} from 'react-icons/rx'
import {HiHome} from 'react-icons/hi'
import { BiSearch} from 'react-icons/bi'
import Button from './Button'


interface HeaderProps {
    children:React.ReactNode;
    className?:string;
}

const Header:React.FC<HeaderProps> = ({children, className}) => {
   
    const router = useRouter();
    const handleLogout =() =>{
        //handle later
    }

    return (  <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
         {/* is this below div we can add foward and backword button*/}
        <div className="w-full mb-4 flex items-center justify-between">
              {/* left-side is this below div we use for web screen view*/}
            <div className="hidden md:flex gap-x-2 items-center justify-center">
                <button onClick={ () => {router.back}} className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition">
                    <RxCaretLeft size ={35} className="text-white"/>

                </button>
                <button onClick={ () => {router.forward()}} className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition">
                    <RxCaretRight size ={35} className="text-white"/>

                </button>
               
            </div>

            {/* left-side  is this below div we use for mobile screen view*/}
           <div className="flex md:hidden gap-x-2 items-center ">
            <button className="rounded-full bg-white p-2 flex justify-center items-center cursor-pointer hover:op transition">
            <HiHome size={20} className="text-black"/>
            </button>
            <button className="rounded-full bg-white p-2 flex justify-center items-center cursor-pointer hover:op transition">
                <BiSearch className="text-black"  size={20}/>
            </button>
            

            
           </div>

           {/* right-side  <div className="hidden md:flex ">768px or wider</div>
           <div  className="md:hidden ">below than 768px </div> */}

        <div className="flex justify-between items-center gap-x-4">
            <>
            <div className=""><Button/></div>
            </>

        </div>
        </div>
    </div>);
}
 
export default Header;