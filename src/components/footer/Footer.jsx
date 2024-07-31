import "./Footer.css"
import logo from "../../assets/images/logo.svg"
import facebook from "../../assets/images/facebook.svg"
import instagram from "../../assets/images/instagra.svg"
import twitter from "../../assets/images/twitter.svg"

function Footer() {
    return (
        <>
            <footer className="flex">
                <div className="content">
                    <img src={logo} alt="" className="logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
                    <div className="info">
                        <p>Phone: +1-543-123-4567</p>
                        <p>example@huddle.com</p>
                    </div>
                    <div className="social-icons">
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
                <div className="content">
                    <h2>NEWSLETTER</h2>
                    <p>To recieve tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address</p>
                    <div className="flex div">
                        <input type="email" name="email" id="email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer