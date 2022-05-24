// Custom modules
import { PropTypes } from "prop-types"
import { useSpring, animated } from "react-spring"

// Custom components
import InputBox from "../Elements/InputBox"
import InputCheck from "../Elements/InputCheck"
import MainButton from "../Elements/MainButton"

const Login = ({ formStateToggleFunc }) => {
    // Form spring transition
    const springTransition = useSpring({
        from: {
            y: -500,
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
                <animated.div style={springTransition} className="login-register-section">
                    <div className="login-register-form">
                        <h1 className="section-heading">Login</h1>
                        <InputBox inputType="text" inputPlaceholder="Enter Your Username..." />
                        <InputBox inputType="password" inputPlaceholder="Enter Your Password..." />
                        <div className="input-check">
                            <InputCheck checkBoxId="agree-box" checkBoxValue="agree" />
                            <label htmlFor="agree-box">Remember Me</label>
                        </div>
                        <MainButton buttonText="Login" />
                        <a className="to-reg" href="#" onClick={() => formStateToggleFunc(false)}>Create a New Account</a>
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