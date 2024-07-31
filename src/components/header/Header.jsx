import "./Header.css";
import logo from "../../assets/images/logo.svg";
function Header()
{
    return(
        <>
        <header>
            <nav>
                <h1><img src={logo} alt="logo" /></h1>
                <button>Try It Free</button>
            </nav>
        </header>
        </>
    )
}
export default Header