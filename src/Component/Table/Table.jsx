import React from 'react'
import "./Table.css"
const Table = () => {
  return (
    <div>
      <div className="overflow-x-auto py-8">
        <div className="text-5xl tracking-tight leading-11 font-semibold  pt-20 flex items-center justify-center"> Top Collection Today</div>
        <div className="min-w-screen min-h-screen flex items-center justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className=" rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className=" border-b-[1px] border-[#00ffff] text-sm leading-normal">
                    <th className="py-3 px-6 md:px-0 lg:px-6 text-left">Collection</th>
                    <th className="py-3 px-6 text-left">floor</th>
                    <th className="py-3 px-6 text-left">24h vol</th>
                    <th className="py-3 px-6 text-left">Total vol</th>
                    <th className="py-3 px-6 text-left">Owners</th>
                    <th className="py-3 px-6 text-left">Item</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-light">
                  <tr className="border-b-[0.5px] border-[#c7ccd1] pb-4 pt-4 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left  whitespace-nowrap">   
                      <div className="flex items-center">
                      <div class="font-bold w-8 text-base items-center mr-2 ">1</div>
                        <div className="mr-2">
                          <img alt='' src='https://looksrare.mo.cloudinary.net/0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258/0x28d029b2861e6abad4696624332e96b8a64f1d3d8940a59e967636e7a346eb25?resource_type=image&f=auto&c=limit&w=40&q=auto'></img>
                        </div>                       
                        <span className="font-semibold">Otherdeed</span>
                        <svg viewBox="0 0 32 32" focusable="false" class=" h-4 w-4 ml-1 text-blue-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.4171 3.24982L16.0007 1.33337L12.5842 3.24982L8.66732 3.29834L6.66684 6.66623L3.29895 8.66671L3.25043 12.5836L1.33398 16L3.25043 19.4165L3.29895 23.3334L6.66684 25.3338L8.66732 28.7017L12.5842 28.7503L16.0007 30.6667L19.4171 28.7503L23.334 28.7017L25.3345 25.3338L28.7024 23.3334L28.7509 19.4165L30.6673 16L28.7509 12.5836L28.7024 8.66671L25.3345 6.66623L23.334 3.29834L19.4171 3.24982ZM9.00065 16.5L14.0007 21.5L23.0007 12.6L21.4007 11L14.0007 18.4L10.6007 15L9.00065 16.5Z" fill="currentColor"></path></svg>
                        <svg viewBox="0 0 48 48" focusable="false" class="h-4 w-4 ml-1 text-purple-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0007 1.5L43.4863 12.75V35.25L24.0007 46.5L4.51514 35.25V12.75L24.0007 1.5ZM34.8813 18.8386L40.0721 24L34.8813 29.1614C28.8721 35.1367 19.1293 35.1367 13.1201 29.1614L7.92928 24L13.1201 18.8386C19.1293 12.8633 28.8721 12.8633 34.8813 18.8386ZM24.0007 31.3932C19.9194 31.3932 16.6078 28.0849 16.6078 24.0003C16.6078 19.9157 19.9194 16.6075 24.0007 16.6075C28.082 16.6075 31.3935 19.9157 31.3935 24.0003C31.3935 28.0849 28.0819 31.3932 24.0007 31.3932ZM23.9997 27.2144C22.2252 27.2144 20.7854 25.776 20.7854 24.0001C20.7854 22.2242 22.2252 20.7858 23.9997 20.7858C25.7742 20.7858 27.214 22.2242 27.214 24.0001C27.214 25.776 25.7742 27.2144 23.9997 27.2144Z" fill="currentColor"></path></svg>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >3.1</div>
                      </div>
                      <div className='text-green-400 green-400 leading-4 items-center   text-xs'>+5.08%</div>

                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >885.81</div>
                      </div>
                      <div className='text-green-400 green-400 leading-4  text-xs font-normal'>+161.41%</div>

                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >28,931</div>
                      </div>


                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className='font-semibold text-sm leading-5' >34,380</div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        
                        <div className='font-semibold text-sm leading-5' >98,231</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b-[0.5px] border-[#c7ccd1] pb-4 pt-4 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                      <div class="font-bold w-8 text-base items-center mr-2 ">2</div>
                        <div className="mr-2">
                          <img className="w-10 h-10" src="https://looksrare.mo.cloudinary.net/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/0x677f7afbd003952103a084fac8abaee3c3ef87bcb7f736ce55bdad7a778fb285?resource_type=image&f=auto&c=limit&w=40&q=auto" alt='' />
                        </div>
                        <span className="font-semibold">Bored Ape Yacht clube</span>
                        <svg viewBox="0 0 32 32" focusable="false" class=" h-4 w-4 ml-1 text-blue-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.4171 3.24982L16.0007 1.33337L12.5842 3.24982L8.66732 3.29834L6.66684 6.66623L3.29895 8.66671L3.25043 12.5836L1.33398 16L3.25043 19.4165L3.29895 23.3334L6.66684 25.3338L8.66732 28.7017L12.5842 28.7503L16.0007 30.6667L19.4171 28.7503L23.334 28.7017L25.3345 25.3338L28.7024 23.3334L28.7509 19.4165L30.6673 16L28.7509 12.5836L28.7024 8.66671L25.3345 6.66623L23.334 3.29834L19.4171 3.24982ZM9.00065 16.5L14.0007 21.5L23.0007 12.6L21.4007 11L14.0007 18.4L10.6007 15L9.00065 16.5Z" fill="currentColor"></path></svg>
                        <svg viewBox="0 0 48 48" focusable="false" class="h-4 w-4 ml-1 text-purple-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0007 1.5L43.4863 12.75V35.25L24.0007 46.5L4.51514 35.25V12.75L24.0007 1.5ZM34.8813 18.8386L40.0721 24L34.8813 29.1614C28.8721 35.1367 19.1293 35.1367 13.1201 29.1614L7.92928 24L13.1201 18.8386C19.1293 12.8633 28.8721 12.8633 34.8813 18.8386ZM24.0007 31.3932C19.9194 31.3932 16.6078 28.0849 16.6078 24.0003C16.6078 19.9157 19.9194 16.6075 24.0007 16.6075C28.082 16.6075 31.3935 19.9157 31.3935 24.0003C31.3935 28.0849 28.0819 31.3932 24.0007 31.3932ZM23.9997 27.2144C22.2252 27.2144 20.7854 25.776 20.7854 24.0001C20.7854 22.2242 22.2252 20.7858 23.9997 20.7858C25.7742 20.7858 27.214 22.2242 27.214 24.0001C27.214 25.776 25.7742 27.2144 23.9997 27.2144Z" fill="currentColor"></path></svg>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >97.5</div>
                      </div>
                      <div className='text-red-400 red-400 leading-4  text-xs font-normal'>-1.52%</div>

                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      <div className='text-green-400 green-400 leading-4  text-xs font-normal'>179.64%</div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >80,331</div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                        </div>
                        <div className='font-semibold text-sm leading-5' >6,275</div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                        </div>
                        <div className='font-semibold text-sm leading-5' >885.81</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b-[0.5px] border-[#c7ccd1] pb-4 pt-4 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                      <div class="font-bold w-8 text-base items-center mr-2 ">3</div>
                        <div className="mr-2">
                          <img className="w-6 h-6" src="https://looksrare.mo.cloudinary.net/0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B/0xfa2c7077faaa0d12c0f021c39a2e5ef672e531273914161742234795360d6a25?resource_type=image&f=auto&c=limit&w=40&q=auto" alt='' />
                        </div>
                        <span className="font-semibold">CloneX</span>
                        <svg viewBox="0 0 32 32" focusable="false" class=" h-4 w-4 ml-1 text-blue-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.4171 3.24982L16.0007 1.33337L12.5842 3.24982L8.66732 3.29834L6.66684 6.66623L3.29895 8.66671L3.25043 12.5836L1.33398 16L3.25043 19.4165L3.29895 23.3334L6.66684 25.3338L8.66732 28.7017L12.5842 28.7503L16.0007 30.6667L19.4171 28.7503L23.334 28.7017L25.3345 25.3338L28.7024 23.3334L28.7509 19.4165L30.6673 16L28.7509 12.5836L28.7024 8.66671L25.3345 6.66623L23.334 3.29834L19.4171 3.24982ZM9.00065 16.5L14.0007 21.5L23.0007 12.6L21.4007 11L14.0007 18.4L10.6007 15L9.00065 16.5Z" fill="currentColor"></path></svg>
                        <svg viewBox="0 0 48 48" focusable="false" class="h-4 w-4 ml-1 text-purple-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0007 1.5L43.4863 12.75V35.25L24.0007 46.5L4.51514 35.25V12.75L24.0007 1.5ZM34.8813 18.8386L40.0721 24L34.8813 29.1614C28.8721 35.1367 19.1293 35.1367 13.1201 29.1614L7.92928 24L13.1201 18.8386C19.1293 12.8633 28.8721 12.8633 34.8813 18.8386ZM24.0007 31.3932C19.9194 31.3932 16.6078 28.0849 16.6078 24.0003C16.6078 19.9157 19.9194 16.6075 24.0007 16.6075C28.082 16.6075 31.3935 19.9157 31.3935 24.0003C31.3935 28.0849 28.0819 31.3932 24.0007 31.3932ZM23.9997 27.2144C22.2252 27.2144 20.7854 25.776 20.7854 24.0001C20.7854 22.2242 22.2252 20.7858 23.9997 20.7858C25.7742 20.7858 27.214 22.2242 27.214 24.0001C27.214 25.776 25.7742 27.2144 23.9997 27.2144Z" fill="currentColor"></path></svg>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      <div className='text-green-400 green-400 leading-4  text-xs font-normal'>179.64%</div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      <div className='text-green-400 green-400 leading-4  text-xs font-normal'>179.64%</div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b-[0.5px] border-[#c7ccd1] pb-4 pt-4 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                      <div class="font-bold w-8 text-base items-center mr-2 ">4</div>
                        <div className="mr-2">
                          <img className="w-8 h-8" src="https://looksrare.mo.cloudinary.net/0x23581767a106ae21c074b2276D25e5C3e136a68b/0x5525259808d7b76eebf828b3a03ffff7e392617d92a920a037d414ae1d00e754?resource_type=image&f=auto&c=limit&w=40&q=auto" alt='' />
                        </div>
                        <span className="font-semibold">Moonbirds</span>
                        <svg viewBox="0 0 32 32" focusable="false" class=" h-4 w-4 ml-1 text-blue-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.4171 3.24982L16.0007 1.33337L12.5842 3.24982L8.66732 3.29834L6.66684 6.66623L3.29895 8.66671L3.25043 12.5836L1.33398 16L3.25043 19.4165L3.29895 23.3334L6.66684 25.3338L8.66732 28.7017L12.5842 28.7503L16.0007 30.6667L19.4171 28.7503L23.334 28.7017L25.3345 25.3338L28.7024 23.3334L28.7509 19.4165L30.6673 16L28.7509 12.5836L28.7024 8.66671L25.3345 6.66623L23.334 3.29834L19.4171 3.24982ZM9.00065 16.5L14.0007 21.5L23.0007 12.6L21.4007 11L14.0007 18.4L10.6007 15L9.00065 16.5Z" fill="currentColor"></path></svg>
                        <svg viewBox="0 0 48 48" focusable="false" class="h-4 w-4 ml-1 text-purple-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0007 1.5L43.4863 12.75V35.25L24.0007 46.5L4.51514 35.25V12.75L24.0007 1.5ZM34.8813 18.8386L40.0721 24L34.8813 29.1614C28.8721 35.1367 19.1293 35.1367 13.1201 29.1614L7.92928 24L13.1201 18.8386C19.1293 12.8633 28.8721 12.8633 34.8813 18.8386ZM24.0007 31.3932C19.9194 31.3932 16.6078 28.0849 16.6078 24.0003C16.6078 19.9157 19.9194 16.6075 24.0007 16.6075C28.082 16.6075 31.3935 19.9157 31.3935 24.0003C31.3935 28.0849 28.0819 31.3932 24.0007 31.3932ZM23.9997 27.2144C22.2252 27.2144 20.7854 25.776 20.7854 24.0001C20.7854 22.2242 22.2252 20.7858 23.9997 20.7858C25.7742 20.7858 27.214 22.2242 27.214 24.0001C27.214 25.776 25.7742 27.2144 23.9997 27.2144Z" fill="currentColor"></path></svg>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      <div className='text-green-400 green-400 leading-4  text-xs font-normal'>179.64%</div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      <div className='text-green-400 green-400 leading-4  text-xs font-normal'>179.64%</div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                        
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b-[0.5px] border-[#c7ccd1] pb-4 pt-4 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                      <div class="font-bold w-8 text-base items-center mr-2 ">5</div>
                        <div className="mr-2">
                          <img className="w-8 h-8" src="https://looksrare.mo.cloudinary.net/0x60E4d786628Fea6478F785A6d7e704777c86a7c6/0x95a97079e9792d302fb61a77706837ab2e8a38c013c5d33a4e7223d232d198c8?resource_type=image&f=auto&c=limit&w=40&q=auto" alt='' />
                        </div>
                        <span className="font-semibold">Mutan Ape Yatch Club</span>
                        <svg viewBox="0 0 32 32" focusable="false" class=" h-4 w-4 ml-1 text-blue-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.4171 3.24982L16.0007 1.33337L12.5842 3.24982L8.66732 3.29834L6.66684 6.66623L3.29895 8.66671L3.25043 12.5836L1.33398 16L3.25043 19.4165L3.29895 23.3334L6.66684 25.3338L8.66732 28.7017L12.5842 28.7503L16.0007 30.6667L19.4171 28.7503L23.334 28.7017L25.3345 25.3338L28.7024 23.3334L28.7509 19.4165L30.6673 16L28.7509 12.5836L28.7024 8.66671L25.3345 6.66623L23.334 3.29834L19.4171 3.24982ZM9.00065 16.5L14.0007 21.5L23.0007 12.6L21.4007 11L14.0007 18.4L10.6007 15L9.00065 16.5Z" fill="currentColor"></path></svg>
                        <svg viewBox="0 0 48 48" focusable="false" class="h-4 w-4 ml-1 text-purple-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0007 1.5L43.4863 12.75V35.25L24.0007 46.5L4.51514 35.25V12.75L24.0007 1.5ZM34.8813 18.8386L40.0721 24L34.8813 29.1614C28.8721 35.1367 19.1293 35.1367 13.1201 29.1614L7.92928 24L13.1201 18.8386C19.1293 12.8633 28.8721 12.8633 34.8813 18.8386ZM24.0007 31.3932C19.9194 31.3932 16.6078 28.0849 16.6078 24.0003C16.6078 19.9157 19.9194 16.6075 24.0007 16.6075C28.082 16.6075 31.3935 19.9157 31.3935 24.0003C31.3935 28.0849 28.0819 31.3932 24.0007 31.3932ZM23.9997 27.2144C22.2252 27.2144 20.7854 25.776 20.7854 24.0001C20.7854 22.2242 22.2252 20.7858 23.9997 20.7858C25.7742 20.7858 27.214 22.2242 27.214 24.0001C27.214 25.776 25.7742 27.2144 23.9997 27.2144Z" fill="currentColor"></path></svg>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      <div className='text-green-400 green-400 leading-4  text-xs font-normal'>179.64%</div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      <div className='text-green-400 green-400 leading-4  text-xs font-normal'>179.64%</div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b-[0.5px] border-[#c7ccd1] pb-4 pt-4 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                      <div class="font-bold w-8 text-base items-center mr-2 ">6</div>
                        <div className="mr-2">
                          <img className="w-8 h-8" src="https://looksrare.mo.cloudinary.net/0x23581767a106ae21c074b2276D25e5C3e136a68b/0x5525259808d7b76eebf828b3a03ffff7e392617d92a920a037d414ae1d00e754?resource_type=image&f=auto&c=limit&w=40&q=auto" alt='' />
                        </div>
                        <span className="font-semibold">Moonbirds</span>
                        <svg viewBox="0 0 32 32" focusable="false" class=" h-4 w-4 ml-1 text-blue-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.4171 3.24982L16.0007 1.33337L12.5842 3.24982L8.66732 3.29834L6.66684 6.66623L3.29895 8.66671L3.25043 12.5836L1.33398 16L3.25043 19.4165L3.29895 23.3334L6.66684 25.3338L8.66732 28.7017L12.5842 28.7503L16.0007 30.6667L19.4171 28.7503L23.334 28.7017L25.3345 25.3338L28.7024 23.3334L28.7509 19.4165L30.6673 16L28.7509 12.5836L28.7024 8.66671L25.3345 6.66623L23.334 3.29834L19.4171 3.24982ZM9.00065 16.5L14.0007 21.5L23.0007 12.6L21.4007 11L14.0007 18.4L10.6007 15L9.00065 16.5Z" fill="currentColor"></path></svg>
                        <svg viewBox="0 0 48 48" focusable="false" class="h-4 w-4 ml-1 text-purple-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0007 1.5L43.4863 12.75V35.25L24.0007 46.5L4.51514 35.25V12.75L24.0007 1.5ZM34.8813 18.8386L40.0721 24L34.8813 29.1614C28.8721 35.1367 19.1293 35.1367 13.1201 29.1614L7.92928 24L13.1201 18.8386C19.1293 12.8633 28.8721 12.8633 34.8813 18.8386ZM24.0007 31.3932C19.9194 31.3932 16.6078 28.0849 16.6078 24.0003C16.6078 19.9157 19.9194 16.6075 24.0007 16.6075C28.082 16.6075 31.3935 19.9157 31.3935 24.0003C31.3935 28.0849 28.0819 31.3932 24.0007 31.3932ZM23.9997 27.2144C22.2252 27.2144 20.7854 25.776 20.7854 24.0001C20.7854 22.2242 22.2252 20.7858 23.9997 20.7858C25.7742 20.7858 27.214 22.2242 27.214 24.0001C27.214 25.776 25.7742 27.2144 23.9997 27.2144Z" fill="currentColor"></path></svg>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      <div className='text-green-400 green-400 leading-4  text-xs font-normal'>179.64%</div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      <div className='text-green-400 green-400 leading-4  text-xs font-normal'>179.64%</div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                     
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b-[0.5px] border-[#c7ccd1] pb-4 pt-4 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                      <div class="font-bold w-8 text-base items-center mr-2 ">7</div>
                        <div className="mr-2">
                          <img className="w-8 h-8" src="https://looksrare.mo.cloudinary.net/0x23581767a106ae21c074b2276D25e5C3e136a68b/0x5525259808d7b76eebf828b3a03ffff7e392617d92a920a037d414ae1d00e754?resource_type=image&f=auto&c=limit&w=40&q=auto" alt='' />
                        </div>
                        <span className="font-semibold">Moonbirds</span>
                        <svg viewBox="0 0 32 32" focusable="false" class=" h-4 w-4 ml-1 text-blue-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.4171 3.24982L16.0007 1.33337L12.5842 3.24982L8.66732 3.29834L6.66684 6.66623L3.29895 8.66671L3.25043 12.5836L1.33398 16L3.25043 19.4165L3.29895 23.3334L6.66684 25.3338L8.66732 28.7017L12.5842 28.7503L16.0007 30.6667L19.4171 28.7503L23.334 28.7017L25.3345 25.3338L28.7024 23.3334L28.7509 19.4165L30.6673 16L28.7509 12.5836L28.7024 8.66671L25.3345 6.66623L23.334 3.29834L19.4171 3.24982ZM9.00065 16.5L14.0007 21.5L23.0007 12.6L21.4007 11L14.0007 18.4L10.6007 15L9.00065 16.5Z" fill="currentColor"></path></svg>
                        <svg viewBox="0 0 48 48" focusable="false" class="h-4 w-4 ml-1 text-purple-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0007 1.5L43.4863 12.75V35.25L24.0007 46.5L4.51514 35.25V12.75L24.0007 1.5ZM34.8813 18.8386L40.0721 24L34.8813 29.1614C28.8721 35.1367 19.1293 35.1367 13.1201 29.1614L7.92928 24L13.1201 18.8386C19.1293 12.8633 28.8721 12.8633 34.8813 18.8386ZM24.0007 31.3932C19.9194 31.3932 16.6078 28.0849 16.6078 24.0003C16.6078 19.9157 19.9194 16.6075 24.0007 16.6075C28.082 16.6075 31.3935 19.9157 31.3935 24.0003C31.3935 28.0849 28.0819 31.3932 24.0007 31.3932ZM23.9997 27.2144C22.2252 27.2144 20.7854 25.776 20.7854 24.0001C20.7854 22.2242 22.2252 20.7858 23.9997 20.7858C25.7742 20.7858 27.214 22.2242 27.214 24.0001C27.214 25.776 25.7742 27.2144 23.9997 27.2144Z" fill="currentColor"></path></svg>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      <div className='text-green-400 green-400 leading-4  text-xs font-normal'>179.64%</div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      <div className='text-green-400 green-400 leading-4  text-xs font-normal'>179.64%</div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b-[0.5px] border-[#c7ccd1] pb-4 pt-4 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                      <div class="font-bold w-8 text-base items-center mr-2 ">8</div>
                        <div className="mr-2">
                          <img className="w-8 h-8" src="https://looksrare.mo.cloudinary.net/0x23581767a106ae21c074b2276D25e5C3e136a68b/0x5525259808d7b76eebf828b3a03ffff7e392617d92a920a037d414ae1d00e754?resource_type=image&f=auto&c=limit&w=40&q=auto" alt='' />
                        </div>
                        <span className="font-semibold">Moonbirds</span>
                        <svg viewBox="0 0 32 32" focusable="false" class=" h-4 w-4 ml-1 text-blue-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.4171 3.24982L16.0007 1.33337L12.5842 3.24982L8.66732 3.29834L6.66684 6.66623L3.29895 8.66671L3.25043 12.5836L1.33398 16L3.25043 19.4165L3.29895 23.3334L6.66684 25.3338L8.66732 28.7017L12.5842 28.7503L16.0007 30.6667L19.4171 28.7503L23.334 28.7017L25.3345 25.3338L28.7024 23.3334L28.7509 19.4165L30.6673 16L28.7509 12.5836L28.7024 8.66671L25.3345 6.66623L23.334 3.29834L19.4171 3.24982ZM9.00065 16.5L14.0007 21.5L23.0007 12.6L21.4007 11L14.0007 18.4L10.6007 15L9.00065 16.5Z" fill="currentColor"></path></svg>
                        <svg viewBox="0 0 48 48" focusable="false" class="h-4 w-4 ml-1 text-purple-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0007 1.5L43.4863 12.75V35.25L24.0007 46.5L4.51514 35.25V12.75L24.0007 1.5ZM34.8813 18.8386L40.0721 24L34.8813 29.1614C28.8721 35.1367 19.1293 35.1367 13.1201 29.1614L7.92928 24L13.1201 18.8386C19.1293 12.8633 28.8721 12.8633 34.8813 18.8386ZM24.0007 31.3932C19.9194 31.3932 16.6078 28.0849 16.6078 24.0003C16.6078 19.9157 19.9194 16.6075 24.0007 16.6075C28.082 16.6075 31.3935 19.9157 31.3935 24.0003C31.3935 28.0849 28.0819 31.3932 24.0007 31.3932ZM23.9997 27.2144C22.2252 27.2144 20.7854 25.776 20.7854 24.0001C20.7854 22.2242 22.2252 20.7858 23.9997 20.7858C25.7742 20.7858 27.214 22.2242 27.214 24.0001C27.214 25.776 25.7742 27.2144 23.9997 27.2144Z" fill="currentColor"></path></svg>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      <div className='text-green-400 green-400 leading-4  text-xs font-normal'>179.64%</div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      <div className='text-green-400 green-400 leading-4  text-xs font-normal'>179.64%</div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg viewBox="0 0 48 96" focusable="false" className="css-anc12x">
                            <path d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z" fill="#767676"></path>
                            <path d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z" fill="#8E8E8E"></path>
                            <path d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z" fill="#5F5F5F"></path>
                            <path d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z" fill="#8E8E8E"></path>
                            <path d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z" fill="#5F5F5F"></path>
                            <path d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z" fill="#767676"></path>
                          </svg>
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                      
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                        </div>
                        <div className='font-semibold text-sm leading-5' >363.5</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> 
      <div className='flex items-center leading-6 justify-center pb-20'>
        <button type='button' className='box-border px-4 h-12 min-w-48 p-4 border-1 leading-5 bg-green-500 rounded text-white font-semibold' href="/collections">See all Collection</button>
        <a className=" align-middle box-border px-4 h-12 min-w-48 py-4 border-2 leading-5 ml-2 rounded font-semibold" href="/explore">Explore NFTs</a>
      </div>
    </div>
  )
}

export default Table