import React from 'react';

const HeadingTitle = ({title1, title2, subtitle}) => {
    return (
        <div className='w-full '>
            <p className='text-white font-semibold text-center text-4xl font-vazirmatin'>{title1} <span className='text-red-500'>{title2}</span></p>
            <p className='text-center text-gray-300'>{subtitle}</p>
        </div>
    );
};

export default HeadingTitle;