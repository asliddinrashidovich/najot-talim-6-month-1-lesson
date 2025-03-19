import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./components/signup"
import Login from "./components/login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
