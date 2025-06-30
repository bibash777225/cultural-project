import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Home(){
    return(
        <>
{/* this is navbar */}

  <Navbar/>


{/* This is card section */}
<section className="bg-zinc-50 overflow-hidden">
  <div className="max-w-screen-lg 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
    <div className="flex flex-col sm:flex-row mx-auto">
      {/*- Starts component */} 
      {/* Bhaktapur  */}
     <Link to="/BhaktapurDurbar">
      <img src="https://i.pinimg.com/736x/44/a2/80/44a28061008c72849c8dae6b42815a1b.jpg" className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" /> </Link>
      
      {/* Lumbini */}
    
      <Link to ="/Lumbini"><img src="https://i.pinimg.com/736x/c4/bb/37/c4bb372ba9590f757479ac40b0df4592.jpg" className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" /> </Link>
       {/* this is mustang */}
      <a href="#_"> <img src="https://i.pinimg.com/736x/a3/7f/e5/a37fe56420d2aa5343c30e038dfa436b.jpg" className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" /> </a><a href="#_"> <img src="https://i.pinimg.com/736x/6a/8a/12/6a8a12101ac39eedb98e99f0bcd2ca4e.jpg" className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" /> </a>

              </div>
        </div>   
</section>

{/* Section */}

<main className="pt-16 bg-gray-100">


    <div className="flex flex-col md:flex-row items-center justify-between">
      {/* Left Side: Why visit Nepal */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Visit Nepal?</h1>
        <p className="text-xl text-gray-600 mb-6">Step into the land of diversity and experience what heaven looks like, amidst the enchanting views of the great Mount Everest. Step into the homeland of Gautam Buddha, watch different cultures crossing path and a journey that unfolds.</p>
       
      </div>
      {/* Right Side: Images*/}
      <div className="w-full md:w-1/2">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div class="flex justify-center items-center p-4 bg-gray-100">
  <img 
    src="https://imgs.search.brave.com/Ms2AqH55gZWi0xsC6dW_hOFBOOBNvrTIRjOWH0v2eO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vaGFuZGlj/cmFmdHNpbm5lcGFs/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wNC9ndW55/by1jaG9sby5qcGc_/Zml0PTY4MiwxMDI0/JnNzbD0x" 
    alt="Gunyo Cholo" 
    class="w-full max-w-md rounded-xl shadow-lg"
  />
</div>
        </div>
      </div>
      
    </div>

</main>





{/* Footer */}
<footer className="bg-gray-800 text-white py-4 px-3 mt-16">
  <div className="container mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
      <p className="text-xs text-gray-400 md:text-sm">Copyright 2020 © All Rights Reserved | Made By Bibash, Sashank, Prajjwol</p>
    </div>
    <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
      <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
        <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
        <li className="mx-4"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
      </ul>
    </div>
  </div>
</footer>









        </>






    )
}
export default Home;