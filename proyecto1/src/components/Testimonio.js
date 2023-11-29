import React from "react";
import '../stylesheets/Testimonio.css';

function Testimonio() {
  return (
    <div className="testimonio-container">
      <img 
      className="testimonio-image"
      src={require("../images/testimonio-Emma.png")}
      alt="Emma's image"
      />
      <div className="testimonio-text-container">
        <p className="testimonio-name">Emma Bostian in Sweden</p>
        <p className="testimonio-job">Software Engineer at Spotify</p>
        <p className="testimonio-text">"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
      </div>
    </div>
  );
}

export default Testimonio;