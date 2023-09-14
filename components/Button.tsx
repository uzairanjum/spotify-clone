

interface Buttonprops {
    children?: React.ReactNode,
    className?: string
}

const Button:React.FC<Buttonprops> = ({children}) => {
    return (  <div>
        Button
    </div>);
}
 
export default Button;