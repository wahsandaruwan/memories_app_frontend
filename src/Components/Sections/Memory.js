// Inbuilt components & modules
import { useState } from "react"

// Third-party components & modules
import { RiHeartFill, RiHeartLine, RiDislikeFill, RiDislikeLine, RiEditLine, RiDeleteBin2Line, RiAttachmentLine } from "react-icons/ri"
import { MdSportsHandball } from "react-icons/md"

// Custom components & modules
import MainButton from "../Elements/MainButton"
import ToolTip from "../Elements/ToolTip"

// Custom styling
import "./Styles/MemoryStyles.css"

const Memory = () => {
    // Details state
    const [toggleDetails, setToggleDetails] = useState(false)

    return (
        <>
            <div className="memory-section" >
                <div className="icon">
                    <MdSportsHandball />
                </div>
                <h1 className="heading">
                    This is My Memory
                </h1>
                <p className="category">
                    Sport
                </p>
                <p className="details" onClick={() => setToggleDetails(true)}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
                <p className="date-time">
                    2022-05-25 | 10.05 A.M.
                </p>
                <div className="like-dislike">
                    <ToolTip toolTipText="Like"><MainButton buttonText={<RiHeartLine />} /></ToolTip>
                    <ToolTip toolTipText="Dislike"><MainButton buttonText={<RiDislikeLine />} /></ToolTip>
                </div>
                <div className={`overlay ${toggleDetails ? "slide-left" : ""}`}>
                    <p className="paragraph" onClick={() => setToggleDetails(false)}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque, perspiciatis velit quaerat sed incidunt numquam. Labore incidunt iusto perspiciatis earum. Fuga excepturi facilis delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque, perspiciatis velit quaerat sed incidunt numquam. Labore incidunt iusto perspiciatis earum. Fuga excepturi facilis delectus.
                    </p>
                    <ToolTip toolTipText="Attachment"><MainButton buttonText={<RiAttachmentLine />} /></ToolTip>
                </div>
                <div className="user-name">
                    @whaSand
                </div>
                <div className="memory-buttons">
                    <ToolTip toolTipText="Edit"><MainButton buttonText={<RiEditLine />} /></ToolTip>
                    <ToolTip toolTipText="Delete"><MainButton buttonText={<RiDeleteBin2Line />} /></ToolTip>
                </div>
            </div>
        </>
    )
}

export default Memory