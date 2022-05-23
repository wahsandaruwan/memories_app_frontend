// Custom modules
import { PropTypes } from "prop-types"

// Custom components
import InputBox from "../Elements/InputBox"
import InputCheck from "../Elements/InputCheck"
import MainButton from "../Elements/MainButton"

const Register = ({ formStateToggleFunc }) => {
    return (
        <>
            <div className="login-register-section">
                <div className="login-register-form">
                    <h1 className="section-heading">Register</h1>
                    <InputBox inputType="text" inputPlaceholder="Enter Your Full Name..." />
                    <InputBox inputType="text" inputPlaceholder="Enter Your Email..." />
                    <InputBox inputType="text" inputPlaceholder="Enter Your Username..." />
                    <InputBox inputType="password" inputPlaceholder="Enter Your Password..." />
                    <InputBox inputType="password" inputPlaceholder="Re-Enter Your Password..." />
                    <div className="input-check">
                        <InputCheck checkBoxId="agree-box" checkBoxValue="agree" />
                        <label htmlFor="agree-box">Agree <span>Terms & Conditions</span></label>
                    </div>
                    <MainButton buttonText="Login" />
                    <a className="to-reg" href="#" onClick={() => formStateToggleFunc(true)}>Have an Account</a>
                </div>
            </div>
        </>
    )
}

// Type checking
Register.propTypes = {
    formStateToggleFunc: PropTypes.func.isRequired
}

// Default values
Register.defaultProps = {
    formStateToggleFunc: () => console.log("Toggle Form")
}

export default Register