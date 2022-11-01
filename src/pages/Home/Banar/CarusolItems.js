import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './banar.css'

const CarusolItems = ({ slide }) => {
    const { id, imges, p, n } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gradent'>
                <img alt='' src={imges} className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-32 top-1/4">
                <h1 className='text-6xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
            </div>
            <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-32 top-1/2 w-2/5">
                <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-32 bottom-1/3">
                <button className="btn btn-error normal-case text-white">Discover More</button>
                <button className="btn btn-outline  normal-case text-orange-600">Latest Project</button>
            </div>
            <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${p}`} className="btn btn-circle"><FaArrowLeft /></a>
                <a href={`#slide${n}`} className="btn btn-circle bg-rose-700"><FaArrowRight /></a>
            </div>
        </div>
    );
};

export default CarusolItems;