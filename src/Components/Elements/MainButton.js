// Custom modules
import { PropTypes } from "prop-types"

const MainButton = ({ buttonText, clickFunc }) => {
    return (
        <>
            <div className="button-custom" style={basicStyles} onClick={clickFunc}>{buttonText}</div>
        </>
    )
}

// Basic styling
const basicStyles = {
    display: "inline",
    backgroundColor: "#2d3436",
    color: "#ffffff",
    padding: "10px 20px",
    margin: "5px",
    fontSize: "1rem",
    textAlign: "center",
    outline: "none",
    border: "1px solid #2d3436",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out"
}

// Type checking
MainButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    clickFunc: PropTypes.func.isRequired
}

// Default values
MainButton.defaultProps = {
    buttonText: "Click Me",
    clickFunc: () => console.log("Button Clicked!")
}

export default MainButton