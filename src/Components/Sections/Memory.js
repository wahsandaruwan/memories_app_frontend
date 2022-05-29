// Inbuilt components & modules
import { useState } from "react"

// Third-party components & modules
import { RiHeartFill, RiHeartLine, RiDislikeFill, RiDislikeLine, RiEditLine, RiDeleteBin2Line, RiAttachmentLine } from "react-icons/ri"
import { MdSportsHandball } from "react-icons/md"

// Custom styling
import "./Styles/MemoryStyles.css"
import MainButton from "../Elements/MainButton"

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
                    <MainButton buttonText={<RiHeartLine />} />
                    <MainButton buttonText={<RiDislikeLine />} />
                </div>
                <div className={`overlay ${toggleDetails ? "slide-left" : ""}`}>
                    <p className="paragraph" onClick={() => setToggleDetails(false)}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque, perspiciatis velit quaerat sed incidunt numquam. Labore incidunt iusto perspiciatis earum. Fuga excepturi facilis delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque, perspiciatis velit quaerat sed incidunt numquam. Labore incidunt iusto perspiciatis earum. Fuga excepturi facilis delectus.
                    </p>
                    <MainButton buttonText={<RiAttachmentLine />} />
                </div>
                <div className="user-name">
                    @whaSand
                </div>
                <div className="memory-buttons">
                    <MainButton buttonText={<RiEditLine />} />
                    <MainButton buttonText={<RiDeleteBin2Line />} />
                </div>
            </div>
        </>
    )
}

export default Memory