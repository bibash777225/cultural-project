import Navbar from "../Components/Navbar"

function BhaktapurDurbar() {
  return (
    <> 
      <Navbar />

      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-30">
          <h1 className="text-5xl font-bold text-center mb-16">
            Bhaktapur Durbar Square
          </h1>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Large Intro Section (Image + Description) */}
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://i.pinimg.com/1200x/96/9c/72/969c7259019a40c71338c79cac8026fd.jpg" 
                alt="Bhaktapur Durbar Square" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Living Heritage of Nepal</h2>
                <p className="text-gray-700 leading-relaxed">
                  Bhaktapur Durbar Square is a UNESCO World Heritage Site and once the royal palace of the Malla kings. 
                  Located 13 km east of Kathmandu, it is famous for its temples, palaces, and traditional Newari architecture. 
                  Every corner reflects centuries of wood, stone, and metal craftsmanship.
                </p>
              </div>
            </div>

            {/* Nyatapola Temple */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://i.pinimg.com/736x/f5/82/0e/f5820e9cab4ba0b2156a8d5d17629923.jpg" 
                alt="Nyatapola Temple" 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Nyatapola Temple</h3>
                <p className="text-gray-600 text-sm mt-2">
                  The tallest pagoda temple in Nepal, built in 1702, dedicated to Goddess Siddhi Lakshmi.
                </p>
              </div>
            </div>

            {/* Golden Gate */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://i.pinimg.com/736x/95/08/a8/9508a8ffc43a6277965e37482fd8e084.jpg"
                alt="Golden Gate" 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">               <h3 className="text-xl font-semibold">Golden Gate</h3>
                <p className="text-gray-600 text-sm mt-2">
                  A richly decorated entrance to the 55-Window Palace, considered one of the most beautiful gates in the world.
                </p>
              </div>
            </div>

            {/* 55-Window Palace */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://i.pinimg.com/1200x/fa/39/07/fa3907ca785eef5cc43970da2b96d7dd.jpg" 
                alt="55-Window Palace" 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">55-Window Palace</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Built in the 15th century by King Yaksha Malla, it is a masterpiece of woodcarving and royal history.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default BhaktapurDurbar
