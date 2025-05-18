import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Components/Home"
import BhaktapurDurbar from "./Pages/BhaktapurDubar"
import Lumbini from "./Pages/Lumbini"

function App() {
  return(
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BhaktapurDurbar" element={<BhaktapurDurbar />}/>
        <Route path="/Lumbini" element={<Lumbini />}/>
        
        </Routes>

       </BrowserRouter>


   </>
  )
  
}

export default App
