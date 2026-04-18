import logo from '../assets/logoHOM.png';
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const navigateToSection = (sectionId) => {
        if (location.pathname === '/') {
            scrollToSection(sectionId);
        } else {
            navigate(`/#${sectionId}`);
        }
    };
    return (
        <>
            <div className="footer-div">
                <div className="footer-container">
                    <div className="contact-div">
                        <img src={logo} alt="" />
                        <h2>House of Media</h2>
                        <div className="socials">
                            <a href='#'><i className="fa-brands fa-facebook-f fa-lg" style={{ color: " #ffffff" }} /></a>
                            <a href='#'><i className="fa-brands fa-instagram fa-lg" style={{ color: " #ffffff" }} /></a>
                            <a href='#'><i className="fa-brands fa-twitter fa-lg" style={{ color: "#ffffff" }} /></a>
                            <a href='#'><i className="fa-brands fa-youtube fa-lg" style={{ color: "#ffffff" }} /></a>
                            <a href='#'><i className="fa-brands fa-linkedin fa-lg" style={{ color: "#ffffff" }} /></a>
                        </div>
                    </div>
                    <div className="pages-div">
                        <h2>Pages</h2>
                        <button onClick={() => navigate("/")}>Home</button><br />
                        <button onClick={() => navigateToSection('work')}>Portfolio</button><br />
                        <button onClick={() => navigateToSection('service')}>Services</button><br />
                        <button onClick={() => navigateToSection('about')}>About Us</button><br />
                        <button onClick={() => navigate("/login")}>Find your brand</button><br />
                        <button onClick={() => navigateToSection('contact-us-div')}>Contact Us</button>
                    </div>
                </div>
                <hr /><br />
                <p>© 2025 House of Media All Rights Reserved</p>
            </div>
        </>
    );
}

export default Footer;