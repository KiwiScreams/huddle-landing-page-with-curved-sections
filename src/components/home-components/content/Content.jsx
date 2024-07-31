import "./Content.css"
import { useEffect, useState } from "react"
function Content(props, title, text, image) {
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
                    <div className="text-container">
                        <h3 className={`animate-text ${show ? 'show' : ''}`}>{props.title}</h3>
                        <p className={`animate-text ${show ? 'show' : ''}`}>{props.text}</p>
                    </div>
                    <img src={props.image} alt="" />
                </div>
            </section>
        </>
    )
}
export default Content