// Third-party components & modules
import { PropTypes } from "prop-types"

const InputCheck = ({ checkBoxId, checkBoxValue, changeFunc }) => {
    return (
        <>
            <input id={checkBoxId} className="checkbox-custom" style={basicStyles} type="checkbox" value={checkBoxValue} onChange={changeFunc} />
        </>
    )
}

// Basic styling
const basicStyles = {
    position: "relative",
    width: "18px",
    height: "18px",
    padding: "0",
    margin: "5px"
}

// Type checking
InputCheck.propTypes = {
    checkBoxId: PropTypes.string,
    checkBoxValue: PropTypes.string,
    changeFunc: PropTypes.func.isRequired
}

// Default values
InputCheck.defaultProps = {
    checkBoxValue: "value",
    changeFunc: () => console.log("Checking")
}

export default InputCheck