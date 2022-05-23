// Custom modules
import { PropTypes } from "prop-types"

const MainButton = ({ buttonTxt, clickFunc }) => {
    return (
        <>
            <div className="button-custom" style={basicStyles} onClick={clickFunc}>{buttonTxt}</div>
        </>
    )
}

// Basic styling
const basicStyles = {
    display: "inline",
    backgroundColor: "#2d3436",
    color: "#ffffff",
    padding: "12px 20px",
    fontSize: "0.9rem",
    outline: "none",
    border: "1px solid #2d3436",
    borderRadius: "10px",
    cursor: "pointer"
}

// Type checking
MainButton.propTypes = {
    buttonTxt: PropTypes.string.isRequired,
    clickFunc: PropTypes.func.isRequired
}

// Default values
MainButton.defaultProps = {
    buttonTxt: "Click Me",
    clickFunc: () => { console.log("Button Clicked!") }
}

export default MainButton