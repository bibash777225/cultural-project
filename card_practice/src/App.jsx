import { BrowserRouter,Routes,Route } from "react-router-dom"
import Card from "./Components/Card"
import BhaktapurDurbar from "./Pages/BhaktapurDubar"

function App() {
  return(
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/BhaktapurDurbar" element={<BhaktapurDurbar />}/>
        </Routes>

       </BrowserRouter>


   </>
  )
  
}

export default App
