const Btn = (props) => {
    return ( 
        <div className="h-[9.375rem] w-[9.375rem] m-auto bg-white drop-shadow-[0_3px_11px_rgba(10,77,162,0.059)] rounded-[1.75rem] px-[1.125rem] py-5 font-bold">
            {props.children}
        </div>

     );
}
 
export default Btn;