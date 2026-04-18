import React, { useEffect } from "react";

const InstagramEmbed = ({ url }) => {
    useEffect(() => {
        // Load Instagram embed script
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };
    }, [url]);

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ maxWidth: "540px", width: "100%" }}
            ></blockquote>
        </div>
    );
};

export default InstagramEmbed;