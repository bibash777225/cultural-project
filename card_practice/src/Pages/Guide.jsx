import Navbar from "../Components/Navbar";

function Guide(){
 return(
    <>
    <Navbar></Navbar>
  <div className="min-h-screen bg-gray-100 pt-20 pl-20 flex items-start">
  <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-blue-400">
    <div className="relative">
      <img
        className="w-full h-40 object-cover"
        src="https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHx1c2VyfGVufDB8MHx8fDE2OTQwOTU5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Profile Image"
      />
    </div>

    <div className="px-4 py-3">
      <div className="text-lg font-semibold text-gray-800">PRAJJWOL</div>
      <p className="text-gray-600 text-sm">TOURISM MANAGER</p>
    </div>

    <div className="px-4 py-3 space-x-1">
      <span className="inline-block px-2 py-1 text-xs font-semibold text-teal-900 bg-teal-200 rounded-full">1DAY</span>
      <span className="inline-block px-2 py-1 text-xs font-semibold text-indigo-900 bg-indigo-200 rounded-full">1 WEEK</span>
      <span className="inline-block px-2 py-1 text-xs font-semibold text-purple-900 bg-purple-200 rounded-full">2DAY</span>
    </div>

    <div className="px-4 py-3">
      <a href="#" className="text-blue-500 text-sm hover:underline">BOOK ME</a>
    </div>
  </div>
</div>
 <div className="min-h-screen bg-gray-100 pt-20 pl-20 flex items-start">
  <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-blue-400">
    <div className="relative">
      <img
        className="w-full h-40 object-cover"
        src="https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHx1c2VyfGVufDB8MHx8fDE2OTQwOTU5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Profile Image"
      />
    </div>

    <div className="px-4 py-3">
      <div className="text-lg font-semibold text-gray-800">John Doe</div>
      <p className="text-gray-600 text-sm">MUSTANG TOUR GUIDE</p>
    </div>

    <div className="px-4 py-3 space-x-1">
      <span className="inline-block px-2 py-1 text-xs font-semibold text-teal-900 bg-teal-200 rounded-full">Web</span>
      <span className="inline-block px-2 py-1 text-xs font-semibold text-indigo-900 bg-indigo-200 rounded-full">UI/UX</span>
      <span className="inline-block px-2 py-1 text-xs font-semibold text-purple-900 bg-purple-200 rounded-full">Design</span>
    </div>

    <div className="px-4 py-3">
      <a href="#" className="text-blue-500 text-sm hover:underline">View Profile</a>
    </div>
  </div>
</div>







    </>
 )
}
export default Guide;