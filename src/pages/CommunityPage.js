import React, { useRef } from "react";
import ForceGraph2D from "react-force-graph-2d";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CommunityPage() {
  const fgRef = useRef();

  const data = {
    nodes: [
      { id: "User1", group: "user" },
      { id: "User2", group: "user" },
      { id: "Song A", group: "song" },
      { id: "Song B", group: "song" },
      { id: "Song C", group: "song" },
    ],
    links: [
      { source: "User1", target: "Song A" },
      { source: "User1", target: "Song B" },
      { source: "User2", target: "Song B" },
      { source: "User2", target: "Song C" },
    ],
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>🕸️ Your Music Social Graph</h2>
          <p style={styles.description}>
            Here's a visual of how you and others are connected through music.
          </p>

          <div style={styles.graphContainer}>
            <ForceGraph2D
              ref={fgRef}
              graphData={data}
              nodeAutoColorBy="group"
              nodeLabel="id"
              linkDirectionalParticles={2}
              linkDirectionalParticleSpeed={() => 0.01}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  container: {
    minHeight: "80vh",
    padding: "40px 20px",
    background: "linear-gradient(120deg, #fffbe6, #ffe5b4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "25px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "800px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    color: "#a86c36",
    marginBottom: "10px",
  },
  description: {
    marginBottom: "20px",
    color: "#555",
    fontSize: "15px",
  },
  graphContainer: {
    height: "500px",
    borderRadius: "20px",
    overflow: "hidden",
    border: "1px solid #ddd",
  },
};

export default CommunityPage;
