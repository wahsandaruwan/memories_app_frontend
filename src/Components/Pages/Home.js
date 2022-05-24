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
            {
                toggleLoginRegister ? <Login formStateToggleFunc={setToggleLoginRegister} /> : <Register formStateToggleFunc={setToggleLoginRegister} />
            }
        </>
    )
}

export default Home