import React from 'react';


const SliderButton = ({ direction, goTo }) => {
    return (
        <button onClick={goTo} type='button' className={direction === 'next' ? 'sliderBtn next' : 'sliderBtn prev'}>
            <img src={direction === 'next' ? process.env.PUBLIC_URL + '/img/arrow_forward.svg' : process.env.PUBLIC_URL + '/img/arrow_back.svg'} alt={direction === 'next' ? 'Next Image' : 'Previous Image'} />
        </button>
    );
};

export default SliderButton;