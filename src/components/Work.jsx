import React from 'react'

const Work = () => {

const images = [
  {
    url: "/src/assets/images/work1.png",
    top: "28%",
    left: "32%",
    isActive: true,
  },
  {
    url: "/src/assets/images/work2.png",
    top: "36%",
    left: "68%",
    isActive: true,
  },
  {
    url: "/src/assets/images/work3.png",
    top: "52%",
    left: "24%",
    isActive: true,
  },
  {
    url: "/src/assets/images/work4.png",
    top: "58%",
    left: "74%",
    isActive: true,
  },
  {
    url: "/src/assets/images/work5.png",
    top: "72%",
    left: "40%",
    isActive: true,
  },
  {
    url: "/src/assets/images/work6.png",
    top: "70%",
    left: "62%",
    isActive: true,
  },
  {
    url: "/src/assets/images/work7.png",
    top: "22%",
    left: "50%",
    isActive: true,
  },
  {
    url: "/src/assets/images/work8.png",
    top: "45%",
    left: "82%",
    isActive: true,
  },
  // {
  //   url: "/src/assets/images/work9.png",
  //   top: "80%",
  //   left: "24%",
  //   isActive: true,
  // },
  // {
  //   url: "/src/assets/images/work10.png",
  //   top: "82%",
  //   left: "72%",
  //   isActive: true,
  // },
];

  return (
    <div className='w-full'>

      <div className='relative max-w-7xl mx-auto flex items-center justify-center'>
        <h1 className='text font-impasse text-[22vw] font-black select-none'>WORK</h1>
        <div className='w-full h-full absolute'>{images.map((img, idx) => (img.isActive && ( <img
              className="w-50 absolute rounded-b-lg -translate-x-1/2 -translate-y-1/2 rounded-md"
              src={img.url}
              style={{ top: img.top, left: img.left }}
              alt=""
            />)))}</div>
      </div>

    </div>
  )
}

export default Work