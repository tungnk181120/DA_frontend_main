import Nav from "../../components/Nav/Nav";
import Home from "../../components/Home/Home";
import Footer from "../../components/Footer/Footer";
function HomePage() {
    return (
        <div className="home-page">
            <Nav></Nav>
            <Home></Home>
            <Footer></Footer>
        </div>
    )
}

export default HomePage;