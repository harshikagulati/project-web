import InstagramEmbed from "./insta.jsx";
import astir from '../assets/case2.jpg'
import FadeUp from "./fadeup.jsx";

function Astir() {
    return (
        <>
            <div className="bg-img">
                <div className="image-div">
                    <div className="left-div">
                        <FadeUp>
                        <p>Branding</p>
                        <h1>Astirmind</h1>
                        <p id="left-body">Built for innovation and real-world impact, AstirMind transforms complex technology into scalable, intelligent solutions that drive meaningful business growth.</p>
                        </FadeUp>
                    </div>
                    <div className="right-div">
                        <img src={astir} alt="" />
                    </div>
                </div>
                <div className="results-div">
                    <div className="left-results">
                        <h2>RESULTS</h2>
                    </div>
                    <div className="right-results">
                        <FadeUp>
                        <h2>17K</h2>
                        <p>Views</p>
                        <h2>22K</h2>
                        <p>Media Impression</p>
                        </FadeUp>
                    </div>
                </div>
            </div>
            <div className="summary-div">
                <h2>SUMMARY</h2>
                <FadeUp>
                <p>Developed a comprehensive brand identity for AstirMind rooted in clarity, innovation, and purpose. Translated complex technological offerings into a clear, relatable narrative that resonates with its audience. Crafted a cohesive visual language, tone of voice, and positioning strategy to differentiate the brand in a competitive space. Focused on building trust and credibility while maintaining a modern, forward-thinking presence. The result is a brand that communicates confidently, connects meaningfully, and supports long-term growth with a strong, consistent identity across all touchpoints.</p>
                </FadeUp>
            </div>
            <div className="social-content">
                <FadeUp><h2>SOCIAL CONTENT</h2></FadeUp>
            </div>
            <div className="social-links">
                <div className="insta-grid">
                    <InstagramEmbed url="https://www.instagram.com/reel/DValGaqk5C_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                    <InstagramEmbed url="https://www.instagram.com/reel/DVvAo7SE56V/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                    <InstagramEmbed url="https://www.instagram.com/reel/DWCGnOfEwrI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                </div>
            </div>
        </>
    );
}

export default Astir;
