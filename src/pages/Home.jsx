import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
//import styles from "./style.module.css"; // Import your CSS module
import Contacts from "../components/contacts";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Statistics from "../components/Statistics";
import Why from "../components/Why";
import Services from "../components/Services";
import Features from "../components/Features";
import About from "../components/About";
import Footer from "../components/Footer";
import { Reactcre } from "../components/testReactCreate";

export default function Home() {
  // return Reactcre;
  return (
    <>
      <section className="slider-section">
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-screen"
          >
            <SwiperSlide>
              <img
                src="slider/slider-4.jpg"
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white p-4">
                <h2 className="text-4xl font-bold mb-4">Welcome to Slide 1</h2>
                <p className="text-lg">
                  This is some description text for Slide 1
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="slider/slider-5.jpg"
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-center items-center text-center text-white p-4">
                <h2 className="text-4xl font-bold mb-4">Welcome to Slide 2</h2>
                <p className="text-lg">
                  This is some description text for Slide 2
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="slider/slider-6.jpg"
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-center items-center text-center text-white p-4">
                <h2 className="text-4xl font-bold mb-4">Welcome to Slide 3</h2>
                <p className="text-lg">
                  This is some description text for Slide 2
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <About />
      <Features />
      <Services />
      <Statistics />
      <Why />
      <Testimonial />
      <Contacts />
      <Blog />
      <Footer />
    </>
  );
}
