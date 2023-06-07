import React from 'react';
import Slider from '../../components/Pages/Home/Slider/Slider';
import WhyChose from '../../components/Pages/Home/WhyChose/WhyChose';
import PopularClasses from '../../components/Pages/Home/PopularClasses/PopularClasses';
import PopularInstructor from '../../components/Pages/Home/PopularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div className='min-h-[30vh]'>
            <Slider />
            <WhyChose />
            <PopularClasses />
            <PopularInstructor />
            
        </div>
    );
};

export default Home;