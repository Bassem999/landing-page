import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

import "swiper/css";
import person from "../assets/person.png";
export default () => {
  return (
    <section className="container py-28">
      <div className="mb-14">
        <span className="text-[#646464] uppercase font-medium text-xl text-center block">
          testimonials
        </span>
        <h3 className="text-5xl capitalize font-medium text-center">
          Client says about us
        </h3>
      </div>
      <div className="flex space-x-4 justify-end">
        <button
          id="prev"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:text-white bg-white hover:bg-[#37806B] duration-300 shadow-xl"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          id="next"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:text-white bg-white hover:bg-[#37806B] duration-300 shadow-xl"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ disableOnInteraction: false, delay: 5000 }}
        navigation={{
          nextEl: "#next",
          prevEl: "#prev",
          disabledClass:
            "cursor-not-allowed hover:bg-gray-100 hover:text-gray-400 text-gray-400",
        }}
        slidesPerView={1}
        breakpoints={{ 1024: { slidesPerView: 2 } }}
        spaceBetween={150}
        className="container py-10"
      >
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

const TestimonialCard = () => {
  return (
    <div className="rounded-tl-[70px] rounded-br-[70px] lg:flex items-center shadow-xl py-10 px-5 lg:pl-20 lg:pr-4 space-y-8">
      <span className="text-8xl font-sans absolute text-[#B0855B] top-6 right-4">
        ”
      </span>
      <img
        src={person}
        className="rounded-tl-[36px] rounded-br-[36px] mx-auto lg:-translate-x-1/2 lg:absolute left-0"
        alt=""
      />
      <div className="font-body">
        <div className="text-[#212121] text-2xl font-bold font-body mb-4">
          Louis Saville
          <span className="font-normal text-[#646464] text-base">
            /CEO at Google inc
          </span>
        </div>
        <p className="font-body text-[#646464] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};
