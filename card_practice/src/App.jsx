import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import BhaktapurDurbar from "./Pages/BhaktapurDubar"
import Lumbini from "./Pages/Lumbini"
import Login from "./Pages/Logi"
import BookA from "./Components/BookA"
import SignUp from "./Pages/SignUp"
import Info from "./Pages/Info"
import Temp from "./Pages/Temp"
import Muk from "./Pages/Muk"

function App() {
  return(
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BhaktapurDurbar" element={<BhaktapurDurbar />}/>
        <Route path="/Lumbini" element={<Lumbini />}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/BookA" element={<BookA />} />
        <Route path="/SignUP" element={<SignUp />} />
        <Route path ="/Info" element={<Info/>} />
        <Route path="/Temp" element={<Temp/>} />
        <Route path="/Muk" element={<Muk/>} />
        
        </Routes>

       </BrowserRouter>


   </>
  )
  
}

export default App
