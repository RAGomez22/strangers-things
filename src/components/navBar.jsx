import { Link } from "react-router-dom";
export default function NavBar({setToken,token}){

    function logout(){
        setToken(null);
        localStorage.removeItem('token');
    }
    
    return(
        <header>
            <nav>
            <ul className="Nav">
                {token && <li><Link to="/" onClick={logout}> Logout </Link></li> }
                {token && <li> <Link to="/profile"> Profile </Link> </li> }
                {!token && <li> <Link to="/register"> Register </Link></li>}
                {!token && <li><Link to="/login"> Login </Link></li> }
            
                <li> <Link to="/"> Posts </Link></li>

            </ul>
        </nav>
        </header>
    )
}
