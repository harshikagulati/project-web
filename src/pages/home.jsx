import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Contact from '../component/contact';
import Footer from '../component/footer';
import Header from '../component/header';
import Main from '../component/main';

function Home(){
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            return;
        }

        const sectionId = location.hash.slice(1);
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [location]);

    return(
        <>
            <Header />
            <Main />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;
