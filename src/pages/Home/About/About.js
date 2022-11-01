import React from 'react';
import parson from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative m-10'>
                    <img src={parson} className=" border-lime-100 border-8 w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute right-5 top-32 h-full  w-3/5 border-lime-100 border-8   rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h5 className='text-orange-400 font-semibold text-xl'>About Us</h5>
                    <h1 className="text-5xl font-bold text-black py-5">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="pb-6">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn hover:bg-orange-600 normal-case bg-orange-400 text-lg">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;