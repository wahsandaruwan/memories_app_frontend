// Inbuilt modules
import { useState } from "react"

// Custom modules
import { useSpring, animated } from "react-spring"

// Custom components
import Login from "../Sections/Login"
import Register from "../Sections/Register"

const Home = () => {
    // Form state
    const [toggleLoginRegister, setToggleLoginRegister] = useState(true)

    // Form spring transition
    const springTransition = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            duration: 500
        }
    })

    return (
        <>
            <div className="background"></div>
            <div className="overlay"></div>
            <div className="home">
                <animated.h1 style={springTransition} className="logo">Me<span>mori</span>es</animated.h1>
                {
                    toggleLoginRegister ? <Login formStateToggleFunc={setToggleLoginRegister} /> : <Register formStateToggleFunc={setToggleLoginRegister} />
                }
            </div>
        </>
    )
}

export default Home