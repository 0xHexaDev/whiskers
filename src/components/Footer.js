import React from 'react';

const Footer = () => (
  <footer className="w-full bg-[#EA5537] text-center py-12 flex justify-center flex-col gap-12">
    <div className='flex md:gap-8 gap-3 w-full justify-center items-center'>
      <div className="relative transition duration-100 hover:scale-110 cursor-pointer">
        <span
          className={`absolute top-0 left-0 
           ${typeof text === 'string' ? `lg:mt-2 md:mt-1 mt-[2px] lg:ml-3 md:ml-1 ml-[2px] ` : `md:mt-[15px] mt-[4px] md:ml-[8px] ml-[5px] md:h-5/6 h-[90%]`}
           h-full w-full lg:rounded-3xl rounded-xl bg-white`}
        ></span>
        <span
          className={`relative inline-block h-full w-full 
          lg:rounded-3xl rounded-xl lg:border-[4px] border-[2px] border-black  
        bg-white box-border
          p-1 lg:p-[10px]
        md:text-[25px] text-[15px] lg:text-[30px] xl:text-[45px] lg:font-normal font-light `}>
          <img src="/images/ico-twitter_.svg" alt="Twitter Icon" className='lg:w-16 md:w-12 w-8' />
        </span>
      </div>
      <div className="relative transition duration-100 hover:scale-110 cursor-pointer">
        <span
          className={`absolute top-0 left-0 
           ${typeof text === 'string' ? `lg:mt-2 md:mt-1 mt-[2px] lg:ml-3 md:ml-1 ml-[2px] ` : `md:mt-[15px] mt-[4px] md:ml-[8px] ml-[5px] md:h-5/6 h-[90%]`}
           h-full w-full lg:rounded-3xl rounded-xl bg-white`}
        ></span>
        <span
          className={`relative inline-block h-full w-full 
          lg:rounded-3xl rounded-xl lg:border-[4px] border-[2px] border-black  
        bg-[#0096FA] box-border
          p-1 lg:p-[10px]
        md:text-[25px] text-[15px] lg:text-[30px] xl:text-[45px] lg:font-normal font-light `}>
          <img src="/images/ico-telegram_.svg" alt="telegram Icon" className='lg:w-16 md:w-12 w-8' />
        </span>
      </div>
      <div className="relative transition duration-100 hover:scale-110 cursor-pointer">
        <span
          className={`absolute top-0 left-0 
           ${typeof text === 'string' ? `lg:mt-2 md:mt-1 mt-[2px] lg:ml-3 md:ml-1 ml-[2px] ` : `md:mt-[15px] mt-[4px] md:ml-[8px] ml-[5px] md:h-5/6 h-[90%]`}
           h-full w-full lg:rounded-3xl rounded-xl bg-white`}
        ></span>
        <span
          className={`relative inline-block h-full w-full 
          lg:rounded-3xl rounded-xl lg:border-[4px] border-[2px] border-black  
        bg-[#8BC53F] box-border
          p-1 lg:p-[10px]
        md:text-[25px] text-[15px] lg:text-[30px] xl:text-[45px] lg:font-normal font-light `}>
          <img src="/images/ico-coingecko.svg" alt="telegram Icon" className='lg:w-16 md:w-12 w-8' />
        </span>
      </div>
      <div className="relative transition duration-100 hover:scale-110 cursor-pointer">
        <span
          className={`absolute top-0 left-0 
           ${typeof text === 'string' ? `lg:mt-2 md:mt-1 mt-[2px] lg:ml-3 md:ml-1 ml-[2px] ` : `md:mt-[15px] mt-[4px] md:ml-[8px] ml-[5px] md:h-5/6 h-[90%]`}
           h-full w-full lg:rounded-3xl rounded-xl bg-white`}
        ></span>
        <span
          className={`relative inline-block h-full w-full 
          lg:rounded-3xl rounded-xl lg:border-[4px] border-[2px] border-black  
        bg-[#320170] box-border
          p-1 lg:p-[10px]
        md:text-[25px] text-[15px] lg:text-[30px] xl:text-[45px] lg:font-normal font-light `}>
          <img src="/images/ico-coindeno.svg" alt="telegram Icon" className='lg:w-16 md:w-12 w-8' />
        </span>
      </div>
      <div className="relative transition duration-100 hover:scale-110 cursor-pointer">
        <span
          className={`absolute top-0 left-0 
           ${typeof text === 'string' ? `lg:mt-2 md:mt-1 mt-[2px] lg:ml-3 md:ml-1 ml-[2px] ` : `md:mt-[15px] mt-[4px] md:ml-[8px] ml-[5px] md:h-5/6 h-[90%]`}
           h-full w-full lg:rounded-3xl rounded-xl bg-white`}
        ></span>
        <span
          className={`relative inline-block h-full w-full 
          lg:rounded-3xl rounded-xl lg:border-[4px] border-[2px] border-black  
        bg-[#111116] box-border
          p-1 lg:p-[10px]
        md:text-[25px] text-[15px] lg:text-[30px] xl:text-[45px] lg:font-normal font-light `}>
          <img src="/images/ico-coindex.svg" alt="telegram Icon" className='lg:w-16 md:w-12 w-8' />
        </span>
      </div>
    </div>
    <p className="text-white md:text-[25px] text-lg mt-4">Copyright © 2024-2025 all meows reserved</p>
  </footer>
);

export default Footer;
