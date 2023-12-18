import Image  from 'next/image'

import dataSlider from './Slider/dataSlider'

export default function SliderDaisyUI() {

    return (
        <div className='carousel w-full h-full my-7 mx-14 max-w-[1200px]  '>

            {dataSlider.map( ( slide, index ) => {
                   
                    return (

                        <div className='carousel-item '
                             key = { slide.id }
                             id = {`#slide${slide.id}`}
                             >
                            <Image 
                                    src = { slide.src }
                                    alt = 'cat_slide'
                                    width = '400'
                                    height = '200'

                                    />

                        </div>

                    )
                })}
           

        </div>
    );
};
