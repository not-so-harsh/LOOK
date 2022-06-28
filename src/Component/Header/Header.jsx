
import React, { useState, useEffect, useContext } from 'react'
import Modal from 'react-modal'
import { ThemeContext } from '../../Context'
import './Header.css'
Modal.setAppElement('#root')
const Header = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(false)
  const [modalIsOpen, setmodalOpen] = useState(false)
  const [isMobile, setMobile] = useState(false)
  const [isDesktop, setDesktop] = useState(false);
  const [isDown, setDown] = useState(false)
  useEffect(() => {
    const updateMedia = () => {
      if (window.outerWidth > 959) {
        setDesktop(true);
        setMobile(false)
      } else if (window.outerWidth <= 767) {
        setMobile(true)
        setDesktop(false)
      } else {
        setDesktop(false)
        setMobile(false)
      }
      console.log('check')
    };
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const theme = useContext(ThemeContext)
  const handleClick = () => {
    theme.dispatch({type: "TOGGLE"})
  }
  return (
    <div>
      <div className="">
        <nav className=" flex items-center justify-between z-5 w-full fixed h-20 ">
          <div className=" w-full flex">
            <div className="head  flex items-center justify-between h-16 w-full ">
              <div className="w-full justify-between flex items-center">
                <div className="ml-8 leading-6 flex  items-center justify-start ">
                  <a aria-label="Home page" href="/ ">
                    {
                      isDesktop ? (<div className= "block  w-32" >
                        <svg viewBox="0 0 1093 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M488.795 47.8158H502.261C501.644 30.4779 485.652 17.5166 463.433 17.5166C441.438 17.5166 424.156 30.3096 424.156 49.6113C424.156 65.0976 435.378 74.2996 453.333 79.4616L467.473 83.5015C479.593 86.8681 490.366 91.1325 490.366 102.579C490.366 115.147 478.246 123.452 462.311 123.452C448.62 123.452 436.5 117.392 435.378 104.374H421.014C422.361 123.227 437.623 136.02 462.311 136.02C488.795 136.02 503.832 121.432 503.832 102.803C503.832 81.2572 483.408 74.2996 471.513 71.1574L459.842 68.0153C451.313 65.7709 437.623 61.2821 437.623 48.938C437.623 37.9405 447.722 29.8607 462.984 29.8607C476.899 29.8607 487.448 36.4817 488.795 47.8158Z" fill="black" > </path>
                          <path d="M322.878 134H336.794V96.7434L351.158 80.5838L391.108 134H407.941L359.686 70.933L407.941 19.0877H389.761L338.14 76.0951H336.794V19.0877H322.878V134Z" fill="black"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M131.516 18.5166C160.917 18.5166 182.239 41.1849 182.239 77.5439C182.239 113.903 160.917 136.571 131.516 136.571C102.114 136.571 80.7925 113.903 80.7925 77.5439C80.7925 41.1849 102.114 18.5166 131.516 18.5166ZM131.516 123.554C152.388 123.554 168.772 107.394 168.772 77.5439C168.772 47.6936 152.388 31.534 131.516 31.534C110.643 31.534 94.2588 47.6936 94.2588 77.5439C94.2588 107.394 110.643 123.554 131.516 123.554Z" fill="black"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M251.871 18.5166C281.272 18.5166 302.594 41.1849 302.594 77.5439C302.594 113.903 281.272 136.571 251.871 136.571C222.469 136.571 201.148 113.903 201.148 77.5439C201.148 41.1849 222.469 18.5166 251.871 18.5166ZM251.871 123.554C272.744 123.554 289.128 107.394 289.128 77.5439C289.128 47.6936 272.744 31.534 251.871 31.534C230.998 31.534 214.614 47.6936 214.614 77.5439C214.614 107.394 230.998 123.554 251.871 123.554Z" fill="black"></path>
                          <path d="M68.21 134H0.878418V19.0874H14.7936V121.656H68.21V134Z" fill="black"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M541.923 133.727H528.008V18.8145H566.836C593.768 18.8145 605.888 33.7396 605.888 54.0513C605.888 69.3131 599.043 81.2645 584.398 86.2582L610.377 133.727H594.217L569.978 88.7832C569.024 88.8393 568.07 88.8393 567.06 88.8393H541.923V133.727ZM541.923 31.1586V76.2707H566.611C585.015 76.2707 592.197 67.8543 592.197 54.0513C592.197 40.2483 585.015 31.1586 566.387 31.1586H541.923Z" fill="black"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M645.409 101.183L633.851 133.727H619.262L661.457 18.8145H675.821L718.015 133.727H703.427L691.868 101.183H645.409ZM668.19 36.994L649.786 88.8393H687.492L669.088 36.994H668.19Z" fill="black"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M736.218 133.727H750.133V88.8393H775.271C776.281 88.8393 777.234 88.8393 778.188 88.7832L802.428 133.727H818.587L792.608 86.2582C807.253 81.2645 814.098 69.3131 814.098 54.0513C814.098 33.7396 801.979 18.8145 775.046 18.8145H736.218V133.727ZM750.133 76.2707V31.1586H774.597C793.226 31.1586 800.408 40.2483 800.408 54.0513C800.408 67.8543 793.226 76.2707 774.822 76.2707H750.133Z" fill="black"></path>
                          <path d="M907.506 133.727H837.257V18.8145H906.608V31.1586H851.172V69.9864H903.017V82.3306H851.172V121.383H907.506V133.727Z" fill="black"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M1019 86C1006.3 86 996 75.7077 996 63C996 50.2923 1006.3 40 1019 40C1031.7 40 1042 50.2923 1042 63C1042 75.7077 1031.7 86 1019 86ZM1009 63C1009 68.5251 1013.48 73 1019 73C1024.52 73 1029 68.5251 1029 63C1029 57.4749 1024.52 53 1019 53C1013.48 53 1009 57.4749 1009 63Z" fill="#04CD58"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M945 63.0304L989 19H1049L1093 63.0304L1019 137L945 63.0304ZM1053 46.9998C1034.3 28.2224 1003.7 28.2225 985 46.9999L969 63.0001L985 79.0002C1003.7 97.7776 1034.3 97.7775 1053 79.0001L1069 63.0001L1053 46.9998Z" fill="#04CD58">
                          </path>
                        </svg>
                      </div>
                      ) : (
                        <div className="w-8">
                          <svg viewBox="0 0 148 148" focusable="false" className="h-8 w-8 block align-middle ">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M74 86C61.3026 86 51 75.7077 51 63C51 50.2923 61.3026 40 74 40C86.6974 40 97 50.2923 97 63C97 75.7077 86.6974 86 74 86ZM64 63C64 68.5251 68.4794 73 74 73C79.5206 73 84 68.5251 84 63C84 57.4749 79.5206 53 74 53C68.4794 53 64 57.4749 64 63Z" fill="#04CD58"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 63.0304L44 19H104L148 63.0304L74 137L0 63.0304ZM108 46.9998C89.3047 28.2224 58.6953 28.2225 40 46.9999L24 63.0001L40 79.0002C58.6953 97.7776 89.3047 97.7775 108 79.0001L124 63.0001L108 46.9998Z" fill="#04CD58">
                            </path>
                          </svg>
                        </div>
                      )
                    }
                  </a>
                </div>
                {
                  (!isMobile) ? (
                    <div className='flex w-full'>
                      <div className="flex items-center ml-4 w-full">
                        <div className="mx-4 grow" >
                          <button type="button" onClick={() => { setmodalOpen(value => !value) }} className="inline-flex items-center relative align-middle outline-offset-2 px-4 w-full font-semibold  rounded-3xl leading-5 bg-gray-200 hover:bg-gray-300 h-12 min-w-48 max-w-lg text-sm" >
                            <div className="flex items-start w-full">
                              <svg viewBox="0 0 24 24" focusable="false" className="h-6 w-6 inline-block align-middle leading-5 mr-3 text-gray-400 ">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 10.5C18.7508 12.4206 18.0735 14.2799 16.8375 15.75L22.5 21.4425L21.4425 22.5L15.75 16.8375C14.2799 18.0735 12.4206 18.7508 10.5 18.75C5.94365 18.75 2.25 15.0563 2.25 10.5C2.25 5.94365 5.94365 2.25 10.5 2.25C15.0563 2.25 18.75 5.94365 18.75 10.5ZM3.75 10.5C3.75 14.2279 6.77208 17.25 10.5 17.25C14.2279 17.25 17.25 14.2279 17.25 10.5C17.25 6.77208 14.2279 3.75 10.5 3.75C6.77208 3.75 3.75 6.77208 3.75 10.5Z" fill="currentColor">
                                </path>
                              </svg>
                              <div className="text-base text-gray-400  ">Search</div>
                            </div>
                          </button>
                          <div className=''>
                            <Modal className='h-[10rem] w-[48rem] opacity-100 bg-white z-50 absolute top-0 left-1/4 rounded  border-2' isOpen={modalIsOpen} onRequestClose={() => { setmodalOpen(false) }}>
                              <div className='h-[48rem] w-[48rem]'>
                                <div class="flex pl-4 pt-3 pb-3">
                                  <div class="flex flex-1">
                                    <div class="w-full flex relative">
                                      <div class="h-12 w-12 text-base flex items-center justify-center absolute z-90">
                                        <svg viewBox="0 0 24 24" focusable="false" class="h-6 w-6 align-middle inline-block ">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 10.5C18.7508 12.4206 18.0735 14.2799 16.8375 15.75L22.5 21.4425L21.4425 22.5L15.75 16.8375C14.2799 18.0735 12.4206 18.7508 10.5 18.75C5.94365 18.75 2.25 15.0563 2.25 10.5C2.25 5.94365 5.94365 2.25 10.5 2.25C15.0563 2.25 18.75 5.94365 18.75 10.5ZM3.75 10.5C3.75 14.2279 6.77208 17.25 10.5 17.25C14.2279 17.25 17.25 14.2279 17.25 10.5C17.25 6.77208 14.2279 3.75 10.5 3.75C6.77208 3.75 3.75 6.77208 3.75 10.5Z" fill="currentColor"></path>
                                        </svg>
                                      </div>
                                      <input type="input" placeholder="Collections, Items, Profiles" data-id="search-input-algolia-search"  class="w-full text-base px-12 h-12 bg-[#DDE1E6]  " value=""></input>
                                    </div>
                                    <div>
                                      <button onClick={() => { setmodalOpen(false) }} className="inline-flex items-center justify-center relative w-auto font-semibold rounded h-12 w-min-12 text-sm px-4 ">Cancle</button>
                                    </div>
                                  </div>
                                </div>
                                <div class="flex-1 overflow-auto " id="chakra-modal--body-3">
                                  <div class="flex flex-col">
                                    <div class="py-6 px-4 ">Start typing...</div>
                                  </div>
                                </div>
                              </div>
                            </Modal>
                          </div>
                        </div>
                        <div className="flex">
                          <a className="outline-offset-2 items-center  flex px-4 h-12 font-semibold whitespace-nowrap leading-5  hover:bg-gray-100 " data-test-id="nav-links-explore" href="/explore">Explore</a>
                          <a className="outline-offset-2 items-center  flex px-4 h-12 font-semibold whitespace-nowrap leading-5  hover:bg-gray-100 " data-test-id="nav-links-collections" href="/collections">Collections</a>
                          <a className="coutline-offset-2 items-center flex px-4 h-12 font-semibold whitespace-nowrap leading-5  hover:bg-gray-100" data-test-id="nav-links-rewards" id="menu-button-8" aria-expanded="false" aria-haspopup="menu" aria-controls="menu-list-8">
                            <span className="flex-auto">
                              <span className="chakra-text css-1h4sxr7">Rewards</span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex flex-row">
                          <div className="css-0">
                            <button type="button" onClick={handleClick} className=" items-center relative whitespace-nowrap leading-4 font-semibold w-auto h-12 min-w-48 px-4 align-middle  hover:bg-gray-300 inline-block rounded" aria-label="Color mode switcher" data-test-id="color-mode-button">
                              <svg viewBox="0 0 24 24" focusable="false" className="w-6 h-6  align-middle" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 1.5H12.75V5.22H11.25V1.5ZM16.2651 6.66751L18.8954 4.03801L19.9559 5.09851L17.3256 7.72876L16.2651 6.66751ZM18.7802 11.25H22.5002V12.75H18.7802V11.25ZM16.2697 17.328L17.3302 16.2675L19.9604 18.8978L18.8999 19.9575L16.2697 17.328ZM11.25 18.78H12.75V22.5H11.25V18.78ZM4.04688 18.9015L6.67788 16.2712L7.73838 17.3317L5.10813 19.962L4.04688 18.9015ZM1.5 11.25H5.22V12.75H1.5V11.25ZM4.04234 5.10226L5.10359 4.04176L7.73384 6.67201L6.67334 7.73251L4.04234 5.10226ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5Z" fill="currentColor"></path>
                              </svg>
                            </button>
                          </div>
                          <div className="block">
                            <button type="button" className=" items-center justify-center relative whitespace-nowrap align-middle w-auto outline-offset-2 leading-5 h-12 min-w-48 font-semibold  hover:bg-gray-300 inline-block rounded text-sm px-4 " aria-expanded="false" aria-haspopup="menu" aria-controls="menu-list-12">
                              <span className=" flex-auto ">
                                <div className="flex items-center">
                                  <svg viewBox="0 0 32 32" focusable="false" className="h-6 w-6 mr-1  align-middle inline-block">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 12.287 28.525 8.72601 25.8995 6.1005C23.274 3.475 19.713 2 16 2ZM28 15H22C21.8833 11.3171 20.9291 7.70915 19.21 4.45C24.0614 5.77705 27.5705 9.98873 28 15ZM16 28C15.7769 28.015 15.5531 28.015 15.33 28C13.2583 24.6962 12.1085 20.8981 12 17H20C19.9005 20.8953 18.7612 24.6932 16.7 28C16.467 28.0164 16.233 28.0164 16 28ZM12 15C12.0995 11.1047 13.2388 7.30683 15.3 4.00001C15.7453 3.94997 16.1947 3.94997 16.64 4.00001C18.7223 7.3008 19.8825 11.0991 20 15H12ZM12.76 4.45C11.0513 7.71164 10.1075 11.3194 10 15H4C4.42952 9.98873 7.93859 5.77705 12.79 4.45H12.76ZM4.04967 17H10.0497C10.154 20.6798 11.0944 24.2875 12.7997 27.55C7.96399 26.2088 4.4735 22.0003 4.04967 17ZM19.21 27.55C20.9291 24.2908 21.8833 20.6829 22 17H28C27.5705 22.0113 24.0614 26.2229 19.21 27.55Z" fill="currentColor"></path>
                                  </svg></div>
                              </span>
                            </button>
                          </div>
                          {
                            isDesktop ? (
                              <div className="block mx-4">
                                <button type="button" className=" inline-flex items-center justify-center relative align-middle w-auto whitespace-nowrap outline-offset-2 font-semibold bg-green-500 hover:bg-green-600 h-12 min-w-48 text-white rounded-3xl p-4 text-sm ">Connect</button>
                              </div>
                            ) : (
                              <button type="button" className=" mr-4 inline-flex items-center justify-center rounded-full px-4 min-w-48 relative align-middle w-auto whitespace-nowrap outline-offset-2 text-white font-semibold bg-green-500 hover:bg-green-600 h-12" aria-label="connect wallet" data-id="connect-wallet-button-icon-button" title="Connect Wallet">
                                <svg viewBox="0 0 24 24" focusable="false" className="h-6 w-6 inline-block align-middle" aria-hidden="true">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 12.75H18V14.25H16.5V12.75ZM21 6H3V3.75H19.5V2.25H3C2.17157 2.25 1.5 2.92157 1.5 3.75V19.5C1.5 20.3284 2.17157 21 3 21H21C21.8284 21 22.5 20.3284 22.5 19.5V7.5C22.5 6.67157 21.8284 6 21 6ZM3 19.5V7.5H21V9.75H15C14.1716 9.75 13.5 10.4216 13.5 11.25V15.75C13.5 16.5784 14.1716 17.25 15 17.25H21V19.5H3ZM21 15.75V11.25H15V15.75H21Z" fill="currentColor"></path>
                                </svg>
                              </button>
                            )
                          }
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className='flex'>
                      <div className="css-0 mr-2">
                        <button type="button" onClick={handleClick}  className=" items-center relative whitespace-nowrap leading-4 font-semibold w-auto h-12 min-w-48 px-4 align-middle bg-white hover:bg-gray-300 inline-block rounded-full" aria-label="Color mode switcher" data-test-id="color-mode-button">
                          <svg viewBox="0 0 24 24" focusable="false" className="w-6 h-6 align-middle" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 1.5H12.75V5.22H11.25V1.5ZM16.2651 6.66751L18.8954 4.03801L19.9559 5.09851L17.3256 7.72876L16.2651 6.66751ZM18.7802 11.25H22.5002V12.75H18.7802V11.25ZM16.2697 17.328L17.3302 16.2675L19.9604 18.8978L18.8999 19.9575L16.2697 17.328ZM11.25 18.78H12.75V22.5H11.25V18.78ZM4.04688 18.9015L6.67788 16.2712L7.73838 17.3317L5.10813 19.962L4.04688 18.9015ZM1.5 11.25H5.22V12.75H1.5V11.25ZM4.04234 5.10226L5.10359 4.04176L7.73384 6.67201L6.67334 7.73251L4.04234 5.10226ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5Z" fill="currentColor"></path>
                          </svg>
                        </button>
                      </div>
                      <button type="button" onClick={() => { setmodalOpen(value => !value) }} class="inline-flex object-left min-w-48 mr-4 h-12 items-center justify-center rounded-full px-4 w-auto whitespace-nowrap align-middle outline-offset-2 font-semibold bg-[#DDE1E6] " aria-label="search" data-id="search-button-mobile-search">
                        <svg viewBox="0 0 24 24" focusable="false" class="h-6 w-6 inline-block align-middle" aria-hidden="true">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 10.5C18.7508 12.4206 18.0735 14.2799 16.8375 15.75L22.5 21.4425L21.4425 22.5L15.75 16.8375C14.2799 18.0735 12.4206 18.7508 10.5 18.75C5.94365 18.75 2.25 15.0563 2.25 10.5C2.25 5.94365 5.94365 2.25 10.5 2.25C15.0563 2.25 18.75 5.94365 18.75 10.5ZM3.75 10.5C3.75 14.2279 6.77208 17.25 10.5 17.25C14.2279 17.25 17.25 14.2279 17.25 10.5C17.25 6.77208 14.2279 3.75 10.5 3.75C6.77208 3.75 3.75 6.77208 3.75 10.5Z" fill="currentColor"></path>
                        </svg>
                        <div className=''>
                          <Modal className= "h-[10rem] w-[48rem] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white rounded text-blue-40 border-2 " isOpen={modalIsOpen} onRequestClose={() => { setmodalOpen(false) }}>
                            <div className='h-[48rem] w-[48rem]'>
                              <div class="flex pl-4 pt-3 pb-3">
                                <div class="flex flex-1">
                                  <div class="w-full flex relative">
                                    <div class="h-12 w-12 text-base flex items-center justify-center absolute z-20">
                                      <svg viewBox="0 0 24 24" focusable="false" class="h-6 w-6 align-middle inline-block ">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 10.5C18.7508 12.4206 18.0735 14.2799 16.8375 15.75L22.5 21.4425L21.4425 22.5L15.75 16.8375C14.2799 18.0735 12.4206 18.7508 10.5 18.75C5.94365 18.75 2.25 15.0563 2.25 10.5C2.25 5.94365 5.94365 2.25 10.5 2.25C15.0563 2.25 18.75 5.94365 18.75 10.5ZM3.75 10.5C3.75 14.2279 6.77208 17.25 10.5 17.25C14.2279 17.25 17.25 14.2279 17.25 10.5C17.25 6.77208 14.2279 3.75 10.5 3.75C6.77208 3.75 3.75 6.77208 3.75 10.5Z" fill="currentColor"></path>
                                      </svg>
                                    </div>
                                    <input placeholder="Collections, Items, Profiles" data-id="search-input-algolia-search" type="search" class="w-full text-base px-12 h-12 bg-[#DDE1E6]  " value=""></input>
                                  </div>
                                  <div>
                                    <button onClick={() => { setmodalOpen(true) }} className="inline-flex items-center justify-center relative w-auto font-semibold rounded h-12 w-min-12 text-sm px-4 ">Cancle</button>
                                  </div>
                                </div>
                              </div>
                              <div class="flex-1 overflow-auto " id="chakra-modal--body-3">
                                <div class="flex flex-col">
                                  <div class="py-6 px-4 ">Start typing...</div>
                                </div>
                              </div>
                            </div>
                          </Modal>
                        </div>
                      </button>
                      <button type="button" className=" mr-4 inline-flex items-center justify-center rounded-full px-4 min-w-48 relative align-middle w-auto whitespace-nowrap outline-offset-2 text-white font-semibold bg-green-500 hover:bg-green-600 h-12" aria-label="connect wallet" data-id="connect-wallet-button-icon-button" title="Connect Wallet">
                        <svg viewBox="0 0 24 24" focusable="false" className="h-6 w-6 inline-block align-middle" aria-hidden="true">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 12.75H18V14.25H16.5V12.75ZM21 6H3V3.75H19.5V2.25H3C2.17157 2.25 1.5 2.92157 1.5 3.75V19.5C1.5 20.3284 2.17157 21 3 21H21C21.8284 21 22.5 20.3284 22.5 19.5V7.5C22.5 6.67157 21.8284 6 21 6ZM3 19.5V7.5H21V9.75H15C14.1716 9.75 13.5 10.4216 13.5 11.25V15.75C13.5 16.5784 14.1716 17.25 15 17.25H21V19.5H3ZM21 15.75V11.25H15V15.75H21Z" fill="currentColor"></path>
                        </svg>
                      </button>
                      <button type="button" onClick={() => { setSidebarOpen(value => !value) }} className="inline-flex mr-4 object-left min-w-48 h-12 items-center justify-center rounded-full px-4 w-auto whitespace-nowrap align-middle outline-offset-2 font-semibold bg-[#DDE1E6] " aria-label="Mobile menu">
                        <svg viewBox="0 0 32 32" focusable="false" className="h-6 w-6 inline-block align-middle" aria-hidden="true">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 24H28V26H4V24ZM4 12H28V14H4V12ZM4 18H28V20H4V18ZM4 6H28V8H4V6Z" fill="currentColor"></path>
                        </svg>
                      </button>
                      <div className= ''>
                        <Modal className= {`absolute z-1100 w-6/12 right-0 py-4 px-3 h-full bg-white rounded  z-99 ease-in-out duration-300 ${sidebarIsOpen ? "translate-x-0" : 'translate-x-full'} ease-in-out duration-900`} isOpen={sidebarIsOpen} onRequestClose={() => { setSidebarOpen(false) }}>
                          <div>
                            <div className= "z-50 " aria-label="Sidebar">
                              <div className="">
                                <ul className="space-y-2 z-50">
                                  <li>
                                    <div className='flex justify items-center justify-between pr-4 '>
                                      <a href="#" className="flex   text-xl  p-4 font-semibold text-gray-900  hover:bg-gray-100 ">
                                        <div className="block  h-10 w-32 ">
                                          <svg viewBox="0 0 1093 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M488.795 47.8158H502.261C501.644 30.4779 485.652 17.5166 463.433 17.5166C441.438 17.5166 424.156 30.3096 424.156 49.6113C424.156 65.0976 435.378 74.2996 453.333 79.4616L467.473 83.5015C479.593 86.8681 490.366 91.1325 490.366 102.579C490.366 115.147 478.246 123.452 462.311 123.452C448.62 123.452 436.5 117.392 435.378 104.374H421.014C422.361 123.227 437.623 136.02 462.311 136.02C488.795 136.02 503.832 121.432 503.832 102.803C503.832 81.2572 483.408 74.2996 471.513 71.1574L459.842 68.0153C451.313 65.7709 437.623 61.2821 437.623 48.938C437.623 37.9405 447.722 29.8607 462.984 29.8607C476.899 29.8607 487.448 36.4817 488.795 47.8158Z" fill="black"></path>
                                            <path d="M322.878 134H336.794V96.7434L351.158 80.5838L391.108 134H407.941L359.686 70.933L407.941 19.0877H389.761L338.14 76.0951H336.794V19.0877H322.878V134Z" fill="black"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M131.516 18.5166C160.917 18.5166 182.239 41.1849 182.239 77.5439C182.239 113.903 160.917 136.571 131.516 136.571C102.114 136.571 80.7925 113.903 80.7925 77.5439C80.7925 41.1849 102.114 18.5166 131.516 18.5166ZM131.516 123.554C152.388 123.554 168.772 107.394 168.772 77.5439C168.772 47.6936 152.388 31.534 131.516 31.534C110.643 31.534 94.2588 47.6936 94.2588 77.5439C94.2588 107.394 110.643 123.554 131.516 123.554Z" fill="black"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M251.871 18.5166C281.272 18.5166 302.594 41.1849 302.594 77.5439C302.594 113.903 281.272 136.571 251.871 136.571C222.469 136.571 201.148 113.903 201.148 77.5439C201.148 41.1849 222.469 18.5166 251.871 18.5166ZM251.871 123.554C272.744 123.554 289.128 107.394 289.128 77.5439C289.128 47.6936 272.744 31.534 251.871 31.534C230.998 31.534 214.614 47.6936 214.614 77.5439C214.614 107.394 230.998 123.554 251.871 123.554Z" fill="black"></path>
                                            <path d="M68.21 134H0.878418V19.0874H14.7936V121.656H68.21V134Z" fill="black"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M541.923 133.727H528.008V18.8145H566.836C593.768 18.8145 605.888 33.7396 605.888 54.0513C605.888 69.3131 599.043 81.2645 584.398 86.2582L610.377 133.727H594.217L569.978 88.7832C569.024 88.8393 568.07 88.8393 567.06 88.8393H541.923V133.727ZM541.923 31.1586V76.2707H566.611C585.015 76.2707 592.197 67.8543 592.197 54.0513C592.197 40.2483 585.015 31.1586 566.387 31.1586H541.923Z" fill="black"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M645.409 101.183L633.851 133.727H619.262L661.457 18.8145H675.821L718.015 133.727H703.427L691.868 101.183H645.409ZM668.19 36.994L649.786 88.8393H687.492L669.088 36.994H668.19Z" fill="black"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M736.218 133.727H750.133V88.8393H775.271C776.281 88.8393 777.234 88.8393 778.188 88.7832L802.428 133.727H818.587L792.608 86.2582C807.253 81.2645 814.098 69.3131 814.098 54.0513C814.098 33.7396 801.979 18.8145 775.046 18.8145H736.218V133.727ZM750.133 76.2707V31.1586H774.597C793.226 31.1586 800.408 40.2483 800.408 54.0513C800.408 67.8543 793.226 76.2707 774.822 76.2707H750.133Z" fill="black"></path>
                                            <path d="M907.506 133.727H837.257V18.8145H906.608V31.1586H851.172V69.9864H903.017V82.3306H851.172V121.383H907.506V133.727Z" fill="black"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1019 86C1006.3 86 996 75.7077 996 63C996 50.2923 1006.3 40 1019 40C1031.7 40 1042 50.2923 1042 63C1042 75.7077 1031.7 86 1019 86ZM1009 63C1009 68.5251 1013.48 73 1019 73C1024.52 73 1029 68.5251 1029 63C1029 57.4749 1024.52 53 1019 53C1013.48 53 1009 57.4749 1009 63Z" fill="#04CD58"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M945 63.0304L989 19H1049L1093 63.0304L1019 137L945 63.0304ZM1053 46.9998C1034.3 28.2224 1003.7 28.2225 985 46.9999L969 63.0001L985 79.0002C1003.7 97.7776 1034.3 97.7775 1053 79.0001L1069 63.0001L1053 46.9998Z" fill="#04CD58">
                                            </path>
                                          </svg>
                                        </div>
                                      </a>
                                      <button onClick={() => { setSidebarOpen(!sidebarIsOpen) }} >close</button>
                                    </div>
                                  </li>
                                  <li>
                                    <button type="button" onClick={() => { setDown(value => !value) }} className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                      <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                                      <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>E-commerce</span>
                                      <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                    {isDown &&
                                      <ul id="dropdown-example" className=" py-2 space-y-2">
                                        <li>
                                          <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                                        </li>
                                        <li>
                                          <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                                        </li>
                                        <li>
                                          <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                                        </li>
                                      </ul>
                                    }
                                  </li>
                                  <li>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                      <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                      <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                                      <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                      <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                      <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                                      <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                      <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                      <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                      <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                                      <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                      <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                                      <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                      <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                                      <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </div>)
                }
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header