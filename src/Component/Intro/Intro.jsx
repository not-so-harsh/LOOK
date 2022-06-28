import React from 'react'
import "./Intro.css"
// import Me from "../../img/Me.png"

const Intro = () => {
  return (
    <div className='i py-32 px-32 justify-center'>
      <div className=' grid grid-cols-2 gap-20'>
        <div className='i-left ' >
          <div className="i-lef-wrapper">
            <h1 className='i-intro mb-4 pb-12 '> Trade NFTs,<br></br> Get Rewards</h1>
            <div>
              <h2 className='i-name' >LooksRare is the community-first NFT marketplace with rewards for participating. </h2>
            </div>
            <div className="css-0">
              <span className="css-tdpwhk">Buy NFTs (or sell 'em) to</span>
              <a className="css-1uuf3mk" href="/rewards"> earn rewards.</a>
            </div>
            <div class="css-0">
              <div class="css-1g00jke">Explore the market to get started.</div>
            </div>
            <div class="pt-20">
              <a class="box-border px-4 h-12 w-12 p-4 border-1 bg-green-500 rounded-md text-white font-bold mr-2" href="/accounts/me">List an NFT</a>
              <a class="box-border px-4 h-12 w-12 p-4 border-1 border-solid  rounded-md  font-bold" href="/explore">Explore NFTs</a>
            </div>
          </div>
        </div>
        <div className='i-right w-min-[16rem] align-middle' >
          <div className="h-[21rem] w-[21rem]  relative">
            <img src='https://looksrare.mo.cloudinary.net/0x160C404B2b49CBC3240055CEaEE026df1e8497A0/0xd232bd752a18eada5f2180674a497f9a75b978ab4e3ca1e54e84655e076be71d?resource_type=image&f=auto&c=limit&w=480&q=auto' />
            <div className='absolute  top-2 left-2'>
              <div className='font-semibold '>
                <span className='inline-flex align-top items-center max-w-full font-semibold leading-5 rounded-md bg-gray-200 py-1.5  '>
                  <span className='leading-4 overflow-hidden text-ellipsis whitespace-nowrap'>
                    <div className='flex items-center mr-2'>
                      <svg viewBox="0 0 32 32" focusable="false" className="h-5 w-7 inline-block align-middle leading-4  mr-1">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5001 4H8.50007L1.71606 13.045L16.0001 29.527L30.2841 13.045L23.5001 4ZM27.0002 12H21.5542L17.8042 6H22.5002L27.0002 12ZM10.3021 14L14.0561 24.23L5.19005 14H10.3021ZM12.4321 14H19.5681L15.9991 23.721L12.4321 14ZM12.8049 12L15.9999 6.88699L19.1959 12H12.8049ZM21.698 14H26.81L17.943 24.231L21.698 14ZM9.50003 6H14.196L10.446 12H5.00003L9.50003 6Z" fill="currentColor">
                        </path>
                      </svg>
                      Trending
                    </div>
                  </span>
                </span>
              </div>
            </div>
            <div className='grid grid-cols-2 justify-between items-center mt-4'>
              <div className='flex items-start flex-col whitespace-nowrap '>
                <a href="/collections/0x22c36BfdCef207F9c0CC941936eff94D4246d14A" className='leading-6'>
                  <button type="button" class="inline-flex items-center justify-center relative align-middle outline-offset-2 w-full leading-5 font-semibold text-sm ">
                    <svg viewBox="0 0 32 32" focusable="false" class="w-4 h-4 inline-block text-blue-600 align-middle mr-1 ">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4171 3.24982L16.0007 1.33337L12.5842 3.24982L8.66732 3.29834L6.66684 6.66623L3.29895 8.66671L3.25043 12.5836L1.33398 16L3.25043 19.4165L3.29895 23.3334L6.66684 25.3338L8.66732 28.7017L12.5842 28.7503L16.0007 30.6667L19.4171 28.7503L23.334 28.7017L25.3345 25.3338L28.7024 23.3334L28.7509 19.4165L30.6673 16L28.7509 12.5836L28.7024 8.66671L25.3345 6.66623L23.334 3.29834L19.4171 3.24982ZM9.00065 16.5L14.0007 21.5L23.0007 12.6L21.4007 11L14.0007 18.4L10.6007 15L9.00065 16.5Z" fill="currentColor"></path>
                    </svg>
                    <div class="text-xs font-semibold text-right whitespace-nowrap text-ellipsis overflow-hidden">Bored Ape Chemistry Club</div>
                  </button>
                </a>
                <div class="text-base  font-semibold text-right whitespace-nowrap text-ellipsis overflow-hidden ">Mega Mutant Serum</div>
              </div>
              <div className='flex flex-col'>
                <div class="text-xs font-semibold text-right">Top Offer</div>
                <div class="flex items-center justify-end mt-2">
                  <svg viewBox="0 0 48 96" focusable="false" class="w-3 h-6"><path d="M23.9913 8.91397L23.4668 10.6955V62.3857L23.9913 62.909L47.9848 48.7262L23.9913 8.91397Z" fill="#DF5960"></path><path d="M23.9942 8.91397L0 48.7262L23.9942 62.909V37.82V8.91397Z" fill="#EE9398"></path><path d="M23.9909 67.4524L23.6953 67.8128V86.2252L23.9909 87.0881L47.9985 53.2773L23.9909 67.4524Z" fill="#DF5960"></path><path d="M23.9935 87.0879V67.4522L0 53.2772L23.9935 87.0879Z" fill="#EE9398"></path><path d="M23.9941 62.9063L47.987 48.7239L23.9941 37.818V62.9063Z" fill="#CF373E"></path><path d="M0 48.7242L23.9935 62.9066V37.8183L0 48.7242Z" fill="#DF5960"></path>
                  </svg>
                  <div class="font-semibold text-base">16.4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro