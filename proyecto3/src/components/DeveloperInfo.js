import React, { useState } from 'react';
import '../style-sheets/DeveloperInfo.css'

const DeveloperInfo = () => {
  const [githubWindow, setGithubWindow] = useState(null);

  const openGithubLink = () => {
    if (githubWindow && !githubWindow.closed) {
      githubWindow.focus();
    } else {
      const newWindow = window.open('https://github.com/tiznadoc', '_blank');
      setGithubWindow(newWindow);
    }
  };

  return (
    <div className="developer-info-container">
      <p>
        developed by{' '}
        <button
            onClick={(e) => {
            e.preventDefault();
            openGithubLink();
            }}
            className="developer-link"
        >
          tiznadoc
        </button>
      </p>
    </div>
  );
};

export default DeveloperInfo;
