import React, {useState} from 'react'
import './Slider.css'
import dataSlider from './dataSlider'
import Image from 'next/image'
import BtnSlider from './BtnSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1),

          nextSlide = () => {

            if( slideIndex !== dataSlider.length ){

                setSlideIndex(slideIndex + 1)

            }  else if ( slideIndex === dataSlider.length ){

                setSlideIndex(1)

            }

        },

         prevSlide = () => {

            if( slideIndex !== 1 ){

                setSlideIndex(slideIndex - 1)

            } else if ( slideIndex === 1 ){

                setSlideIndex( dataSlider.length )
            }
        },

        moveDot = (index: number) => {
            setSlideIndex( index );
        };

    


   return (
        <div className='flex flex-col w-[50%] h-[50%] mx-auto my-auto'>
            <div className="container-slider flex justify-center flex-grow-1  object-cover border-black">
                <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
                {dataSlider.map((obj, index) => {
                    return (
                            <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                                 key = {obj.id}
                                 >
                                <Image
                                    src = {obj.src}
                                    alt = {`Image${index + 1}`}
                                    width = '200'
                                    height = '200'
                                    className='h-full w-full aspect-square'
                                />
                            </div>
                           )
                })}
            
            
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                
            </div>

            <div className="container-dots flex flex-shrink-1 mx-auto mt-2">
                    {Array.from({length: 5}).map((item, index) => (
                        <div
                        onClick={() => moveDot(index + 1)}
                        className={` ${ slideIndex === index + 1 ? "dot dot-active" : "dot" } rounded-full h-4 w-4 bg-purple-800 mx-1`}
                        key = {`container-dot${index}`}
                        >
                        </div>
                    ))}
                </div>
        </div>

    )
}