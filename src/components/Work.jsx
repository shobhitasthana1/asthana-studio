import React from 'react';

const Work = () => {
  const images = [
    { url: "/src/assets/images/work1.png", top: "28%", left: "32%", isActive: true },
    { url: "/src/assets/images/work2.png", top: "36%", left: "68%", isActive: true },
    { url: "/src/assets/images/work3.png", top: "52%", left: "24%", isActive: true },
    { url: "/src/assets/images/work4.png", top: "58%", left: "74%", isActive: true },
    { url: "/src/assets/images/work5.png", top: "72%", left: "40%", isActive: true },
    { url: "/src/assets/images/work6.png", top: "70%", left: "62%", isActive: true },
    { url: "/src/assets/images/work7.png", top: "22%", left: "50%", isActive: true },
    { url: "/src/assets/images/work8.png", top: "45%", left: "82%", isActive: true },
  ];

  return (
    <div className='w-full'>
      {/* Added min-h-[180px] just for mobile to give images vertical breathing room */}
      <div className='relative max-w-7xl mx-auto flex items-center justify-center min-h-[180px] md:min-h-[auto]'>
        
        <h1 className='text font-impasse text-[22vw] font-black select-none text-white tracking-wide'>
          WORK
        </h1>
        
        <div className='w-full h-full absolute inset-0'>
          {images.map((img, idx) => (
            img.isActive && (
              <img
                key={idx}
                // Scaled down significantly for mobile (w-12 and w-14) to prevent clustering
                className="w-12 sm:w-20 md:w-32 xl:w-50 absolute rounded-md -translate-x-1/2 -translate-y-1/2 shadow-lg"
                src={img.url}
                style={{ top: img.top, left: img.left }}
                alt="Work Project"
              />
            )
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Work;