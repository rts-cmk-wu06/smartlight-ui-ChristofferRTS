import MainBg from "./mainbg";
import BtnContainer from "./buttonsContainer";
import Navbar from "./navbar";

const Main = () => {
    return ( 
        <>
        <MainBg>
            <h3 className="p-6">All Rooms</h3>
            <BtnContainer/>
            <Navbar/>
        </MainBg>
        </>
     );
}
 
export default Main;