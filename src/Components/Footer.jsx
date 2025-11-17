function Footer(){
    return(
        <>
         
<div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Visit Nepal?
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Step into the land of diversity and experience what heaven looks
            like, amidst the enchanting views of the great Mount Everest. Step
            into the homeland of Gautam Buddha, watch different cultures
            crossing path and a journey that unfolds.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-center items-center p-4 bg-gray-100">
              <img
                src="https://imgs.search.brave.com/Ms2AqH55gZWi0xsC6dW_hOFBOOBNvrTIRjOWH0v2eO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vaGFuZGlj/cmFmdHNpbm5lcGFs/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wNC9ndW55/by1jaG9sby5qcGc_/Zml0PTY4MiwxMDI0/JnNzbD0x"
                alt="Gunyo Cholo"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
              
            </div>
          </div>
        </div>
      </div>

        
    <footer className="bg-gray-800 text-white py-4 px-3 mt-16">
      
  <div className="container mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
      <p className="text-xs text-gray-400 md:text-sm">Copyright 2020 © All Rights Reserved | Made By Bibash, Sashank, Rekha,Sneha</p>
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
export default Footer