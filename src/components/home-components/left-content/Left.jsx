import "../content/Content.css"
function Left(props, image, title, text) {
    return (
        <>
            <section className="content-section">
                <div className="container flex">
                    <img src={props.image} alt="" />
                    <div className="text-container">
                        <h3 className="animate-text">{props.title}</h3>
                        <p className="animate-text">{props.text}</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Left