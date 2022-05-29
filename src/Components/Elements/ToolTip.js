// Third-party components & modules
import { PropTypes } from "prop-types"

const ToolTip = ({ toolTipText, children }) => {
    return (
        <>
            <div style={{ ...basicStyles.toolTipDiv }} className="tooltip-custom">
                <span style={{ ...basicStyles.toolTipContent }}>{toolTipText}</span>
                {children}
            </div>
        </>
    )
}

// Basic styling
const basicStyles = {
    toolTipDiv: {
        position: "relative",
        padding: "0",
        margin: "10px",
    },
    toolTipContent: {
        position: "absolute",
        backgroundColor: "#ffffff",
        color: "#2d3436",
        width: "max-content",
        display: "none",
        padding: "3px 5px",
        textAlign: "center",
        fontSize: "0.6rem",
        borderRadius: "3px",
        bottom: "-25px",
        left: 0
    }
}

// Type checking
ToolTip.propTypes = {
    tooltipText: PropTypes.string,
}

// Default values
ToolTip.defaultProps = {
    tooltipText: ""
}

export default ToolTip