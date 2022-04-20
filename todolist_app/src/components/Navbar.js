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
                        <Link to="/calander"> Calander </Link>
                    </li>
                </ul>
            </div>
        </>

    )
}
export default Navbar