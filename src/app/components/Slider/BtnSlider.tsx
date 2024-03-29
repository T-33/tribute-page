import React from "react";
import Image from 'next/image'

import leftArrow from "../../../../public/left-arrow.svg";
import rightArrow from "../../../../public/right-arrow.svg";

interface Movement {
  direction: string,
  moveSlide: VoidFunction
}

export default function BtnSlider({ direction, moveSlide }: Movement) {
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