import {BrowserRouter, Routes, Route} from "react-router-dom"
import Me from "./pages/Me"

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Me/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
