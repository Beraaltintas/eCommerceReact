import { useState } from "react";
import SliderItem from "./SliderItem";
import "./Sliders.css";

const Slider = () => {
  const [currentSlide, setCurrnetSlide] = useState(0);
  const nextSlide =()=>{
    setCurrnetSlide((prevSlide) => (prevSlide + 1)%3)
  }
  const prevSlide =()=>{
    setCurrnetSlide((prevSlide) => (prevSlide - 1 +3)%3)
  }
  return (
    <section className="slider">
      <div className="slider-elements">
        {currentSlide === 0 && <SliderItem imageSrc="img/slider/slider1.jpg"/>}
        {currentSlide === 1 && <SliderItem imageSrc="img/slider/slider2.jpg"/>}
        {currentSlide === 2 && <SliderItem imageSrc="img/slider/slider3.jpg"/>}

        <div className="slider-buttons">
          <button onClick={prevSlide}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button onClick={nextSlide}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="slider-dots">
          <button className={`slider-dot ${currentSlide === 0 ? "active":""}`} onClick={()=>setCurrnetSlide(0)}>
            <span></span>
          </button>
          <button className={`slider-dot ${currentSlide === 1 && "active"}`} onClick={()=>setCurrnetSlide(1)}
          >
            <span></span>
          </button>
          <button className={`slider-dot ${currentSlide === 2 && "active"}`} onClick={()=>setCurrnetSlide(2)}
            >
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
