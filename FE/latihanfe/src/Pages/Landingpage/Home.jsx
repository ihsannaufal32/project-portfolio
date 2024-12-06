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
            <div className="bg-gradient-to-t from-indigo-950 via-black to-black">
            <Header/>
            <Profil/>
            <About/>
            <Comment/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home