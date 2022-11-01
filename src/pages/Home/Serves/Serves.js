import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Serves = ({servic}) => {
    const {img, title, price} = servic
    console.log(servic)
    return (
        <div className="card w-96 card-compact bg-base-200 shadow-xl p-5">
            <figure><img className='rounded-lg h-60' src={img} alt="Shoes" /></figure>
            <div className="">
                <h2 className="card-title">{title}</h2>
                <p className='font-bold text-orange-400 text-lg'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="p-5 text-orange-400"><FaArrowRight/></button>
                </div>
            </div>
        </div>
    );
};

export default Serves;