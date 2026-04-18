import { useEffect, useState } from 'react';
import '../style/header.css';
import logo from '../assets/logoHOM.png';
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [isSticky, setIsSticky] = useState(false);
    const token = localStorage.getItem("token");
    const isLoggedIn = !!token;

    useEffect(() => {
        const handleClickOutside = () => setIsOpen(false);

        window.addEventListener("click", handleClickOutside);

        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

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

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY >= 90);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        try {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            if (decoded.exp < currentTime) {
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                navigate("/login");
            } else {
                navigate("/gallery");
            }
        } catch (err) {
            localStorage.removeItem("token");
            navigate("/login");
        }
    };

    return (
        <>
            <div className={`navbar ${isSticky ? 'navbar-sticky' : ''}`}>
                <div className="logo">
                    <a href="/" onClick={(event) => event.preventDefault()}>
                        <img src={logo} alt="" id="logo-img" onClick={() => navigate("/")} />
                    </a>
                </div>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
                <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
                    <div className="navbar-menu-list">
                        <ul className="navbar-items">
                            <button type="button" className="navbar-links" onClick={() => {navigateToSection('work');setMenuOpen(false)}}>
                                Our Work
                            </button>
                            <button type="button" className="navbar-links" onClick={() => {navigateToSection('service'); setMenuOpen(false)}}>
                                Our Services
                            </button>
                            <button type="button" className="navbar-links" onClick={() => {navigateToSection('about'); setMenuOpen(false)}}>
                                Who we are?
                            </button>
                            <div style={{ position: "relative", display: "inline-block", alignContent: "center" }}>
                                {!isLoggedIn ? (
                                    <button className="login-btn" onClick={() => {handleClick(); setMenuOpen(false)}}>
                                        Login
                                    </button>
                                ) : (
                                    <>
                                        <button className="login-btn" onClick={(e) => {
                                            e.stopPropagation();
                                            setIsOpen(!isOpen);
                                        }}>
                                            Find Your Brand ▼
                                        </button>

                                        {isOpen && (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "100%",
                                                    background: "#000",
                                                    borderRadius: "10PX",
                                                    padding: "10px",
                                                    minWidth: "90%",
                                                    zIndex: 10,
                                                }}
                                            >
                                                <div
                                                    style={{ cursor: "pointer", padding: "5px 0" }}
                                                    onClick={() => {handleClick(); setMenuOpen(false)}}
                                                >
                                                    Gallery
                                                </div>

                                                <div
                                                    style={{ cursor: "pointer", padding: "5px 0" }}
                                                    onClick={() => {
                                                        localStorage.removeItem("token");
                                                        localStorage.removeItem("userId");
                                                        setMenuOpen(false)
                                                        navigate("/");
                                                    }}
                                                >
                                                    Logout
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </ul>
                    </div>
                    <div className="contact-btn">
                        <button className="Contact" type="button" onClick={() => navigateToSection('contact-us-div')}>
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
