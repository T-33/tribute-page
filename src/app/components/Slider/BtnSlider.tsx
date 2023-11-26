import React from "react";
// import "./Slider.css";
import leftArrow from "../../../../public/left-arrow.svg";
import rightArrow from "../../../../public/right-arrow.svg";
import Image from 'next/image'

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (

    <button
      onClick={moveSlide}
      className={`${direction === "next" ? "btn-slide next" : "btn-slide prev"} h-10 w-10 my-auto`}
      
    >

      <Image src={direction === 'next'? rightArrow : leftArrow} 
             alt = 'Arrow'
             />
             
    </button>
  );
}