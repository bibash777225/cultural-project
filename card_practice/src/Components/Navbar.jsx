import { Link } from "react-router-dom";

function Navbar(){
    return(
       
<>
 {/* This is navbar */}
 <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
  <div className="px-4">
    <div className="flex items-center justify-between">
      <div className="flex shrink-0">
        <a aria-current="page" className="flex items-center" href="/">
          <img className="h-7 w-auto" src="https://i.pinimg.com/736x/ff/42/6e/ff426e5ed9eb29bd460a1ab1156004d4.jpg" alt />
          <p className="sr-only">Website Title</p>
        </a>
      </div>
      <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
        <a aria-current="page" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">How it works</a>
        <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Pricing</a>
      </div>
      <div className="flex items-center justify-end gap-3">


        {/*  */}
        <Link to ="/SignUP" className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex" >Sign in</Link>
       

       <Link to='/Login' className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500  focus-visible:outline-offset-2 focus-visible:outline-blue-600" > Login</Link>
    <Link to="/BookA" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500  focus-visible:outline-offset-2 focus-visible:outline-blue-600" > BookGuide</Link>
      </div>
    </div>
  </div>
</header>
</>

    )
}
export default Navbar;