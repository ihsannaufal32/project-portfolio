import Header from "./Header";
import Navbar from "./Navbar";
import Profil from "./Profil";
import About from "./About";
import Comment from "./Comment";
import Footer from "./Footer";

function Home(){
    return(
        <div>
            <Navbar/>
            <Header/>
            <Profil/>
            <About/>
            <Comment/>
            <Footer/>
        </div>
    );
};

export default Home