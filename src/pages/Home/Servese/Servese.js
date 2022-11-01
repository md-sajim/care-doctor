import React, { useEffect, useState } from 'react';
import Serves from '../Serves/Serves';
const Servese = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('servece.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className='text-xl font-bold text-orange-400 my-8'>Service</p>
                <h1 className='text-5xl font-bold text-black my-5'>Our Service Area</h1>
                <p className='w-1/3 mx-auto mb-10 text-slate-600'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4'>
                {
                    services.map(servic => <Serves
                    key={servic._id}
                    servic={servic}
                    ></Serves>)
                }
            </div>
            <div className='my-20 text-center'>
                <button className='btn btn-outline text-orange-400 hover:bg-orange-500'>More Services</button>
            </div>
        </div>
    );
};

export default Servese;