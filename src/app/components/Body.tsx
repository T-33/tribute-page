import Slider from './Slider/Slider'
import SliderDaisyUI from './SliderDaisyUI';
import SliderVerticalDaisyUI from './SliderVerticalDaisyUI';

export default function Body() {

    return (

        <div className="flex flex-1 flex-col justify-center items-center basis-auto ">
            <Slider/>
            <SliderDaisyUI/>
            <SliderVerticalDaisyUI/>
        </div>
    );

};

