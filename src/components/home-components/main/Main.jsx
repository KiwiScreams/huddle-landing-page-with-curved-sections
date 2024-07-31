import "./Main.css";
import mainImage from "../../../assets/images/main-image.svg"
import icon1 from "../../../assets/images/icon-1.svg"
import icon2 from "../../../assets/images/icon-2.svg"
import Button from "../../button/Button";

function Main() {
    return (
        <>
            <section className="main-section">
                <h2>Build The Community Your Fans Will Love</h2>
                <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
                <Button />
                <img src={mainImage} alt="" className="image"/>
                <div className="diagram">
                    <div className="diagram-box">
                        <img src={icon1} alt="" />
                        <h1>1.4k+</h1>
                        <span>Communities Formed</span>
                    </div>
                    <div className="diagram-box">
                        <img src={icon2} alt="" />
                        <h1>2.7m+</h1>
                        <span>Messages Sent</span>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Main