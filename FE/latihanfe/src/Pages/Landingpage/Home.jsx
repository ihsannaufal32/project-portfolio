import Header from "../../Component/Header";
import Navbar from "../../Component/Navbar";
import Profil from "../../Component/Profil";
import About from "../../Component/About";
import Comment from "../../Component/Comment";
import Footer from "../../Component/Footer";

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