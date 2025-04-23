import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RecommendationPage() {
  const location = useLocation();
  const userId = location.state?.userId;

  const [loading, setLoading] = useState(true);
  const [community, setCommunity] = useState("");
  const [recommendedSongs, setRecommendedSongs] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch(`http://localhost:5000/recommendations/${userId}`);
        const data = await response.json();

        setCommunity(data.preferred_genre); // Just for placeholder
        setRecommendedSongs(data.recommendations || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [userId]);

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        {loading ? (
          <Loader />
        ) : (
          <div style={styles.card}>
            <h2 style={styles.title}>🎶 Personalized Recommendations</h2>
            <p style={styles.info}>
              Based on your community/genre: <strong>{community}</strong>
            </p>

            {recommendedSongs.map((song, i) => (
              <div key={i} style={styles.songBox}>
                <h3>{song["track name"]}</h3>
                <p>by <strong>{song.artist}</strong></p>
                <span style={styles.genre}>{song["track genre"]}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

const styles = {
  container: {
    minHeight: "80vh",
    padding: "50px 20px",
    background: "linear-gradient(120deg, #fffbe6, #ffe5b4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    color: "#a86c36",
    marginBottom: "10px",
    textAlign: "center",
  },
  info: {
    textAlign: "center",
    marginBottom: "20px",
  },
  songBox: {
    background: "#fef7e5",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "15px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  genre: {
    display: "inline-block",
    marginTop: "5px",
    fontSize: "12px",
    color: "#555",
    backgroundColor: "#f0d9b5",
    padding: "4px 8px",
    borderRadius: "10px",
  },
};

export default RecommendationPage;
