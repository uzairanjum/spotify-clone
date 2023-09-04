import { twMerge } from "tailwind-merge";

 
interface BoxProps {
    chilren :React.ReactNode;
    className ?:string; 
}


const  Box: React.FC<BoxProps> = ({chilren, className}) => {
    return (  <div className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full `, className)}>



xxx
        {chilren}
    </div>);
}
 
export default Box;