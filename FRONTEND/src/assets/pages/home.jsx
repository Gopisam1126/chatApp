// import Header from "../components/header";
// import Footer from "../components/footer";
import CreateArea from "../components/createArea";
import "../pageStyles/home.css"
function Home() {
    console.log("Home Component Rendered");
    return <>
        <section className="home-main-section">
            {/* <Header/> */}
            <CreateArea/>
            {/* <Footer/> */}
        </section>
    </>
}

export default Home;