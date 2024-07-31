import "../content/Content.css"
import { useState, useEffect } from "react";
function Left(props, image, title, text) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const textElements = document.querySelectorAll('.animate-text');
        const handleScroll = () => {
          textElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              setShow(true);
            } else {
              setShow(false);
            }
          });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <>
            <section className="content-section">
                <div className="container flex">
                    <img src={props.image} alt="" />
                    <div className="text-container">
                    <h3 className={`animate-text ${show ? 'show' : ''}`}>{props.title}</h3>
                    <p className={`animate-text ${show ? 'show' : ''}`}>{props.text}</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Left