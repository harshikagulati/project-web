import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';
import logo9 from '../assets/logo9.png';
import logo10 from '../assets/logo10.png';
import missu from '../assets/missu.png';
import case2 from '../assets/case2.jpg';
import cfc from '../assets/CFC logo.png';
import { useNavigate } from "react-router-dom";
import FadeUp from './fadeup';

function Main() {
    const navigate = useNavigate();

    const handleContactClick = () => {
        const contactSection = document.getElementById('contact-us-div');

        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <>
            <div className="bg-image">
                <div className="bg-blobs" aria-hidden="true">
                    <span className="blob blob-one"></span>
                    <span className="blob blob-two"></span>
                    <span className="blob blob-three"></span>
                    <span className="blob blob-four"></span>
                </div>
                <div className="web-body">
                    <div className="left-div">
                        <FadeUp><p id="white-title">Bespoke <br />social media</p>
                            <p id="subtitle">We tailor social media with precision and personality — building brands people relate to, remember, and return to.</p></FadeUp>
                        <FadeUp><button className="join" onClick={handleContactClick}>
                            Kickstart your project
                        </button></FadeUp>
                    </div>
                </div>
            </div>
            <div className="brands-logo-padding">
                <div className="brands-logo">
                    <div className="logo-image-div">
                        <img src={logo1} alt="" />
                    </div>
                    <div className="logo-image-div">
                        <img src={logo2} alt="" />
                    </div>
                    <div className="logo-image-div">
                        <img src={logo3} alt="" />
                    </div>
                    <div className="logo-image-div">
                        <img src={logo4} alt="" />
                    </div>
                    <div className="logo-image-div">
                        <img src={logo6} alt="" />
                    </div>
                    <div className="logo-image-div">
                        <img src={logo7} alt="" />
                    </div>
                    <div className="logo-image-div">
                        <img src={logo5} alt="" />
                    </div>
                    <div className="logo-image-div">
                        <img src={logo8} alt="" />
                    </div>
                    <div className="logo-image-div">
                        <img src={logo9} alt="" />
                    </div>
                    <div className="logo-image-div">
                        <img src={logo10} alt="" />
                    </div>
                </div>
            </div>
            <div className="about-us-div" id="about">
                <div className="left-about">
                    <FadeUp>
                        <h1>The Founder’s Story</h1></FadeUp>
                </div>
                <div className="right-about">
                    <FadeUp>
                        <h3>This boutique was built on a simple belief:
                            People don’t buy products! <br />
                            They buy people, emotions, and stories.</h3>

                        <p>Our founder started by observing something most brands were missing —
                            everyone was talking at their audience, but very few were actually talking to them.

                            There was too much noise, too many templates, too little meaning.

                            So instead of building another agency focused on volume, growth hacks, or vanity metrics…
                            this space was created to do things differently.

                            To slow down.
                            To listen.
                            To build brands that feel personal, intentional, and real.

                            Because when someone lands on your page, they shouldn’t just see what you sell.
                            They should understand who you are.</p></FadeUp>
                </div>
            </div>
            <div className="services-div" id="service">
                <h2 id="service-head">Our Services</h2>
                <div className="services-list">
                    <div className="service">
                        <FadeUp>
                            <h3>BRANDING</h3>
                            <p>Branding isn’t just how you look; it’s how people remember you. We create intentional, story-driven brands that connect emotionally, build trust, and stand apart. From strategy to identity and voice, everything is designed to feel authentic, aligned, and truly yours,so your audience doesn’t just see you, they feel you.
                            </p></FadeUp>
                    </div>
                    <div className="service">
                        <FadeUp>
                            <h3>CREATIVE DIRECTION</h3>
                            <p>Creative direction that brings clarity to your vision and consistency to your brand. We shape ideas into cohesive visuals, campaigns, and experiences that feel intentional and aligned. Every detail is guided with purpose—so your brand doesn’t just look good, it communicates, connects, and leaves a lasting impression across every touchpoint.</p></FadeUp>
                    </div>
                    <div className="service">
                        <FadeUp>
                            <h3>SMO</h3>
                            <p>Social media that feels human, not forced. We create content and strategies that spark connection, build community, and keep your brand consistent. From planning to execution, everything is designed to engage your audience, grow your presence organically, and turn followers into people who trust, relate, and stay.</p></FadeUp>
                    </div>
                </div>
            </div>
            <div className="portfolio-div" id="work">
                <FadeUp>
                    <h2 id="headings">Our Work</h2></FadeUp>
                <div className="case-study">
                    <div className="left-case">
                        <FadeUp>
                            <img src={missu} alt="" />
                        </FadeUp>
                    </div>
                    <div className="right-case">
                        <h2>Missu Tag</h2>
                        <p>Thoughtfully curated gifts designed to turn simple moments into meaningful memories—personal, aesthetic, and made to make every celebration feel special and unforgettable.</p>
                        <button id="cases" onClick={() => navigate("/missucase")}>View Case Study</button>
                    </div>
                </div>
                <div className="case-study-alt">
                    <div className="left-case-alt">
                        <h2>Astirmind Software Solutions</h2>
                        <p>Built for innovation and real-world impact, AstirMind transforms complex technology into scalable, intelligent solutions that drive meaningful business growth.</p>
                        <button id="cases" onClick={() => navigate("/astirmind")}>View Case Study</button>
                    </div>
                    <div className="right-case-alt">
                        <FadeUp>
                            <img src={case2} alt="" />
                        </FadeUp>
                    </div>
                </div>
                <div className="case-study">
                    <div className="left-case">
                        <FadeUp>
                            <img src={cfc} alt="" />
                        </FadeUp>
                    </div>
                    <div className="right-case">
                        <h2>CFC Society</h2>
                        <p>Compassion-led care that supports patients and families with dignity. Through meaningful storytelling, we build awareness, connection, and a supportive community.</p>
                        <button id="cases" onClick={() => navigate("/cfc")}>View Case Study</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Main;
