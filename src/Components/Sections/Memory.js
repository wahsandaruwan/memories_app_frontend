import { useState } from "react"
import { RiHeartFill, RiHeartLine, RiDislikeFill, RiDislikeLine } from "react-icons/ri"
import { MdSportsHandball } from "react-icons/md"
import "./Styles/MemoryStyles.css"

const Memory = () => {
    const [toggleDetails, setToggleDetails] = useState(false)

    return (
        <>
            <div className="memory-section">
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
                <div className="like-dislike">
                    <RiHeartLine />
                    <RiDislikeLine />
                </div>
                <p className={`overlay ${toggleDetails ? "slide-left" : ""}`} onClick={() => setToggleDetails(false)}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque, perspiciatis velit quaerat sed incidunt numquam. Labore incidunt iusto perspiciatis earum. Fuga excepturi facilis delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque, perspiciatis velit quaerat sed incidunt numquam. Labore incidunt iusto perspiciatis earum. Fuga excepturi facilis delectus.
                </p>
            </div>
        </>
    )
}

export default Memory