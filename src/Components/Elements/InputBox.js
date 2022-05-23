// Custom modules
import { PropTypes } from "prop-types"

const InputBox = ({ inputType, inputValue, inputPlaceholder }) => {
    return (
        <>
            <input className="input-custom" style={basicStyles} type={inputType} value={inputValue} placeholder={inputPlaceholder} />
        </>
    )
}

// Basic styling
const basicStyles = {
    backgroundColor: "#ffffff",
    minWidth: "200px",
    padding: "12px",
    fontSize: "0.95rem",
    outline: "none",
    border: "1px solid #636e72",
    borderRadius: "10px"
}

// Type checking
InputBox.propTypes = {
    inputType: PropTypes.string.isRequired,
    inputValue: PropTypes.string,
    inputPlaceholder: PropTypes.string.isRequired
}

// Default values
InputBox.defaultProps = {
    inputType: "text",
    inputPlaceholder: "Enter..."
}

export default InputBox