import React from 'react';
import OverlappedButton from './OverlappedButton';

const Header = () => (
  <header className="flex justify-between lg:flex-row flex-col lg:items-center items-start pt-5 px-8 bg-cover bg-center">
    <div className="text-white md:text-[69px] sm:text-4xl text-3xl font-light cursor-pointer ">Whiskers</div>
    <div className="relative flex items-center lg:justify-end justify-between lg:w-1/2 w-full gap-10">
      <div className=' text-white lg:text-[35px] text-[25px] flex gap-2 items-center cursor-pointer transition-all hover:scale-125'>
      get in touch
        <img src="/images/ico-chat.svg" alt="icon" className=' lg:w-10 lg:h-10 md:w-8 md:h-8 w-5 h-5' />
      </div>
     <OverlappedButton text="Buy Now" /> 
    </div>
  </header>
);

export default Header;