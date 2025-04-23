import React, { useEffect, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CommunityPage() {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const res = await fetch("http://localhost:3001/community-graph"); // update URL if needed
        const connectedUsers = await res.json();

        const nodes = [];
        const links = [];
        const linkSet = new Set();

        connectedUsers.forEach((user) => {
          nodes.push({ id: user.id, group: "user" });

          user.sharedWith.forEach((targetId) => {
            const linkKey = [user.id, targetId].sort().join("-");
            if (!linkSet.has(linkKey)) {
              links.push({ source: user.id, target: targetId });
              linkSet.add(linkKey);
            }
          });
        });

        setGraphData({ nodes, links });
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    };

    fetchConnections();
  }, []);

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>🕸️ Genre Based User Community</h2>
          <p style={styles.description}>
            Here's a visual of how you are connected to other users based on shared musical taste!
          </p>

          <div style={styles.graphContainer}>
            <ForceGraph2D
              graphData={graphData}
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
