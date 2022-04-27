import React from 'react'

const RoadmapItem = () => {

  return (
    <div className="md:w-1/4 relative mb-5 md:mb-0">
      <div className="rounded-tr-md rounded-br-md border-l-4 border-l-[#FF0066] bg-white p-6 shadow-md pb-14">
        <h6 className="mb-0 text-lg font-semibold text-[#FF0066]">Phase 1</h6>
        <p className="text-sm font-semibold text-black">Title goes here</p>
        <p className='text-sm mt-2 font-light'>
          Mainnet MVP launch available with Pre-Match Betting only across the
          popular soccer leagues - Q2 2022
        </p>
      </div>
      <div className="py-10 border-l-4 border-white border-dashed hidden md:block"></div>
      <div className='w-[50px] h-[50px] bg-[#FF0066] rounded-full p-1 relative left-[-20px] hidden md:block'>
          <div className='w-full h-full rounded-full border-4 flex items-center justify-center'>
              <p className="text-xl font-semibold text-white">1</p>
          </div>
      </div>
    </div>
  )
}

export default RoadmapItem