import "./Content.css"
function Content(props, title, text, image) {
    return (
        <>
            <section className="content-section">
                <div className="container flex">
                    <div className="text-container">
                        <h3>{props.title}</h3>
                        <p>{props.text}</p>
                    </div>
                    <img src={props.image} alt="" />
                </div>
            </section>
        </>
    )
}
export default Content