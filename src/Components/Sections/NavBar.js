// Custom modules
import { MdAddToPhotos, MdViewStream, MdPersonPin, MdDarkMode, MdMotionPhotosOff, MdOutlineDarkMode } from "react-icons/md"

// Custom components
import InputBox from "../Elements/InputBox"
import MainButton from "../Elements/MainButton"

// Custom styling
import "./Styles/NavBarStyles.css"

const NavBar = () => {
    return (
        <>
            <div className="navbar-section">
                <div className="search">
                    <InputBox inputType="text" inputPlaceholder="Search Memories..." />
                </div>
                <div className="menu">
                    <MainButton buttonText={<MdAddToPhotos />} />
                    <MainButton buttonText={<MdViewStream />} />
                    <MainButton buttonText={<MdPersonPin />} />
                    <MainButton buttonText={<MdDarkMode />} />
                    <MainButton buttonText={<MdMotionPhotosOff />} />
                </div>
            </div>
        </>
    )
}

export default NavBar