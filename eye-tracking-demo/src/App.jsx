import { Routes, Route } from "react-router-dom"
import Home from "./Home.jsx"
import HowToUse from "./HowToUse.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-to-use" element={<HowToUse />} />
    </Routes>
  )
}

export default App