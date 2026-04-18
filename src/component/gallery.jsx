import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import FadeUp from "./fadeup";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [error, setError] = useState("");

  const navigate = useNavigate();

useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
    return;
  }

  let timer;

  try {
    const decoded = jwtDecode(token);

    const expiryTime = decoded.exp * 1000;
    const currentTime = Date.now();
    const timeLeft = expiryTime - currentTime;

    if (timeLeft <= 0) {
      handleLogout();
      return;
    }

    timer = setTimeout(() => {
      alert("Session expired. Please login again.");
      handleLogout();
    }, timeLeft);

  } catch (err) {
    handleLogout();
    return;
  }

  const fetchImages = async () => {
    try {
      const res = await fetch(`https://houseofmedia.onrender.com/api/auth/images`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log("API DATA:", data);

      if (!res.ok) {
        setError(data.error || "Failed to fetch images");
        return;
      }

      setImages(data.images);
      setCurrent(0);
    } catch (err) {
      setError("Server connection failed");
    }
  };

  fetchImages();

  return () => clearTimeout(timer);

}, [navigate]);

const getPosition = (index) => {
  const diff = index - current;

  if (diff === 0) return "active";
  if (diff === -1 || diff === images.length - 1) return "left";
  if (diff === 1 || diff === -(images.length - 1)) return "right";

  return "hidden";
};

return (
  <>

    {error && <p>{error}</p>}
    {!error && images.length === 0 && <p>No images found</p>}

    {images.length > 0 && (
      <div className="carousel-container">
        <FadeUp>
        <h1 id="welcome-head">Peek into your project</h1>
        </FadeUp>
        <button
          className="navigate left-btn"
          onClick={() =>
            setCurrent(
              current === 0 ? images.length - 1 : current - 1
            )
          }
        >
          ❮
        </button>

        <div className="carousel">
          {images.map((img, index) => (
            <div key={index} className={`card ${getPosition(index)}`}>
              <img src={img}
                alt={`Gallery ${index}`}
                onError={() => console.log("Image failed:", img)} />
            </div>
          ))}
        </div>

        <button
          className="navigate right-btn"
          onClick={() =>
            setCurrent((current + 1) % images.length)
          }
        >
          ❯
        </button>

      </div>
    )}
  </>
);
};

export default Gallery;
