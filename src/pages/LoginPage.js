import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // For now, static login
    navigate("/home", { state: { name, genre } });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🎵 Welcome to MusicRec</h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <select value={genre} onChange={(e) => setGenre(e.target.value)} style={styles.input}>
          <option value="">Select preferred genre</option>
          {[
           "acoustic", "kids", "kpop", "latin", "latino", "malay", "mandopop", "metal",
    "metal core", "minimal-techno", "mpb", "new-age", "opera", "pagode", "party",
    "piano", "pop-film", "pop", "power-pop", "progressive-house", "psych-rock",
    "punk", "r-n-b", "reggae", "rock-n-roll", "rockabilly", "romance", "sad",
    "salsa", "singer-songwriter", "ska", "sleep", "songwriter", "soul", "spanish", "study", "swedish",
    "synth-pop", "tango", "techno", "trance", "trip-hop",
    "turkish", "world-music"
          ].map((g, idx) => (
            <option key={idx} value={g}>{g}</option>
          ))}
        </select>

        <button onClick={handleLogin} style={styles.button}>Start Listening</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(120deg, #fffbe6, #ffe5b4)",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "300px",
  },
  title: {
    marginBottom: "10px",
    textAlign: "center",
    color: "#a86c36",
  },
  input: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  button: {
    background: "#a86c36",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default LoginPage;
