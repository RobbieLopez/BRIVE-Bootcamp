import { useNavigate } from "react-router-dom";
export function NavBar(){
    const navigate= useNavigate();
    return(
        <>
        <img onClick={()=>navigate("/home")} className="Logo" src="/logoRM.png" alt=""/>
        <button onClick={()=>navigate("/conditions")} className="Terms">Terms + conditions</button>
        </>
    )
}