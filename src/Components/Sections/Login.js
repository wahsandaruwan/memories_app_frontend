// Custom components
import InputBox from "../Elements/InputBox"
import InputCheck from "../Elements/InputCheck"
import MainButton from "../Elements/MainButton"

const Login = () => {
    return (
        <>
            <div className="login-section">
                <div className="login-form">
                    <h1 className="section-heading">Login</h1>
                    <InputBox inputType="text" inputPlaceholder="Enter Your Username..." />
                    <InputBox inputType="password" inputPlaceholder="Enter Your Password..." />
                    <div className="input-check">
                        <InputCheck checkBoxId="agree-box" checkBoxValue="agree" />
                        <label htmlFor="agree-box">Remember Me</label>
                    </div>
                    <MainButton buttonText="Login" />
                    <a className="to-reg" href="#">Create a New Account</a>
                </div>
            </div>
        </>
    )
}

export default Login