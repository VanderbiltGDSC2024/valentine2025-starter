import React, { useState } from "react";
import "./App.css";

function App() {
    // Set some starting states

    const [imageSrc, setImageSrc] = useState("/start.gif");
    const [isHovered, setIsHovered] = useState(false); // Track hover state
    const [yesHeader, setYesHeader] = useState("Will YOU be my Valentine?");
    //Some functions

    const popUp = () => {
        alert(
            "AH look at you, you caught the button. I guess you wanted to say no that badly..."
        );
    };

    const clickedYes = () => {
       
        setYesHeader("Yayyyyyyy! <3");
        setImageSrc("/end.gif");
      //   alert(
      //     "You either couldn't catch the button, or you just wanted to say yes! Hopefully, it's the latter hehe"
      // );
    };

    function mouseOver() {
        if (!isHovered) {
            setIsHovered(true); // Set to true after the first hover
        }

        const randomNum = Math.floor(Math.random() * 4) + 1;
        const randomImage = `/val${randomNum}.gif`;
        setImageSrc(randomImage); 

        const newX = Math.random() * 90; // Randomize X position
        const newY = Math.random() * 85; // Randomize Y position

        document.getElementById("no-button").style.left = `${newX}%`;
        document.getElementById("no-button").style.top = `${newY}%`;
    }


    return (
        <div className="container">
            <img src={imageSrc} alt="valentine" className="image" />
            <p className="valentine" id="yes">
                {yesHeader}
            </p>
            <div className="button-container">
                <button
                    type="submit"
                    onClick={clickedYes}
                >
                    YES!
                </button>
                <button
                    onMouseOver={mouseOver}
                    id="no-button"
                    onClick={popUp}
                    className={`${isHovered ? "absolute" : ""}`}
                >
                    no
                </button>
            </div>
        </div>
    );
}

export default App;
