import React, { useState } from "react";
import "./App.css";

function App() {
    // Set some starting states

    //setting initial x and y to (52, 55), when set is called, change the values
    // const [x, setx] = useState(50);
    // const [y, sety] = useState(52);

    const [imageSrc, setImageSrc] = useState("/start.gif");
    const [isHovered, setIsHovered] = useState(false); // Track hover state

    //Some functions

    const popUp = () => {
        alert(
            "AH look at you, you caught the button. I guess you wanted to say no that badly..."
        );
    };

    const clickedYes = () => {
        alert(
            "You either couldn't catch the button, or you just wanted to say yes! Hopefully, it's the latter hehe"
        );
        setImageSrc("/end.gif");
    };

    //TODO: fix the random image picker
    function mouseOver() {
        if (!isHovered) {
            setIsHovered(true); // Set to true after the first hover
        }

        const randomImage = Math.random() < 0.5 ? "/val2.gif" : "/val3.gif"; // Randomly pick an image
        setImageSrc(randomImage); // Update the image source
        //TODO make sure setx and sety don't go out of bounds of the window screen
        // setx(Math.random() * 100);
        // sety(Math.random() * 100);
        const newX = Math.random() * 85; // Randomize X position
        const newY = Math.random() * 85; // Randomize Y position

        document.getElementById("no-button").style.left = `${newX}%`;
        document.getElementById("no-button").style.top = `${newY}%`;
    }

    // var noStyle = {
    //   left: x + "%",
    //   top: y + "%",
    //   position: "absolute",
    // };

    // var yesStyle = {
    //   left: "42%",
    //   top: "55%",
    // }

    return (
        <div className="container">
            <img src={imageSrc} alt="valentine" className="image" />
            <p className="valentine" id="yes">
                Will <b>YOU</b> be my <b>Valentine?</b>
            </p>
            <div className="button-container">
                <button
                    // style={yesStyle}
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
