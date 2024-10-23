import React from 'react';

const HeadingTitle = ({title1, title2, subtitle}) => {
    return (
        <div className='w-full '>
            <p className='text-white font-semibold text-4xl font-vazirmatin text-center'>{title1} <span className='text-red-500'>{title2}</span></p>
            <p className=' text-gray-300 my-4 text-center'>{subtitle}</p>
        </div>
    );
};

export default HeadingTitle;