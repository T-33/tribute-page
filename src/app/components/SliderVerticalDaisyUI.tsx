import Image  from 'next/image'

import dataSlider from './Slider/dataSlider'

export default function SliderVerticalDaisyUI() {

    return (
        <div className='carousel carousel-vertical w-full h-full my-7 mx-14 max-w-[400px] max-h-[400px] '>

            {dataSlider.map( ( slide, index ) => {
                   
                    return (

                        <div className='carousel-item w-full h-full max-w-[400px] max-h-[400px]'
                             key = { slide.id }
                             id = {`#slide${slide.id}`}
                             >
                            <Image 
                                    src = { slide.src }
                                    alt = 'cat_slide'
                                    width = '400'
                                    height = '400'

                                    />

                        </div>

                    )
                })}
           

        </div>
    );
};
