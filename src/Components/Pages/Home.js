// Inbuilt modules
import { useState } from "react"

// Custom components
import Login from "../Sections/Login"
import Register from "../Sections/Register"

const Home = () => {
    // Form state
    const [toggleLoginRegister, setToggleLoginRegister] = useState(true)

    console.log(toggleLoginRegister)

    return (
        <>
            <div className="background"></div>
            <div className="overlay"></div>
            <div className="home">
                <h1 className="logo">Me<span>mori</span>es</h1>
                {
                    toggleLoginRegister ? <Login formStateToggleFunc={setToggleLoginRegister} /> : <Register formStateToggleFunc={setToggleLoginRegister} />
                }
            </div>
        </>
    )
}

export default Home