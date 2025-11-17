import Navbar from "../Components/Navbar"

function Temp(){


    return(
    <>
    <Navbar> </Navbar>

<div className="bg-gray-100">
        <div className="container mx-auto px-4 py-30">
          <h1 className="text-5xl font-bold text-center mb-16">
            Pashupatinath Temple
          </h1>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Large Intro Section (Image + Description) */}
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://i.pinimg.com/1200x/aa/10/97/aa1097b2edc8b577bcc5ffdba7e5da42.jpg" 
                alt="Bhaktapur Durbar Square" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Walk Through the Windy Trails of Jomsom</h2>
                <p className="text-gray-700 leading-relaxed">
                  Muktinath Temple, located in Mustang, Nepal, is a sacred pilgrimage site for both Hindus and Buddhists.
                   Known for its 108 holy water spouts and the unique Jwala Mai Eternal Flame, it offers a peaceful spiritual 
                   experience surrounded by stunning Himalayan views. Muktinath is a perfect destination for travelers seeking natural beauty, 
                   culture, and divine blessings.
                </p>
              </div>
            </div>

            {/* Nyatapola Temple */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://i.pinimg.com/736x/7c/74/a2/7c74a25b64dd819e2b3f262f26740484.jpg" 
                alt="muktinath" 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold"> Aryaghat & Bhasmeshwor Ghat</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Located in the middle of the Great Himalayas, Muktinath is a sacred place that joins the gods’ and human virtues with sightseeing tours in Nepal.
                </p>
              </div>
            </div>

            {/* Golden Gate */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://i.pinimg.com/1200x/dc/5a/85/dc5a85f6817c7f62df1e9c434c84f605.jpg"
                alt="Golden Gate" 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">               <h3 className="text-xl font-semibold">Paradise of Marpha</h3>
                <p className="text-gray-600 text-sm mt-2">
                 Marpha Village – Famous for its lush apple orchards, traditional stone-paved alleys, whitewashed houses, and serene Tibetan-style monasteries. Known as
                  the “Apple Capital of Nepal,” Marpha offers delicious apple products 
                 like cider and brandy, along with a peaceful atmosphere perfect for relaxing after a trek.
                </p>
              </div>
            </div>

            {/* 55-Window Palace */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://i.pinimg.com/1200x/18/40/b3/1840b3620ed64828927ab13dcfc756ce.jpg" 
                alt="55-Window Palace" 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">108 tap of Muktinath temple</h3>
                <p className="text-gray-600 text-sm mt-2">
                  The 108 Water Spouts of Muktinath – Known as “Muktidhara,” these sacred taps release ice-cold Himalayan water symbolizing spiritual purification. Pilgrims bathe under all 108 spouts to wash away negativity and seek blessings. Arranged in a half-moon shape behind the main temple,
                   this holy site offers a unique and deeply peaceful experience for every visitor.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>


    )

}
export default Temp;