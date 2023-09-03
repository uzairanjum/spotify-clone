
// steps
// type sfc
// return to childern
// remove type script error by creating interface
// then use React.FC<> to intisilze SideBarProps



interface SideBarProps {
    children: React.ReactNode;
}

const SideBar :React.FC<SideBarProps> = ({children}) => {
    return (  <div>{children}</div>);
}
 
export default SideBar;