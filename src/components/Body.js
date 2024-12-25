import React, { useState } from 'react';
import OverlappedButton from './OverlappedButton';

const Body = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = "EQCObh4-ZaghOva8uCz_AMMnvifM3PS-EppUJEJQXXnlP0zX";
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="text-center mb-10">
      <img src="/images/image_1.png" alt="image1" className="max-w-[574px] w-4/5 mx-auto" />
      <p className="text-white lg:text-[55px] md:text-5xl text-4xl -mt-10">Say Hello to</p>
      <p className="text-[#EA5537] lg:text-[120px] md:text-[90px] text-6xl">Whiskers</p>
      <div className="flex gap-2 w-full items-center justify-center my-1">
        <p className="text-white lg:text-[55px] md:text-5xl text-4xl">On Ton</p>
        <OverlappedButton text={<img src="/images/ico-ton.svg" alt="Ton Icon" className='lg:w-20 md:w-14 w-12' />} topColor="white" bottomColor="#EA5537" />
      </div>
      <p className="text-white lg:text-[55px] md:text-5xl text-4xl my-5">welcome to ton’s OG kitten</p>
      <div className="flex gap-10 justify-center">
        <OverlappedButton text="Buy now" />
        <OverlappedButton text="Chart" topColor="white" bottomColor="#EA5537" />
      </div>
      <div className="w-full md:px-16 md:py-10 px-10 py-6 my-24 bg-[#EA5537] border-b-[10px] border-white text-center flex-col gap-20">
        <div className="flex justify-between w-full items-center">
          <p className="text-white lg:text-[55px] md:text-4xl text-3xl my-5">Contract Address</p>
          <div className="relative">
            <img
              src="/images/ico-copy.svg"
              alt="Copy Icon"
              className="lg:w-[40px] md:w-9 w-6 cursor-pointer"
              onClick={handleCopy}
            />
            {copied && (
              <div className="absolute top-[-2rem] right-0 bg-black text-white text-sm px-2 py-1 rounded">
                Copied!
              </div>
            )}
          </div>
        </div>
        <p className="text-white lg:text-[37px] md:text-2xl text-xl mt-4 text-left break-words" style={{ fontFamily: '"Courier New", monospace' }}>
          EQCObh4-ZaghOva8uCz_AMMnvifM3PS-EppUJEJQXXnlP0zX
        </p>

      </div>
      <div
        className='lg:p-24 md:p-16 p-12 flex -mt-24'
        style={{
          backgroundImage: "url('/public/images/background.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          width: "100%",
        }}
      >
        <div className='flex md:flex-row flex-col max-w-[1500px] justify-between w-full items-center mx-auto'>
          <img src="/images/image_2.png" alt="image2" className="md:w-[40%] w-5/6 object-contain" />
          <div className="text-white lg:text-[35px] md:text-3xl text-2xl w-5/6 md:w-[55%] flex flex-col md:gap-10 gap-5 text-left">
            <div className='flex w-full flex-col'>
              <p className='lg:text-[55px] md:text-4xl text-3xl my-5 text-[#EA5537]'>i am whiskers...</p>
              <p style={{
                WebkitTextStroke: "1px white",
                color: "black",

              }} className='font-bold'>the OG kitten meme on TON.</p>
            </div>
            <p>
              $WHISK was launched in April ‘24.<br />
              pure, fair, and full of dreams.

            </p>
            <p>

              Life’s tossed me around since,<br />
              but this kitty doesn’t quit.
            </p>
            <div className="flex gap-10 md:justify-start justify-evenly items-center w-full">
              <OverlappedButton text="Buy now" />
              <OverlappedButton text="Chart" topColor="white" bottomColor="#EA5537" />
            </div>
            <p>Love me, fear my whims.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Body;
