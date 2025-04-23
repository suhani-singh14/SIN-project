import React from "react";

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <div style={styles.loader}></div>
      <p>Finding your vibe 🎵...</p>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px",
    color: "#a86c36",
    fontWeight: "bold",
  },
  loader: {
    border: "6px solid #f3f3f3",
    borderTop: "6px solid #a86c36",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
    marginBottom: "15px",
  },
};

// Add this in index.css or App.css
/*
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
*/

export default Loader;
