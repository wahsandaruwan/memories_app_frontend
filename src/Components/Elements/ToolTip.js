const ToolTip = () => {
    return (
        <>
            <div style={{ ...basicStyles.toolTipDiv }} className="tooltip-custom">
                <span style={{ ...basicStyles.toolTipContent }}>This is tool tip</span>
            </div>
        </>
    )
}

// Basic styling
const basicStyles = {
    toolTipDiv: {
        position: "relative"
    },
    toolTipContent: {
        position: "absolute",
        display: "none",
        top: 0,
        left: 0
    }
}

export default ToolTip