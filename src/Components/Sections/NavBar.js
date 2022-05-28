// Inbuilt components & modules
import { useContext } from "react"

// Third-party components & modules
import { MdAddToPhotos, MdViewStream, MdPersonPin, MdDarkMode, MdMotionPhotosOff, MdWbSunny } from "react-icons/md"

// Custom components & modules
import InputBox from "../Elements/InputBox"
import MainButton from "../Elements/MainButton"

// Custom contexts
import { ThemeContext } from "../../Contexts/ThemeContext"

// Custom styling
import "./Styles/NavBarStyles.css"

const NavBar = () => {
    // Get context values
    const { theme, toggleTheme } = useContext(ThemeContext)

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
                    <MainButton buttonText={theme === "light" ? <MdDarkMode /> : <MdWbSunny />} clickFunc={toggleTheme} />
                    <MainButton buttonText={<MdMotionPhotosOff />} />
                </div>
            </div>
        </>
    )
}

export default NavBar