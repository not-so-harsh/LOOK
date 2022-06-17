import React, { useState } from 'react'
import "./Slider.css"

const Slider = () => {
  const [selected, setSelected] = useState(0);
  const onChange = (type) => {
    if (type == 'next') {
      setSelected(value => (value + 1) % 3) // 0 -> 1 1 -> 2 2->0
    } else {
      console.log(((3 - selected) % 3))
      setSelected(value => (value + 2) % 3)// 0-> 1 1->0 2-> 1=0
    }
  }
  return (
    <div className='cc'>
      <div className='p-32 '>
        <div className="flex flex-col mb-12 ">
          <div className="text-base font-semibold pb-16"> 👀 Did you know ?</div>
          <div className=  {`mb-12 ${selected == 0 ? '' : 'hidden'}`} >
           <div className='space-x-2.5'>
           <div class="flex transition-transform">
              <div class="flex-3">
                <div class="text-5xl font-semibold tracking-tight ">Trading fees are 20% lower than OpenSea.</div>
              </div>
              <div class="flex-2">
                <div class="flex flex-col max-w-sm ">
                  <div class="text-base pb-8 ">...and when you get rewards for trading with LooksRare, why would you trade anywhere else?</div>
                </div>
              </div>
            </div>
           </div>
          </div>
          <div className={`mb-12 ${selected == 1 ? '' : 'hidden'}`}>
            <div class="flex transition-transform ">
              <div class="flex-3">
                <div class="text-5xl font-semibold tracking-tight">You can list NFTs here, and elsewhere... at the same time.</div>
              </div>
              <div class="flex-2">
                <div class="flex flex-col max-w-sm ">
                  <div class="text-base pb-8 ">...and when you get rewards for trading with LooksRare, why would you trade anywhere else?</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`mb-12 ${selected == 2 ? '' : 'hidden'}`}>
            <div class="flex transition-transform">
              <div class="flex-3">
                <div class="text-5xl font-semibold tracking-tight">Trading fees are 40% lower than OpenSea.</div>
              </div>
              <div class="flex-2">
                <div class="flex flex-col max-w-sm   ">
                  <div class="text-base pb-8 ">...and when you get rewards for trading with LooksRare, why would you trade anywhere else?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <hr aria-orientation="horizontal" class="opacity-100 w-full border-solid border-1 border-black" />
          <div className="flex justify-end">
            <button type="button" onClick={() => onChange('prev')} class="inline-flex items-center justify-center relative whitespace-nowrap align-middle outline-offset-2 text-sm w-auto font-semibold bg-black px-4 text-white mr-0.5 h-12 w-12" aria-label="move to previous">
              <svg viewBox="0 0 32 32" focusable="false" class="h-6 w-6 inline-block align-middle leading-4" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 26L14.41 24.59L6.83 17H29V15H6.83L14.41 7.41L13 6L3 16L13 26Z" fill="currentColor"></path>
              </svg>
            </button>
            <button type="button" onClick={() => onChange('next')} class="inline-flex items-center justify-center relative whitespace-nowrap align-middle outline-offset-2 text-sm w-auto font-semibold bg-black px-4 text-white mr-0.5 h-12 w-12" aria-label="move to next">
              <svg viewBox="0 0 32 32" focusable="false" class="h-6 w-6 inline-block align-middle leading-4" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6L16.6 7.4L24.1 15H3V17H24.1L16.6 24.6L18 26L28 16L18 6Z" fill="currentColor"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Slider