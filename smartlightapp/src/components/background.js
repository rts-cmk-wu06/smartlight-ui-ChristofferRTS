const Bg = () => {
    return ( 
        <div className="container absolute h-full -z-10 " style={{backgroundColor:"#0A4DA2"}}>
            <div id="circleContainer" className="w-full h-1/2">
                <div id="circle" className="absolute w-48 h-48 rounded-full -top-20 -left-14" style={{backgroundColor:"#FFFFFF", opacity:"4.3%"}}/>
                <div id="circle" className="absolute w-48 h-48 rounded-full top-40" style={{backgroundColor:"#FFFFFF", opacity:"4.3%"}}/>
                <div id="circle" className="absolute w-48 h-48 rounded-full top-16 -right-20" style={{backgroundColor:"#FFFFFF", opacity:"4.3%"}}/>
            </div>
        </div>
     );
}
 
export default Bg;