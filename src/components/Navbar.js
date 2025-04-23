import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>🎵 MusicRec</span>
      <div>
        <Link to="/home" style={styles.link}>Home</Link>
        <Link to="/recommendations" style={styles.link}>Recommendations</Link>
        <Link to="/community" style={styles.link}>Community</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    background: "#a86c36",
    color: "#fff",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  link: {
    color: "#fff",
    margin: "0 10px",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Navbar;
