import React, { useEffect, useState } from 'react'
import "./Banner.css"
const Banner = () => {
  const [isHide, setHide] = useState(true);
  useEffect(() => {
    const updateMedia = () => {
      if (window.outerWidth > 767) {
        setHide(false)
      } else {
        setHide(true)
      };
    };
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);
  const [showModel, setShowModel] = useState(true);
  function close() {
    setShowModel(false)
  }
  return (
    <div className='pt-20'>
      {
        showModel &&
        <div className='ii py-4 relative leading-6'>
          <div className="max-w-7xl mx-auto ">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center sm:px-8 ">
               {
                 !isHide &&(
                  <span className="flex  rounded-lg">
                  <svg viewBox="0 0 48 48" focusable="false" class="h-16 w-16 text-white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0007 1.5L43.4863 12.75V35.25L24.0007 46.5L4.51514 35.25V12.75L24.0007 1.5ZM34.8813 18.8386L40.0721 24L34.8813 29.1614C28.8721 35.1367 19.1293 35.1367 13.1201 29.1614L7.92928 24L13.1201 18.8386C19.1293 12.8633 28.8721 12.8633 34.8813 18.8386ZM24.0007 31.3932C19.9194 31.3932 16.6078 28.0849 16.6078 24.0003C16.6078 19.9157 19.9194 16.6075 24.0007 16.6075C28.082 16.6075 31.3935 19.9157 31.3935 24.0003C31.3935 28.0849 28.0819 31.3932 24.0007 31.3932ZM23.9997 27.2144C22.2252 27.2144 20.7854 25.776 20.7854 24.0001C20.7854 22.2242 22.2252 20.7858 23.9997 20.7858C25.7742 20.7858 27.214 22.2242 27.214 24.0001C27.214 25.776 25.7742 27.2144 23.9997 27.2144Z" fill="currentColor"></path>
                  </svg>
                </span>
                 )
               }
               
                <div className="ml-3 font-semibold text-white truncate">
                  <p className='font-semibold mb-2 text-sm' >Introducing Listing Rewards</p>
                  <p className="font-semibold mb-2  text-2xl"> Earn LOOKS just by listing your NFTs! </p>
                </div>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-auto sm:w-auto">
                <a href="#" className="flex items-center justify-center sm:w-auto p-4 border border-transparent rounded-md text-sm font-semibold text-black bg-gray-200 hover:bg-indigo-50"> Learn more </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button type="button" onClick={close} className="flex p-2  hover:bg-indigo-500 outline-none leading-4 mr-2">
                  <span className="sr-only">Dismiss</span>
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Banner