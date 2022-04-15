import {Link} from "react-router-dom";
function Navbar(){

    return(
        <>
            <div id="nav">
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/list"> List </Link>
                    </li>
                </ul>
            </div>
        </>

    )
}
export default Navbar