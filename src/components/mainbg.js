
const MainBg = (props) => {
    return ( 
            <div className=" rounded-t-3xl cotainer h-4/5" style={{backgroundColor:"#F6F8FB"}}>
                {props.children}
            </div>
     );
}
 
export default MainBg;