import "./Header.css";
import logo from "../../assets/images/color_logo_transparent.svg";
function Header()
{
    return(
        <>
        <header>
            <nav className="flex">
                <h1><img src={logo} alt="logo" /></h1>
                <button>Try It Free</button>
            </nav>
        </header>
        </>
    )
}
export default Header