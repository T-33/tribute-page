import React, {useState} from 'react'

import Image from 'next/image'

import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'


export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1),

          moveDot = ( index: number ) => setSlideIndex( index );


    const nextSlide = () => {

            if( slideIndex !== dataSlider.length ){

                setSlideIndex(slideIndex + 1)

            }  else if ( slideIndex === dataSlider.length ){

                setSlideIndex(1)

            }

        };

    const prevSlide = () => {

            if( slideIndex !== 1 ){

                setSlideIndex(slideIndex - 1)

            } else if ( slideIndex === 1 ){

                setSlideIndex( dataSlider.length )
            }
        };

 
   return (
        <div className='flex flex-col max-w[50%] w-[40vw] max-h-15 max-w-25 р-100'>

            <div className='flex w-full justify-center'>

                <BtnSlider moveSlide = {prevSlide} direction = 'prev' />

                <div className="container-slider relative  border-black  w-full max-w-[800px] h-80 ">    
    
                                { dataSlider.map(( obj, index ) => {
                                    return (
                                            <div className = {`
                                                                absolute 
                                                                z-0 
                                                                opacity-0
                                                                transition-opacity
                                                                duration-500
                                                                ${ slideIndex === index + 1 ? " z-20 opacity-100" : `slide`  }
                                                                max-w-[800px] w-full h-80
                                                                `}
                                                 key = { obj.id }
                                                 >
    
                                                <Image
                                                    src = {obj.src}
                                                    alt = {`Image${index + 1}`}
                                                    width = '400'
                                                    height = '200'
                                                    className='h-full w-full  object-contain max-w-full min-w-full '
                                                />
    
                                            </div>
                                           )
                                     })
                                }
    
                </div>

                <BtnSlider moveSlide={nextSlide} direction={"next"} />

            </div>



            <div className="container-dots flex mx-auto mt-2">

                    {Array.from({length: 5}).map((item, index) => (

                            <div
                                onClick={() => moveDot(index + 1)}
                                className={` ${ slideIndex === index + 1 ? "bg-white border-[1px] border-black border-solid" : " " } rounded-full h-4 w-4 bg-purple-800 mx-1`}
                                key = {`container-dot${index}`}
                            >   
                            </div>
                        
                    ))}

            </div>

        </div>

    )
}