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
    backgroundColor: "#d9d9da",
    color: "#2d3436",
    padding: "10px 20px",
    margin: "5px",
    fontSize: "0.9rem",
    textAlign: "center",
    outline: "none",
    border: "none",
    borderRadius: "5px",
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