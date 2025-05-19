import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import BhaktapurDurbar from "./Pages/BhaktapurDubar"
import Lumbini from "./Pages/Lumbini"
import Login from "./Pages/Logi"

function App() {
  return(
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BhaktapurDurbar" element={<BhaktapurDurbar />}/>
        <Route path="/Lumbini" element={<Lumbini />}/>
        <Route path="/Login" element={<Login />}/>

        
        </Routes>

       </BrowserRouter>


   </>
  )
  
}

export default App
