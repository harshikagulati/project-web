import InstagramEmbed from "./insta.jsx";
import missu from '../assets/missu.png'
import FadeUp from "./fadeup.jsx";

function Case() {
    return (
        <>
            <div className="bg-img">
                <div className="image-div">
                    <div className="left-div">
                        <FadeUp>
                        <p>Product Launch</p>
                        <h1>Missu Tags</h1>
                        <p id="left-body">Thoughtfully curated gifts designed to turn simple moments into meaningful memories—personal, aesthetic, and made to make every celebration feel special and unforgettable.</p></FadeUp>
                    </div>
                    <div className="right-div">
                        <img src={missu} alt="" />
                    </div>
                </div>
                <div className="results-div">
                    <div className="left-results">
                        <h2>RESULTS</h2>
                    </div>
                    <div className="right-results">
                        <FadeUp>
                        <h2>66K</h2>
                        <p>Views</p>
                        <h2>68K</h2>
                        <p>Media Impression</p>
                        </FadeUp>
                    </div>
                </div>
            </div>
            <div className="summary-div">
                <h2>SUMMARY</h2>
                <FadeUp>
                <p>Planned and executed the Missu Tags product launch with a focused social media strategy designed to build anticipation and drive engagement. Developed pre-launch teasers, curated visually consistent content, and ensured timely rollout across platforms. Positioned the product through storytelling rather than just promotion, highlighting its purpose and appeal. Actively engaged with the audience to create conversation and interest. The launch resulted in strong visibility, increased interaction, and a well-received introduction that aligned seamlessly with the brand’s voice and identity.</p></FadeUp>
            </div>
            <div className="social-content">
                <FadeUp><h2>SOCIAL CONTENT</h2></FadeUp>
            </div>
            <div className="social-links">
                <div className="insta-grid">
                    <InstagramEmbed url="https://www.instagram.com/reel/DUNsTP8k9Uk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                    <InstagramEmbed url="https://www.instagram.com/reel/DUYTrSME9hC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                    <InstagramEmbed url="https://www.instagram.com/reel/DUgGkCGEz0l/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                </div>
            </div>
        </>
    );
}

export default Case;
