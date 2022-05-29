// Inbuilt components & modules
import { useContext } from "react"

// Third-party components & modules
import { MdHome, MdAddToPhotos, MdViewStream, MdPersonPin, MdDarkMode, MdMotionPhotosOff, MdWbSunny } from "react-icons/md"

// Custom components & modules
import InputBox from "../Elements/InputBox"
import MainButton from "../Elements/MainButton"

// Custom contexts
import { ThemeContext } from "../../Contexts/ThemeContext"

// Custom styling
import "./Styles/NavBarStyles.css"
import ToolTip from "../Elements/ToolTip"

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
                    <ToolTip toolTipText="All memories"><MainButton buttonText={<MdHome />} /></ToolTip>
                    <ToolTip toolTipText="Add new memory"><MainButton buttonText={<MdAddToPhotos />} /></ToolTip>
                    <ToolTip toolTipText="My memories"><MainButton buttonText={<MdViewStream />} /></ToolTip>
                    <ToolTip toolTipText="My Account"><MainButton buttonText={<MdPersonPin />} /></ToolTip>
                    <ToolTip toolTipText={theme === "dark" ? "Toggle light mode" : "Toggle dark mode"}><MainButton buttonText={theme === "light" ? <MdDarkMode /> : <MdWbSunny />} clickFunc={toggleTheme} /></ToolTip>
                    <ToolTip toolTipText="Logout"><MainButton buttonText={<MdMotionPhotosOff />} /></ToolTip>
                </div>
            </div>
        </>
    )
}

export default NavBar