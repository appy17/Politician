import React from 'react'

function Section() {
  return (
    <div>
      <div className="bg-gray-50 px-4 py-10 font-[sans-serif]">
      <div className="max-w-7xl max-md:max-w-lg mx-auto">
        <h2 className="text-3xl font-extrabold text-[#333]">LATEST BLOGS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white cursor-pointer rounded overflow-hidden group">
            <div className="relative overflow-hidden">
              <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
              <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">June 10, 2023</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#333]">A Guide to Igniting Your Imagination</h3>
              <button type="button" className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Read More</button>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded overflow-hidden group">
            <div className="relative overflow-hidden">
              <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
              <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">April 20, 2023</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#333]">Hacks to Supercharge Your Day</h3>
              <button type="button" className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Read More</button>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded overflow-hidden group">
            <div className="relative overflow-hidden">
              <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
              <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">August 16, 2023</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#333]">Trends and Predictions</h3>
              <button type="button" className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Section
