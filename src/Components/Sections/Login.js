// Custom components
import InputBox from "../Elements/InputBox"
import MainButton from "../Elements/MainButton"

const Login = () => {
    return (
        <>
            <div className="login-section">
                <div className="login-form">
                    <h1 className="section-heading">Login</h1>
                    <InputBox inputType="text" inputPlaceholder="Enter Your Username..." />
                    <InputBox inputType="password" inputPlaceholder="Enter Your Password..." />
                    <MainButton buttonText="Login" />
                    <a className="to-reg" href="#">Create a New Account</a>
                </div>
            </div>
        </>
    )
}

export default Login