// Custom modules
import { MdAddToPhotos, MdViewStream, MdPersonPin, MdMotionPhotosOff } from "react-icons/md"

import InputBox from "../Elements/InputBox"
import MainButton from "../Elements/MainButton"

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
                    <MainButton buttonText={<MdMotionPhotosOff />} />
                </div>
            </div>
        </>
    )
}

export default NavBar