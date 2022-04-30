import React from 'react'

const RoadmapItem: React.FC<{ phase: string; steps: string[] }> = ({
  phase,
  steps,
}) => {
  return (
    <div className="relative mb-5 md:mb-0 md:w-1/4">
      <div className="rounded-tr-md rounded-br-md border-l-4 border-l-[#FF0066] bg-white p-6 pb-14 h-[250px] shadow-md">
        {/* <h6 className="mb-0 text-lg font-semibold text-[#FF0066]">Phase 1</h6> */}
        <ul>
          {steps.map((step, index) => (
            <li className='list-disc' key={index}>{step}</li>
          ))}
        </ul>
      </div>
      <div className="hidden border-l-4 border-dashed border-white py-10 md:block"></div>
      <div className="relative left-[-20px] hidden h-[50px] w-[50px] rounded-full bg-[#FF0066] p-1 md:block">
        <div className="flex h-full w-full items-center justify-center rounded-full border-4">
          <p className="text-xl font-semibold text-white">{phase}</p>
        </div>
      </div>
    </div>
  )
}

export default RoadmapItem
