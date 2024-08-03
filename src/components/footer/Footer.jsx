import "./Footer.css";
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagra.svg";
import twitter from "../../assets/images/twitter.svg";
import { useState, useEffect } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsValid(false);
      setMessage("Check your email please");
    } else {
      setIsValid(true);
      setMessage("");
      console.log("Email is valid");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <footer>
        <div className="content-container flex">
          <div className="content">
            <img src={logo} alt="" className="logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
            <div className="info">
              <p>Phone: +1-543-123-4567</p>
              <p>example@huddle.com</p>
            </div>
            <div className="social-icons">
              <a href="#">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-square-twitter"></i>
              </a>
            </div>
          </div>
          <div className="content">
            <h2>NEWSLETTER</h2>
            <p>
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We'll never send you spam or pass on your email
              address
            </p>
            <div className="flex div">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className={isValid ? "" : "error-input"}
              />
              <button onClick={handleSubscribe}>Subscribe</button>
              {!isValid && (
                <p className="p" style={{ color: "red" }}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
