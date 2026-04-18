import InstagramEmbed from "./insta.jsx";
import cfc from '../assets/CFC logo.png';
import FadeUp from "./fadeup";

function CFC() {
    return (
        <>
            <div className="bg-img">
                <div className="image-div">
                    <div className="left-div">
                        <FadeUp>
                            <p>Social Media Management</p>
                            <h1>CFC Society</h1>
                            <p id="left-body">Compassion-led care that supports patients and families with dignity. Through meaningful storytelling, we build awareness, connection, and a supportive community.</p></FadeUp>
                    </div>
                    <div className="right-div">
                        <img src={cfc} alt="" />
                    </div>
                </div>
                <div className="results-div">
                    <div className="left-results">
                        <h2>RESULTS</h2>
                    </div>
                    <div className="right-results">
                        <FadeUp>
                            <h2>+106%</h2>
                            <p>Accounts Reached</p>
                            <h2>15K</h2>
                            <p>Views</p>
                        </FadeUp>
                    </div>
                </div>
            </div>
            <div className="summary-div">
                <h2>SUMMARY</h2>
                <FadeUp>
                    <p>Planned and managed social media for a palliative care NGO with a focus on empathy, awareness, and community building. Created meaningful content that highlighted patient stories, caregiver support, and the importance of compassionate care. Maintained a consistent, sensitive tone while increasing visibility and engagement. Encouraged conversations and support through thoughtful storytelling rather than promotion. The approach helped strengthen the NGO’s digital presence, foster trust, and build a connected, supportive online community around its mission.</p>
                </FadeUp>
            </div>
            <div className="social-content">
                <FadeUp><h2>SOCIAL CONTENT</h2></FadeUp>
            </div>
            <div className="social-links">
                <div className="insta-grid">
                    <InstagramEmbed url="https://www.instagram.com/p/DVQWKtRktFk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                    <InstagramEmbed url="https://www.instagram.com/reel/DVVOXoqkmDA/?utm_source=ig_web_copy_link" />
                    <InstagramEmbed url="https://www.instagram.com/reel/DXEIriMjoos/?utm_source=ig_web_copy_link" />
                </div>
            </div>
        </>
    );
}

export default CFC;
