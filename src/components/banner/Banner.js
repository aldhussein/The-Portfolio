import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex-col lg:flex-row xl:gap-0 items-center border-b-[1px] font-titleFont border-b-black"
    >
     
      <LeftBanner className="flex-1 bg-red-500 />
     <RightBanner className="flex-1 bg-blue-500 />
    </section>
  );
}

export default Banner
