import React from 'react';
import OverlappedButton from './OverlappedButton';

const Header = () => (
  <header className="flex justify-between lg:flex-row flex-col lg:items-center items-start pt-8 px-8 pb-4 bg-gradient-to-r from-black/20 via-transparent to-black/20 backdrop-blur-sm border-b border-white/10">
    <div className="text-white md:text-[69px] sm:text-4xl text-3xl font-light cursor-pointer hover:text-[#EA5537] transition-colors duration-300 drop-shadow-lg">
      Whiskers
    </div>
    <div className="relative flex items-center lg:justify-end justify-between lg:w-1/2 w-full gap-8 mt-4 lg:mt-0">
      <div className='text-white lg:text-[35px] text-[25px] flex gap-3 items-center cursor-pointer transition-all hover:scale-110 hover:text-[#EA5537] group'>
        <span className="font-medium">get in touch</span>
        <img 
          src="/images/ico-chat.svg" 
          alt="Chat icon" 
          className='lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 transition-transform duration-300 group-hover:rotate-12' 
        />
      </div>
      <OverlappedButton text="Buy Now" /> 
    </div>
  </header>
);

export default Header;