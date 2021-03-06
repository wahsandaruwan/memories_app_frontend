// Third-party components & modules
import { PropTypes } from "prop-types"
import { useSpring, animated } from "react-spring"

// Custom components & modules
import InputBox from "../Elements/InputBox"
import InputCheck from "../Elements/InputCheck"
import MainButton from "../Elements/MainButton"

// Custom styling
import "./Styles/LoginRegisterStyles.css"

const Login = ({ formRef, formStateToggleFunc }) => {
    // Form spring transition
    const springTransition = useSpring({
        from: {
            y: 500,
            opacity: 0
        },
        to: {
            y: 0,
            opacity: 1
        },
        config: {
            duration: 500
        }
    })

    return (
        <>
            {
                <animated.div style={springTransition} className="login-register-section" ref={formRef}>
                    <div className="login-register-form">
                        <h1 className="heading">Login</h1>
                        <InputBox inputType="text" inputPlaceholder="Enter Your Username..." />
                        <InputBox inputType="password" inputPlaceholder="Enter Your Password..." />
                        <div className="input-check">
                            <InputCheck checkBoxId="agree-box" checkBoxValue="agree" />
                            <label htmlFor="agree-box">Remember Me</label>
                        </div>
                        <MainButton buttonText="Login" />
                        <a href="#" className="to-reg" onClick={(e) => {
                            e.preventDefault()
                            formStateToggleFunc(false)
                        }}>Create a New Account</a>
                    </div>
                </animated.div>
            }
        </>
    )
}

// Type checking
Login.propTypes = {
    formStateToggleFunc: PropTypes.func.isRequired
}

// Default values
Login.defaultProps = {
    formStateToggleFunc: () => console.log("Toggle Form")
}

export default Login