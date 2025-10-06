import React, { useState, useEffect, useCallback } from 'react';
import OverlappedButton from './OverlappedButton';

const Body = () => {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Add subtle parallax effect on mouse move
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCopy = useCallback(() => {
    const textToCopy = "EQCObh4-ZaghOva8uCz_AMMnvifM3PS-EppUJEJQXXnlP0zX";
    
    // Add haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  }, []);

  return (
    <section className="text-center mb-10 overflow-hidden relative">
      {/* Hero Section with improved animations */}
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative">
          <img 
            src="/images/image_1.png" 
            alt="Whiskers the OG kitten mascot" 
            className="max-w-[574px] w-4/5 mx-auto transition-all duration-500 hover:scale-105 drop-shadow-2xl" 
            loading="eager"
            style={{
              transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
            }}
          />
          {/* Glow effect behind image */}
          <div className="absolute inset-0 max-w-[574px] w-4/5 mx-auto bg-[#EA5537]/20 blur-3xl -z-10"></div>
        </div>
        
        <p className="text-white lg:text-[55px] md:text-5xl text-4xl -mt-10 font-light tracking-wide drop-shadow-lg">
          Say Hello to
        </p>
        
        <div className="relative">
          <p className="text-[#EA5537] lg:text-[120px] md:text-[90px] text-6xl font-bold drop-shadow-2xl transform hover:scale-105 transition-all duration-300 relative z-10">
            Whiskers
          </p>
          {/* Text glow effect */}
          <div className="absolute inset-0 text-[#EA5537] lg:text-[120px] md:text-[90px] text-6xl font-bold blur-sm opacity-50 -z-10">
            Whiskers
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full items-center justify-center my-6">
          <p className="text-white lg:text-[55px] md:text-5xl text-4xl font-light drop-shadow-lg">On Ton</p>
          <div className="transform hover:rotate-12 transition-transform duration-300 hover:scale-110">
            <OverlappedButton text={<img src="/images/ico-ton.svg" alt="Ton Icon" className='lg:w-20 md:w-14 w-12' />} topColor="white" bottomColor="#EA5537" />
          </div>
        </div>
        
        <p className="text-white lg:text-[55px] md:text-5xl text-4xl my-8 font-light px-4 drop-shadow-lg">
          welcome to ton's OG kitten
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center mt-12 px-4">
          <OverlappedButton text="Buy now" />
          <OverlappedButton text="Chart" topColor="white" bottomColor="#EA5537" />
        </div>
      </div>
      {/* Contract Address Section with enhanced styling */}
      <div className="w-full md:px-16 md:py-12 px-6 py-8 my-24 bg-gradient-to-r from-[#EA5537] to-[#D04A2F] border-b-[10px] border-white text-center flex-col gap-8 shadow-2xl transform hover:scale-[1.01] transition-all duration-500 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        
        <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-6 relative z-10">
          <p className="text-white lg:text-[55px] md:text-4xl text-3xl my-5 font-bold drop-shadow-lg">
            Contract Address
          </p>
          <div className="relative group">
            <img
              src="/images/ico-copy.svg"
              alt="Copy contract address to clipboard"
              className="lg:w-[40px] md:w-9 w-6 cursor-pointer transform hover:scale-125 transition-all duration-300 filter drop-shadow-lg"
              onClick={handleCopy}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCopy();
                }
              }}
              aria-label="Copy contract address"
            />
            {copied && (
              <div className="absolute top-[-4rem] right-0 bg-green-600 text-white text-sm px-4 py-2 rounded-lg shadow-xl animate-bounce z-20">
                ✓ Copied!
              </div>
            )}
            {/* Tooltip on hover */}
            <div className="absolute top-[-3rem] right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
              Click to copy
            </div>
          </div>
        </div>
        
        <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm border border-white/30 shadow-inner relative z-10">
          <p 
            className="text-white lg:text-[37px] md:text-2xl text-lg mt-2 text-left break-words select-all hover:bg-black/40 transition-all duration-300 p-4 rounded-lg cursor-text font-mono tracking-wide" 
            role="textbox"
            aria-label="Contract address"
            title="Click to select all text"
          >
            EQCObh4-ZaghOva8uCz_AMMnvifM3PS-EppUJEJQXXnlP0zX
          </p>
        </div>
      </div>
      {/* About Section with enhanced background and animations */}
      <div
        className='lg:p-24 md:p-16 p-12 flex -mt-24 relative overflow-hidden'
        style={{
          backgroundImage: "url('/public/images/background.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          width: "100%",
        }}
      >
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#EA5537]/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#EA5537]/20 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className='flex md:flex-row flex-col max-w-[1500px] justify-between w-full items-center mx-auto relative z-10 gap-12'>
          <div className="transform hover:scale-105 transition-all duration-500 hover:rotate-2">
            <img 
              src="/images/image_2.png" 
              alt="Whiskers character illustration showing the OG kitten" 
              className="md:w-[40%] w-5/6 object-contain drop-shadow-2xl filter brightness-110" 
              loading="lazy"
            />
          </div>
          
          <div className="text-white lg:text-[35px] md:text-3xl text-2xl w-5/6 md:w-[55%] flex flex-col md:gap-10 gap-6 text-left">
            <div className='flex w-full flex-col'>
              <p className='lg:text-[55px] md:text-4xl text-3xl my-5 text-[#EA5537] font-bold transform hover:scale-105 transition-all duration-300 drop-shadow-lg'>
                i am whiskers...
              </p>
              <p style={{
                WebkitTextStroke: "2px white",
                color: "black",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
              }} className='font-bold transform hover:scale-105 transition-all duration-300 drop-shadow-lg'>
                the OG kitten meme on TON.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="leading-relaxed opacity-90 hover:opacity-100 transition-all duration-300 text-lg md:text-xl">
                $WHISK was launched in April '24.<br />
                <span className="text-[#EA5537] font-semibold">pure, fair, and full of dreams.</span>
              </p>
              <p className="leading-relaxed opacity-90 hover:opacity-100 transition-all duration-300 text-lg md:text-xl">
                Life's tossed me around since,<br />
                <span className="text-white font-semibold">but this kitty doesn't quit.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:justify-start justify-center items-center w-full mt-8">
              <OverlappedButton text="Buy now" />
              <OverlappedButton text="Chart" topColor="white" bottomColor="#EA5537" />
            </div>
            
            <p className="text-[#EA5537] font-bold text-xl md:text-2xl mt-6 transform hover:scale-105 transition-all duration-300 drop-shadow-lg text-center md:text-left">
              Love me, fear my whims.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
