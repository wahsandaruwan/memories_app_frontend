import { useState } from "react"
import Login from "./Components/Sections/Login"
import Register from "./Components/Sections/Register"

const App = () => {
  const [toggleLoginRegister, setToggleLoginRegister] = useState(true)
  console.log(toggleLoginRegister)
  return (
    <>
      <div className="background"></div>
      <div className="overlay"></div>
      {
        toggleLoginRegister ? <Login formStateToggleFunc={setToggleLoginRegister} /> : <Register />
      }
    </>
  )
}

export default App;
