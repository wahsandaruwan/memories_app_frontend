// Inbuilt modules
import { useState } from "react"

// Custom components
import Login from "./Components/Sections/Login"
import Register from "./Components/Sections/Register"

const App = () => {
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

export default App;
