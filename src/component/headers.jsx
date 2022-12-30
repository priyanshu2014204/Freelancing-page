import { Link } from "react-router-dom";
import {HashLink} from "react-router-hash-link"


const Headers = () => {
    return ( 
    <nav style={{zIndex:"10000"}}>
        <h1>Priyanshu</h1>
        <main>
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>contact</Link>
        <HashLink to={"/#about"}>about</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Service</Link>
        </main>
    </nav>

    );
}
 
export default Headers;