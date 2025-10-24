import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Button from "../Components/Button";

const slides = [
  {
    id: 1,
    title: "Slide 1",
    image: "https://i.pinimg.com/736x/0e/bb/8c/v.jpgv",
  },
  {
    id: 2,
    title: "Slide 2",
    image: "https://i.pinimg.com/736x/ce/b6/df/ceb6dfb11d1f7c37c629c075f40ed869.jpg",
  },
  {
    id: 3,
    title: "Slide 3",
    image: "https://picsum.photos/id/1016/1200/400",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      {/* 🚀 React Auto Image Carousel */}
      <div className="bg-white py-16 mt-16">
        <div className="relative w-full overflow-hidden max-w-6xl mx-auto rounded-lg shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.title}
                className="w-full flex-shrink-0 object-cover h-96"
              />
            ))}
          </div>
        </div>
      </div>

      {/* This is card section */}
      <section className="bg-zinc-50 overflow-hidden pt-25">
        <p className="text-center font-bold text-2xl mb-8">
         <b>Our Main Destination</b> 
        </p>
        <div className="max-w-screen-lg 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row mx-auto gap-6">
            <Link to="/BhaktapurDurbar">
              <img
                src="https://i.pinimg.com/736x/44/a2/80/44a28061008c72849c8dae6b42815a1b.jpg"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </Link>
            <Link to="/Lumbini">
              <img
                src="https://i.pinimg.com/736x/c4/bb/37/c4bb372ba9590f757479ac40b0df4592.jpg"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </Link>
            <Link to="/Muk">
              <img
                src="https://i.pinimg.com/736x/a3/7f/e5/a37fe56420d2aa5343c30e038dfa436b.jpg"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </Link>
            <Link to="/Temp">
              <img
                src="https://i.pinimg.com/736x/6a/8a/12/6a8a12101ac39eedb98e99f0bcd2ca4e.jpg"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
             
            </Link>
          </div>
        </div>
      </section>
      
      <Button></Button>
      

      {/* Section */}
      <Footer></Footer>
      
    </>
  );
}

export default Home;
