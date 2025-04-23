import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, genre } = location.state || {};

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.heading}>🎧 Welcome, {name || "Guest"}!</h2>
          <p style={styles.subtext}>
            Your preferred genre: <strong>{genre || "Not selected"}</strong>
          </p>

          <button
            style={styles.button}
            onClick={() => navigate("/recommendations")}
          >
            🎵 Get Your Recommendations
          </button>
          <button
            style={styles.button}
            onClick={() => navigate("/community")}
          >
            🕸️ Explore Community
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  container: {
    minHeight: "80vh", // changed from 100vh to allow space for navbar + footer
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(120deg, #fffbe6, #ffe5b4)",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "25px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "350px",
  },
  heading: {
    color: "#a86c36",
    marginBottom: "10px",
  },
  subtext: {
    marginBottom: "30px",
    fontSize: "16px",
  },
  button: {
    background: "#a86c36",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
    margin: "10px",
    fontSize: "15px",
    transition: "0.3s",
  },
};

export default HomePage;
