import Content from "../components/home-components/content/Content"
import Main from "../components/home-components/main/Main"
import image_1 from "../assets/images/image1.svg"
import image_2 from "../assets/images/image2.svg"
import image_3 from "../assets/images/image3.svg"
import bg from "../assets/images/path.svg"
import Left from "../components/home-components/left-content/Left"
import Community from "../components/home-components/button/Community"


function Home() {
    return (
        <>
            <Main />
            <Content title="Grow Together" text="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. "
                image={image_1} style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
            </Content>
            <Left title="Flowing Conversations" text="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow." image={image_2}>
            </Left>
            <Content title="Your Users" text="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
                image={image_3} style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
            </Content>
            <Community />
        </>
    )
}
export default Home