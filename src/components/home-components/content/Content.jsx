import "./Content.css"
import { useEffect, useState } from "react"
function Content(props, title, text, image) {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const animateText = () => {
        const textElements = document.querySelectorAll('.animate-text');
        textElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    };

    useEffect(() => {
        animateText();
    }, [scrollPosition]);
    return (
        <>
            <section className="content-section">
                <div className="container flex">
                    <div className="text-container">
                        <h3 className="animate-text">{props.title}</h3>
                        <p className="animate-text">{props.text}</p>
                    </div>
                    <img src={props.image} alt="" />
                </div>
            </section>
        </>
    )
}
export default Content