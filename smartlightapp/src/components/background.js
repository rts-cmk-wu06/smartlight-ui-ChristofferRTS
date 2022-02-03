const Bg = () => {
    return ( 
        <div className="container h-full bg-blue-900">
            <div id="circleContainer" className="container h-">
                <div id="circle" className="absolute w-48 h-48 rounded-full opacity-20 bg-sky-800 -top-20 -left-14"/>
                <div id="circle" className="absolute w-48 h-48 rounded-full bg-sky-800 opacity-20 top-40"/>
                <div id="circle" className="absolute w-48 h-48 rounded-full bg-sky-800 opacity-20 top-16 -right-20"/>
            </div>
        </div>
     );
}
 
export default Bg;