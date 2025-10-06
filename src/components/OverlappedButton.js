import React from "react";

const OverlappedButton = ({
  topColor = "#EA5537",
  bottomColor = "white",
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

  const isText = typeof text === 'string';
  const textColor = topColor === "#EA5537" ? "text-white" : "text-gray-800";

  return (
    <div 
      onClick={handleClick} 
      className="relative transition-all duration-300 hover:scale-110 cursor-pointer group active:scale-95"
    >
      {/* Bottom shadow layer */}
      <span
        className={`absolute top-0 left-0 
           ${isText ? `lg:mt-2 md:mt-1 mt-[2px] lg:ml-3 md:ml-1 ml-[2px]` : `md:mt-[15px] mt-[4px] md:ml-[8px] ml-[5px] md:h-5/6 h-[90%]`}
           h-full w-full lg:rounded-3xl rounded-xl shadow-lg
           ${bottomColor === "white" ? "bg-white" : `bg-[${bottomColor}]`}`}
      ></span>
      
      {/* Main button */}
      <span
        className={`relative inline-block h-full w-full font-bold ${textColor}
          lg:rounded-3xl rounded-xl lg:border-[5px] border-[3px] border-black  
          box-border transition-all duration-300 group-hover:shadow-xl
          ${isText ? 
            `md:px-8 px-4 lg:px-10 py-2 lg:py-3 md:text-[25px] text-[16px] lg:text-[30px] xl:text-[45px] lg:font-bold font-semibold` : 
            `px-2 lg:px-[8px] py-1 lg:py-[8px]`
          }`}
        style={{ backgroundColor: topColor }}
      >
        {text}
      </span>
    </div>
  );
};

export default OverlappedButton;
