// Inbuilt components & modules
import { useState } from "react"

// Custom components & modules
import Footer from "../Sections/Footer"
import Memory from "../Sections/Memory"
import NavBar from "../Sections/NavBar"

// Custom contexts
import { ThemeContext } from "../../Contexts/ThemeContext"

const Feed = () => {
    // Theme state
    const [theme, setTheme] = useState("dark")

    // Toggle theme 
    const toggleTheme = () => {
        // Default theme is dark
        setTheme((curr) => curr === "dark" ? "light" : "dark")
    }

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div className="feed" id={theme}>
                    <NavBar />
                    <div className="memories-wall">
                        <Memory />
                        <Memory />
                        <Memory />
                        <Memory />
                        <Memory />
                        <Memory />
                        <Memory />
                        <Memory />
                        <Memory />
                        <Memory />
                        <Memory />
                        <Memory />
                    </div>
                    <Footer />
                </div>
            </ThemeContext.Provider>
        </>
    )
}

export default Feed