import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="pt-24  justify-end flex flex-col">
        <div className="flex flex-wrap p-8  items-center">
          <span className="font-normal text-base">Copyright 2022 LooksRare</span>
          <span className="font-semibold text-base text-green-300 mx-2">|</span>
          <span className="font-normal text-base">By NFT people, for NFT people</span>
        </div>
        <div className=" flex justify-between px-8" >
          <div className=" mr-10   items-center">
            <a target="_blank" rel="noopener" className="font-bold  text-green-600 mr-6 mb-6 " href="https://docs.looksrare.org">About</a>
            <a target="_blank" rel="noopener" className="font-bold  text-green-600 mr-6 mb-6 " href="https://docs.looksrare.org/developers/public-api-documentation">API</a>
            <a target="_blank" rel="noopener" className="font-bold  text-green-600 mr-6 mb-6  " href="https://discord.gg/looksrare">Contact</a>
            <a target="_blank" rel="noopener" className="font-bold  text-green-600 mr-6 mb-6 " href="https://docs.looksrare.org">Help</a>
            <a target="_blank" rel="noopener" className="font-bold  text-green-600 mr-6 mb-6 " href="https://docs.looksrare.org/about/category/hiring">Jobs</a>
            <a target="_blank" rel="noopener" className="font-bold  text-green-600 mr-6 mb-6 " href="https://www.immunefi.com/bounty/looksrare">Bug Bounty</a>
            <a target="_blank" rel="noopener" className="font-bold  text-green-600 mr-6 mb-6" href="https://docs.looksrare.org/about/brand-logos-usage">Brand</a>
            <a target="_blank" rel="noopener" className="font-bold  text-green-600 mr-6 mb-6 " href="https://docs.looksrare.org/about/terms-of-service">Terms of Service</a>
          </div>
          <div className=" flex  ">
            <div className="flex align-middle ">
              <a target="_blank" rel="noopener" className="mr-6" href="https://discord.gg/looksrare" title="Discord">
                <svg viewBox="0 0 32 32" focusable="false" className="w-6 h-6 inline-block align-middle shrink-0  leading-4">
                  <path d="M25.2405 6.65646C23.5408 5.87659 21.7182 5.30202 19.8126 4.97294C19.7779 4.96659 19.7432 4.98246 19.7253 5.0142C19.4909 5.43111 19.2313 5.975 19.0495 6.40249C16.9998 6.09563 14.9607 6.09563 12.953 6.40249C12.7712 5.96549 12.5021 5.43111 12.2667 5.0142C12.2488 4.98352 12.2141 4.96765 12.1794 4.97294C10.2748 5.30097 8.45219 5.87554 6.7515 6.65646C6.73678 6.66281 6.72416 6.6734 6.71578 6.68715C3.25867 11.852 2.31163 16.8899 2.77622 21.8653C2.77832 21.8897 2.79198 21.913 2.8109 21.9277C5.0918 23.6028 7.30125 24.6197 9.46966 25.2937C9.50436 25.3043 9.54113 25.2916 9.56322 25.263C10.0762 24.5626 10.5334 23.824 10.9254 23.0473C10.9486 23.0018 10.9265 22.9478 10.8792 22.9298C10.1539 22.6547 9.46335 22.3193 8.79905 21.9383C8.7465 21.9077 8.7423 21.8325 8.79064 21.7965C8.93043 21.6918 9.07026 21.5828 9.20374 21.4727C9.22789 21.4526 9.26155 21.4484 9.28994 21.4611C13.6541 23.4536 18.3788 23.4536 22.6915 21.4611C22.7199 21.4473 22.7536 21.4516 22.7788 21.4717C22.9123 21.5817 23.0521 21.6918 23.1929 21.7965C23.2413 21.8325 23.2381 21.9077 23.1856 21.9383C22.5213 22.3267 21.8307 22.6547 21.1044 22.9288C21.0571 22.9468 21.036 23.0018 21.0592 23.0473C21.4596 23.8229 21.9169 24.5615 22.4203 25.262C22.4414 25.2916 22.4792 25.3043 22.5139 25.2937C24.6928 24.6197 26.9023 23.6028 29.1832 21.9277C29.2031 21.913 29.2158 21.8907 29.2179 21.8664C29.7739 16.1142 28.2866 11.1176 25.2751 6.6882C25.2678 6.6734 25.2552 6.66281 25.2405 6.65646ZM11.5772 18.8358C10.2632 18.8358 9.18061 17.6295 9.18061 16.1481C9.18061 14.6667 10.2422 13.4604 11.5772 13.4604C12.9225 13.4604 13.9947 14.6773 13.9737 16.1481C13.9737 17.6295 12.912 18.8358 11.5772 18.8358ZM20.438 18.8358C19.1241 18.8358 18.0415 17.6295 18.0415 16.1481C18.0415 14.6667 19.103 13.4604 20.438 13.4604C21.7834 13.4604 22.8555 14.6773 22.8345 16.1481C22.8345 17.6295 21.7834 18.8358 20.438 18.8358Z" fill="currentColor"></path>
                </svg>
              </a>
              <a target="_blank" rel="noopener" className="mr-6" href="https://twitter.com/looksrarenft" title="Twitter">
                <svg viewBox="0 0 32 32" focusable="false" className="w-6 h-6 inline-block align-middle shrink-0  leading-4">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5491 25.7525C15.2712 25.7759 18.8476 24.3077 21.4796 21.6757C24.1115 19.0438 25.5798 15.4673 25.5564 11.7453V11.1016C26.5116 10.4018 27.3383 9.54181 28 8.5598C27.1006 8.95318 26.1488 9.21407 25.1745 9.33435C26.2075 8.71884 26.9826 7.74999 27.3564 6.60708C26.3937 7.18465 25.338 7.59068 24.2364 7.80708C22.7111 6.18187 20.2853 5.7819 18.319 6.83143C16.3527 7.88095 15.335 10.119 15.8364 12.2907C11.8783 12.0964 8.18962 10.2283 5.69091 7.15253C4.39814 9.39629 5.06589 12.2581 7.21818 13.698C6.45303 13.6685 5.70558 13.4592 5.03636 13.0871V13.1416C5.02235 15.4701 6.63569 17.4925 8.90909 17.9962C8.19742 18.1876 7.45196 18.2174 6.72727 18.0834C7.38175 20.0581 9.20747 21.4078 11.2873 21.4543C9.55187 22.8513 7.39501 23.6202 5.16727 23.6362C4.77668 23.6249 4.387 23.5921 4 23.538C6.25486 24.9746 8.8755 25.732 11.5491 25.7198" fill="currentColor">
                  </path>
                </svg>
              </a>
              <a target="_blank" rel="noopener" className="mr-6" href="https://www.instagram.com/looksrarenft" title="Instagram">
                <svg viewBox="0 0 32 32" focusable="false" className="w-6 h-6 inline-block align-middle shrink-0  leading-4">
                  <path d="M16 6.163C19.204 6.163 19.584 6.175 20.85 6.233C24.102 6.381 25.621 7.924 25.769 11.152C25.827 12.417 25.838 12.797 25.838 16.001C25.838 19.206 25.826 19.585 25.769 20.85C25.62 24.075 24.105 25.621 20.85 25.769C19.584 25.827 19.206 25.839 16 25.839C12.796 25.839 12.416 25.827 11.151 25.769C7.891 25.62 6.38 24.07 6.232 20.849C6.174 19.584 6.162 19.205 6.162 16C6.162 12.796 6.175 12.417 6.232 11.151C6.381 7.924 7.896 6.38 11.151 6.232C12.417 6.175 12.796 6.163 16 6.163ZM16 4C12.741 4 12.333 4.014 11.053 4.072C6.695 4.272 4.273 6.69 4.073 11.052C4.014 12.333 4 12.741 4 16C4 19.259 4.014 19.668 4.072 20.948C4.272 25.306 6.69 27.728 11.052 27.928C12.333 27.986 12.741 28 16 28C19.259 28 19.668 27.986 20.948 27.928C25.302 27.728 27.73 25.31 27.927 20.948C27.986 19.668 28 19.259 28 16C28 12.741 27.986 12.333 27.928 11.053C27.732 6.699 25.311 4.273 20.949 4.073C19.668 4.014 19.259 4 16 4V4ZM16 9.838C12.597 9.838 9.838 12.597 9.838 16C9.838 19.403 12.597 22.163 16 22.163C19.403 22.163 22.162 19.404 22.162 16C22.162 12.597 19.403 9.838 16 9.838ZM16 20C13.791 20 12 18.21 12 16C12 13.791 13.791 12 16 12C18.209 12 20 13.791 20 16C20 18.21 18.209 20 16 20ZM22.406 8.155C21.61 8.155 20.965 8.8 20.965 9.595C20.965 10.39 21.61 11.035 22.406 11.035C23.201 11.035 23.845 10.39 23.845 9.595C23.845 8.8 23.201 8.155 22.406 8.155Z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
            <div className="flex align-middle ">
              <button type="button" className="inline-flex relative whitespace-nowrap align-middle w-auto font-semibold h-11 w-11 "  id="menu-button-25" aria-expanded="false" aria-haspopup="menu" aria-controls="menu-list-25">
                <span className="flex-auto min-w-0">
                  <div className="flex ">
                    <svg viewBox="0 0 32 32" focusable="false" className="h-6 w-6 inline-block font-semibold leading-4 align-middle mr-1 ">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 12.287 28.525 8.72601 25.8995 6.1005C23.274 3.475 19.713 2 16 2ZM28 15H22C21.8833 11.3171 20.9291 7.70915 19.21 4.45C24.0614 5.77705 27.5705 9.98873 28 15ZM16 28C15.7769 28.015 15.5531 28.015 15.33 28C13.2583 24.6962 12.1085 20.8981 12 17H20C19.9005 20.8953 18.7612 24.6932 16.7 28C16.467 28.0164 16.233 28.0164 16 28ZM12 15C12.0995 11.1047 13.2388 7.30683 15.3 4.00001C15.7453 3.94997 16.1947 3.94997 16.64 4.00001C18.7223 7.3008 19.8825 11.0991 20 15H12ZM12.76 4.45C11.0513 7.71164 10.1075 11.3194 10 15H4C4.42952 9.98873 7.93859 5.77705 12.79 4.45H12.76ZM4.04967 17H10.0497C10.154 20.6798 11.0944 24.2875 12.7997 27.55C7.96399 26.2088 4.4735 22.0003 4.04967 17ZM19.21 27.55C20.9291 24.2908 21.8833 20.6829 22 17H28C27.5705 22.0113 24.0614 26.2229 19.21 27.55Z" fill="currentColor">
                      </path>
                    </svg>EN
                  </div>
                </span>
              </button>
              <div className="invisible absolute">
                <div tabindex="-1" role="menu"  aria-orientation="vertical" className="invisible absolute" >
                  <button type="button" data-id="language-switcher-button-item-en" id="menu-list-25-menuitem-22" role="menuitem" tabindex="-1" className="chakra-menu__menuitem css-1l0p98o" data-index="0">English</button>
                  <button type="button" data-id="language-switcher-button-item-zh_hans" id="menu-list-25-menuitem-23" role="menuitem" tabindex="-1" className="chakra-menu__menuitem css-1l0p98o" data-index="1">简体中文</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
// style="visibility: hidden; position: absolute; min-width: max-content; inset: 0px auto auto 0px;