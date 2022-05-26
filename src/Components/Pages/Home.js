// Inbuilt modules
import { useState } from "react"

// Custom modules
import Logo from "../Elements/Logo"

// Custom components
import Login from "../Sections/Login"
import Register from "../Sections/Register"

const Home = () => {
    // Form state
    const [toggleLoginRegister, setToggleLoginRegister] = useState(true)

    return (
        <>
            <div className="background"></div>
            <div className="overlay"></div>
            <div className="home">
                <Logo />
                {
                    toggleLoginRegister ? <Login formStateToggleFunc={setToggleLoginRegister} /> : <Register formStateToggleFunc={setToggleLoginRegister} />
                }
            </div>
        </>
    )
}

export default Home