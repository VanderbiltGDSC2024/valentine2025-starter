import "./App.css";

function App() {
    // TODO: Set some starting states
    const [isHovered, setIsHovered] = useState(false); // Track hover state
    
    //TODO: Some functions we will write

    //Optional alert you can choose to include
    /*
        alert(
          "You either couldn't catch the button, or you just wanted to say yes! Hopefully, it's the latter hehe"
      );
      */
 

    function mouseOver() {
        if (!isHovered) {
            setIsHovered(true); // Set to true after the first hover
        }
    }

    //TODO: Return the JSX

    // className={`${isHovered ? "absolute" : ""}`
}

export default App;
