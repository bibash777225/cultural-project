import Navbar from "../Components/Navbar"

function Lumbini() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Lumbini – Birthplace of Lord Buddha
        </h1>

        {/* Simple 2-column grid for intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Image */}
          <img 
            src="https://i.pinimg.com/736x/f3/40/ac/f340aced16bea7c99803d2b0678744d7.jpg" 
            alt="Lumbini Maya Devi Temple" 
            className="w-full rounded-lg"
          />

          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sacred Birthplace of Buddha</h2>
            <p className="text-gray-700">
              Lumbini is a UNESCO World Heritage Site and the birthplace of Lord Buddha, 
              located in Rupandehi District, Nepal. The site is centered around the Maya Devi Temple, 
              which marks the exact spot where Queen Maya Devi gave birth to Siddhartha Gautama in 623 BC.
            </p>
          </div>
        </div>

        {/* 3 simple cards below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Maya Devi Temple */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img 
              src="https://i.pinimg.com/736x/32/f0/b0/32f0b03a1de134b515e5a87bff523d3b.jpg" 
              alt="Maya Devi Temple" 
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-bold mt-3">Maya Devi Temple</h3>
            <p className="text-sm text-gray-600">
              The central shrine of Lumbini, built at the birthplace of Buddha, surrounded by sacred ruins.
            </p>
          </div>

          {/* Ashokan Pillar */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img 
              src="https://i.pinimg.com/1200x/d0/8f/4e/d08f4ea57c6daa1ac9828e5f064bbf12.jpg" 
              alt="Ashokan Pillar" 
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-bold mt-3">Ashokan Pillar</h3>
            <p className="text-sm text-gray-600">
              Erected by Emperor Ashoka in 249 BC, confirming Lumbini as the birthplace of Lord Buddha.
            </p>
          </div>

          {/* Monastic Zone */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img 
              src="https://c8.alamy.com/comp/2C5E1C4/lumbini-nepal-18-january-2020-buddhist-monastery-at-the-monastic-zone-of-lumbini-in-nepal-2C5E1C4.jpg" 
              alt="Lumbini Monastic Zone" 
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-bold mt-3">Monastic Zone</h3>
            <p className="text-sm text-gray-600">
              A peaceful area with monasteries built by Buddhist communities from around the world.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Lumbini








