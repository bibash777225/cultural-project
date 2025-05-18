import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home(){
    return(
        <>
{/* this is navbar */}

  <Navbar/>


{/* This is card section */}
<section className="bg-zinc-50 overflow-hidden">
  <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
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


        </>
    )
}
export default Home;