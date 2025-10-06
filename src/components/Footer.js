import React from 'react';

const Footer = () => {
  const socialLinks = [
    { icon: '/images/ico-twitter_.svg', alt: 'Twitter', bgColor: 'bg-white', link: '#' },
    { icon: '/images/ico-telegram_.svg', alt: 'Telegram', bgColor: 'bg-[#0096FA]', link: '#' },
    { icon: '/images/ico-coingecko.svg', alt: 'CoinGecko', bgColor: 'bg-[#8BC53F]', link: '#' },
    { icon: '/images/ico-coindeno.svg', alt: 'CoinDeno', bgColor: 'bg-[#320170]', link: '#' },
    { icon: '/images/ico-coindex.svg', alt: 'CoinIndex', bgColor: 'bg-[#111116]', link: '#' }
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-[#EA5537] to-[#D04A2F] text-center py-16 flex justify-center flex-col gap-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className='flex md:gap-8 gap-4 w-full justify-center items-center relative z-10'>
        {socialLinks.map((social, index) => (
          <div 
            key={index}
            className="relative transition-all duration-300 hover:scale-110 cursor-pointer group"
            onClick={() => window.open(social.link, '_blank')}
          >
            <span className="absolute top-0 left-0 md:mt-[15px] mt-[4px] md:ml-[8px] ml-[5px] md:h-5/6 h-[90%] w-full lg:rounded-3xl rounded-xl bg-white shadow-lg"></span>
            <span className={`relative inline-block h-full w-full lg:rounded-3xl rounded-xl lg:border-[4px] border-[2px] border-black ${social.bgColor} box-border p-1 lg:p-[10px] transition-transform duration-300 group-hover:rotate-3`}>
              <img 
                src={social.icon} 
                alt={social.alt} 
                className='lg:w-16 md:w-12 w-8 transition-transform duration-300 group-hover:scale-110' 
              />
            </span>
          </div>
        ))}
      </div>
      
      <div className="relative z-10">
        <p className="text-white md:text-[25px] text-lg mt-4 font-medium drop-shadow-lg">
          Copyright © 2024-2025 all meows reserved
        </p>
        <p className="text-white/80 text-sm mt-2">
          Made with ❤️ for the TON community
        </p>
      </div>
    </footer>
  );
};

export default Footer;
