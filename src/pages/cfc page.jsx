import Contact from "../component/contact";
import Footer from "../component/footer";
import Header from "../component/header";
import CFC from "../component/cfc";

function CFCpage(){
    return(
        <>
            <Header />
            <CFC />
            <Contact />
            <Footer />
        </>
    );
}

export default CFCpage;