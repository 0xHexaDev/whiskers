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
    <section className="text-center mb-10 overflow-hidden">
      {/* Hero Section with improved animations */}
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <img 
          src="/images/image_1.png" 
          alt="Whiskers the OG kitten mascot" 
          className="max-w-[574px] w-4/5 mx-auto animate-pulse hover:animate-none transition-all duration-500" 
          loading="eager"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
        <p className="text-white lg:text-[55px] md:text-5xl text-4xl -mt-10 font-light tracking-wide">
          Say Hello to
        </p>
        <p className="text-[#EA5537] lg:text-[120px] md:text-[90px] text-6xl font-bold drop-shadow-2xl transform hover:scale-105 transition-transform duration-300">
          Whiskers
        </p>
        <div className="flex flex-col sm:flex-row gap-2 w-full items-center justify-center my-1">
          <p className="text-white lg:text-[55px] md:text-5xl text-4xl font-light">On Ton</p>
          <div className="transform hover:rotate-12 transition-transform duration-300">
            <OverlappedButton text={<img src="/images/ico-ton.svg" alt="Ton Icon" className='lg:w-20 md:w-14 w-12' />} topColor="white" bottomColor="#EA5537" />
          </div>
        </div>
        <p className="text-white lg:text-[55px] md:text-5xl text-4xl my-5 font-light px-4">
          welcome to ton's OG kitten
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center mt-8 px-4">
          <OverlappedButton text="Buy now" />
          <OverlappedButton text="Chart" topColor="white" bottomColor="#EA5537" />
        </div>
      </div>
      {/* Contract Address Section with enhanced styling */}
      <div className="w-full md:px-16 md:py-10 px-6 py-6 my-24 bg-[#EA5537] border-b-[10px] border-white text-center flex-col gap-20 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
        <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-4">
          <p className="text-white lg:text-[55px] md:text-4xl text-3xl my-5 font-bold drop-shadow-lg">
            Contract Address
          </p>
          <div className="relative group">
            <img
              src="/images/ico-copy.svg"
              alt="Copy contract address to clipboard"
              className="lg:w-[40px] md:w-9 w-6 cursor-pointer transform hover:scale-110 transition-transform duration-200"
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
              <div className="absolute top-[-3rem] right-0 bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg animate-bounce">
                ✓ Copied!
              </div>
            )}
            {/* Tooltip on hover */}
            <div className="absolute top-[-2.5rem] right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Click to copy
            </div>
          </div>
        </div>
        <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm border border-white/20">
          <p 
            className="text-white lg:text-[37px] md:text-2xl text-lg mt-4 text-left break-words select-all hover:bg-black/30 transition-colors duration-200 p-2 rounded cursor-text" 
            style={{ fontFamily: '"Courier New", monospace' }}
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
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        
        <div className='flex md:flex-row flex-col max-w-[1500px] justify-between w-full items-center mx-auto relative z-10'>
          <div className="transform hover:scale-105 transition-transform duration-500">
            <img 
              src="/images/image_2.png" 
              alt="Whiskers character illustration showing the OG kitten" 
              className="md:w-[40%] w-5/6 object-contain drop-shadow-2xl" 
              loading="lazy"
            />
          </div>
          <div className="text-white lg:text-[35px] md:text-3xl text-2xl w-5/6 md:w-[55%] flex flex-col md:gap-10 gap-5 text-left">
            <div className='flex w-full flex-col'>
              <p className='lg:text-[55px] md:text-4xl text-3xl my-5 text-[#EA5537] font-bold transform hover:scale-105 transition-transform duration-300'>
                i am whiskers...
              </p>
              <p style={{
                WebkitTextStroke: "1px white",
                color: "black",
              }} className='font-bold transform hover:scale-105 transition-transform duration-300'>
                the OG kitten meme on TON.
              </p>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
                $WHISK was launched in April '24.<br />
                pure, fair, and full of dreams.
              </p>
              <p className="leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
                Life's tossed me around since,<br />
                but this kitty doesn't quit.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:justify-start justify-center items-center w-full mt-6">
              <OverlappedButton text="Buy now" />
              <OverlappedButton text="Chart" topColor="white" bottomColor="#EA5537" />
            </div>
            <p className="text-[#EA5537] font-bold text-xl mt-4 transform hover:scale-105 transition-transform duration-300">
              Love me, fear my whims.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
