// Custom modules
import { PropTypes } from "prop-types"

const InputBox = ({ inputType, inputValue, inputPlaceholder }) => {
    return (
        <>
            <input style={style} type={inputType} value={inputValue} placeholder={inputPlaceholder} />
        </>
    )
}

// Basic styling
const style = {
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: "450px",
    padding: "10px",
    fontSize: "0.9rem",
    outline: "none",
    border: "1px solid #000000"
}

// Type checking
InputBox.propTypes = {
    inputType: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string.isRequired
}

// Default values
InputBox.defaultProps = {
    inputType: "text",
    inputPlaceholder: "Enter..."
}

export default InputBox