import React from "react";

const OverlappedButton = ({
  topColor = "[#EA5537]",
  bottomColor,
  text,
  onClick
}) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
    
      window.location.href = "#";
    }
  };

  return (
    <div onClick={handleClick} className="relative transition duration-100 hover:scale-110 cursor-pointer">
      <span
        className={`absolute top-0 left-0 
           ${typeof text === 'string' ? `lg:mt-2 md:mt-1 mt-[2px] lg:ml-3 md:ml-1 ml-[2px] ` : `md:mt-[15px] mt-[4px] md:ml-[8px] ml-[5px] md:h-5/6 h-[90%]`}
           h-full w-full lg:rounded-3xl rounded-xl ${bottomColor ? `bg-[${bottomColor}]` : `bg-white`}`}
      ></span>
      <span
        className={`fold-bold relative inline-block h-full w-full 
          ${topColor === '[#EA5537]' ? `text-[#ffffff]` : `text-[#2D2D2D]`} font-bold  
          lg:rounded-3xl rounded-xl lg:border-[5px] border-[3px] border-black  
        bg-${topColor} box-border
         ${typeof text === 'string' ? `md:px-8 px-3 lg:px-10  py-1 lg:py-3 ` : ` px-1 lg:px-[5px]  py-1 lg:py-[5px]  `} 
        md:text-[25px] text-[15px] lg:text-[30px] xl:text-[45px] lg:font-normal font-light `}>
        {text}
      </span>
    </div>
  );
};

export default OverlappedButton;
