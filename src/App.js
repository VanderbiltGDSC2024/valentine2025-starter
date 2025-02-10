import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Button size for calculation (adjust as needed)
  const buttonWidth = 150;
  const buttonHeight = 80;

  // Initial position for the "No" button to be next to the "Yes" button
  const [noButtonPosition, setNoButtonPosition] = useState({
    left: 400,  // Set the initial left position to be next to the Yes button
    top: 0,     // Same vertical position as the Yes button
  });

  useEffect(() => {
    // Center the buttons around the center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    setNoButtonPosition({
      left: centerX + buttonWidth / 2 + 20, // Adjust the gap between buttons as needed
      top: centerY - buttonHeight / 2,
    });
  }, []);

  // Function to move the "No" button to a random position, within the visible area
  const moveNoButton = () => {
    // Get the width and height of the screen
    const maxX = window.innerWidth - buttonWidth - 20; // Subtract button width to ensure it stays inside screen
    const maxY = window.innerHeight - buttonHeight - 20; // Subtract button height to ensure it stays inside screen

    // Generate random position within the screen bounds
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    setNoButtonPosition({ left: randomX, top: randomY });
  };

  // Handle "Yes" button click
  const handleYesClick = () => {
    alert("Yay! I knew you'd say yes! 💖");
  };

  return (
    <div className="App">
      <div className="content">
        <h1>Will you go on a date with me?</h1>
        <img src="https://via.placeholder.com/400x200" alt="A romantic Valentine's Day scene" className="image" />
        
        <div className="button-container">
          {/* Yes Button */}
          <button id="yes-button" onClick={handleYesClick}>
            Yes
          </button>
          
          {/* No Button */}
          <button
            id="no-button"
            style={{ left: `${noButtonPosition.left}px`, top: `${noButtonPosition.top}px` }}
            onClick={moveNoButton}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;