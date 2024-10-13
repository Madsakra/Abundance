import { Link } from 'react-router-dom'


export default function CustomFooter() {
  return (
<footer className="w-full bg-[#EEEEEE] border-t-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                    <Link to="/"  className="flex justify-center lg:justify-start flex-col lg:flex-row items-center gap-5">
                        
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.3239 1.51177L58.2446 16.0324C58.929 16.4312 59.35 17.1636 59.35 17.9557V47.0443C59.35 47.8364 58.929 48.5688 58.2446 48.9676L33.3239 63.4882C32.6313 63.8918 31.7751 63.8918 31.0825 63.4882L6.16176 48.9676C5.47735 48.5688 5.05642 47.8364 5.05642 47.0443V17.9557C5.05642 17.1636 5.47736 16.4312 6.16177 16.0324L31.0825 1.51177C31.7751 1.1082 32.6313 1.1082 33.3239 1.51177Z" fill="#00ACAC" stroke="#00ACAC" stroke-width="1.48402"/>
                        <path d="M33.6416 14.6125L39.8928 18.2216C40.6684 18.6694 41.1462 19.4969 41.1462 20.3925V27.6107C41.1462 28.5063 40.6684 29.3338 39.8928 29.7816L33.6416 33.3907C32.866 33.8385 31.9105 33.8385 31.1349 33.3907L24.8837 29.7816C24.1081 29.3338 23.6304 28.5063 23.6304 27.6107V20.3925C23.6304 19.4969 24.1081 18.6694 24.8837 18.2216L31.1349 14.6125C31.9105 14.1647 32.866 14.1647 33.6416 14.6125Z" fill="#00ACAC" stroke="white" stroke-width="0.922602"/>
                        <path d="M23.816 19.2867L29.3152 21.9824M40.9605 19.2867L35.677 22.198" stroke="white" stroke-width="0.754788" stroke-linecap="round"/>
                        <path d="M32.7117 29.1032C32.7141 28.8948 32.5471 28.7239 32.3386 28.7216C32.1302 28.7192 31.9593 28.8862 31.957 29.0946L32.7117 29.1032ZM31.957 29.0946L31.9031 33.839L32.6578 33.8476L32.7117 29.1032L31.957 29.0946Z" fill="white"/>
                        <g clip-path="url(#clip0_140_83)">
                        <path d="M30.9824 24.1853C30.9824 22.6006 33.3009 21.5548 33.3009 19.8262C33.3009 18.8148 32.5509 17.9365 32.4384 17.8849C32.4472 17.9558 32.4516 18.0288 32.4516 18.0997C32.4516 20.0774 29.2067 21.4045 29.2067 23.8675C29.2067 24.9369 29.917 25.5682 30.6736 26.1931C32.1097 27.1959 32.3964 27.7263 32.3964 28.0527C32.3964 28.2696 32.2906 28.4178 32.2906 28.5316C32.5795 28.173 32.6744 27.8466 32.6766 27.5352C32.6766 26.8996 32.1979 26.3262 31.7016 25.6777C31.3486 25.1989 30.9824 24.763 30.9824 24.1853ZM35.5112 23.3479C35.2443 21.9134 33.7906 20.6765 33.4222 20.5369L33.5104 20.6916C33.5634 20.8011 33.5854 20.9256 33.5854 21.0588C33.5854 22.0186 32.3898 23.4466 32.3369 23.5647C32.2884 23.6743 32.2663 23.7902 32.2663 23.904C32.2663 24.3356 32.6016 24.8081 32.6612 24.8081C32.7141 24.8081 33.9097 23.6184 33.9428 22.9248C34.084 23.1761 34.1435 23.4101 34.1435 23.642C34.1435 24.5268 33.2215 25.7228 33.2215 25.7228C33.2215 25.9719 33.9252 26.8652 34.0046 26.8652C34.0266 26.8652 34.0531 26.8352 34.0752 26.8137C34.9112 25.9698 35.5598 24.9884 35.5598 23.8761C35.5598 23.7043 35.5443 23.5282 35.5112 23.3479Z" fill="white"/>
                        </g>
                        <path d="M24.4224 30.458L30.6736 34.0671C31.4491 34.5149 31.9269 35.3424 31.9269 36.238V43.4562C31.9269 44.3517 31.4491 45.1793 30.6736 45.6271L24.4224 49.2362C23.6468 49.684 22.6912 49.684 21.9157 49.2362L15.6645 45.6271C14.8889 45.1793 14.4111 44.3517 14.4111 43.4562V36.238C14.4111 35.3424 14.8889 34.5149 15.6645 34.0671L21.9157 30.458C22.6912 30.0102 23.6468 30.0102 24.4224 30.458Z" fill="#00ACAC" stroke="white" stroke-width="0.922602"/>
                        <path d="M14.5968 35.1321L20.096 37.8278M31.7413 35.1321L26.4578 38.0435" stroke="white" stroke-width="0.754788" stroke-linecap="round"/>
                        <path d="M23.4925 44.9487C23.4949 44.7403 23.3278 44.5694 23.1194 44.567C22.911 44.5647 22.7401 44.7317 22.7377 44.9401L23.4925 44.9487ZM22.7377 44.9401L22.6838 49.6845L23.4386 49.6931L23.4925 44.9487L22.7377 44.9401Z" fill="white"/>
                        <g clip-path="url(#clip1_140_83)">
                        <path d="M21.7632 40.0308C21.7632 38.446 24.0816 37.4003 24.0816 35.6716C24.0816 34.6602 23.3316 33.7819 23.2191 33.7304C23.2279 33.8013 23.2324 33.8743 23.2324 33.9451C23.2324 35.9229 19.9874 37.2499 19.9874 39.713C19.9874 40.7824 20.6977 41.4137 21.4544 42.0386C22.8904 43.0414 23.1772 43.5718 23.1772 43.8982C23.1772 44.1151 23.0713 44.2632 23.0713 44.3771C23.3603 44.0184 23.4552 43.692 23.4574 43.3807C23.4574 42.7451 22.9787 42.1717 22.4823 41.5232C22.1294 41.0443 21.7632 40.6084 21.7632 40.0308ZM26.292 39.1933C26.0251 37.7589 24.5714 36.522 24.203 36.3824L24.2912 36.537C24.3441 36.6465 24.3662 36.7711 24.3662 36.9042C24.3662 37.8641 23.1706 39.2921 23.1176 39.4102C23.0691 39.5197 23.0471 39.6357 23.0471 39.7495C23.0471 40.1811 23.3824 40.6535 23.4419 40.6535C23.4949 40.6535 24.6905 39.4639 24.7236 38.7703C24.8647 39.0215 24.9243 39.2556 24.9243 39.4875C24.9243 40.3722 24.0022 41.5683 24.0022 41.5683C24.0022 41.8174 24.7059 42.7107 24.7853 42.7107C24.8074 42.7107 24.8339 42.6806 24.8559 42.6592C25.692 41.8152 26.3405 40.8339 26.3405 39.7216C26.3405 39.5498 26.3251 39.3737 26.292 39.1933Z" fill="white"/>
                        </g>
                        <path d="M42.8688 30.444L49.12 34.0531C49.9005 34.5038 50.3814 35.3366 50.3814 36.238V43.4562C50.3814 44.3575 49.9005 45.1904 49.12 45.641L42.8688 49.2501C42.0882 49.7008 41.1265 49.7008 40.346 49.2501L34.0948 45.641C33.3142 45.1904 32.8334 44.3575 32.8334 43.4562V36.238C32.8334 35.3366 33.3142 34.5038 34.0948 34.0531L40.346 30.444C41.1265 29.9934 42.0882 29.9934 42.8688 30.444Z" fill="#00ACAC" stroke="white" stroke-width="0.890411"/>
                        <path d="M33.0352 35.1321L38.5343 37.8278M50.1796 35.1321L44.8961 38.0435" stroke="white" stroke-width="0.754788" stroke-linecap="round"/>
                        <path d="M41.9308 44.9487C41.9332 44.7403 41.7662 44.5694 41.5578 44.567C41.3493 44.5647 41.1785 44.7317 41.1761 44.9401L41.9308 44.9487ZM41.1761 44.9401L41.1222 49.6845L41.8769 49.6931L41.9308 44.9487L41.1761 44.9401Z" fill="white"/>
                        <g clip-path="url(#clip2_140_83)">
                        <path d="M40.2014 40.0308C40.2014 38.446 42.5199 37.4003 42.5199 35.6716C42.5199 34.6602 41.7699 33.7819 41.6574 33.7304C41.6662 33.8013 41.6706 33.8743 41.6706 33.9451C41.6706 35.9229 38.4257 37.2499 38.4257 39.713C38.4257 40.7824 39.136 41.4137 39.8926 42.0386C41.3287 43.0414 41.6154 43.5718 41.6154 43.8982C41.6154 44.1151 41.5096 44.2632 41.5096 44.3771C41.7985 44.0184 41.8934 43.692 41.8956 43.3807C41.8956 42.7451 41.4169 42.1717 40.9206 41.5232C40.5676 41.0443 40.2014 40.6084 40.2014 40.0308ZM44.7302 39.1933C44.4633 37.7589 43.0096 36.522 42.6412 36.3824L42.7294 36.537C42.7824 36.6465 42.8044 36.7711 42.8044 36.9042C42.8044 37.8641 41.6088 39.2921 41.5559 39.4102C41.5073 39.5197 41.4853 39.6357 41.4853 39.7495C41.4853 40.1811 41.8206 40.6535 41.8801 40.6535C41.9331 40.6535 43.1287 39.4639 43.1618 38.7703C43.303 39.0215 43.3625 39.2556 43.3625 39.4875C43.3625 40.3722 42.4405 41.5683 42.4405 41.5683C42.4405 41.8174 43.1441 42.7107 43.2236 42.7107C43.2456 42.7107 43.2721 42.6806 43.2942 42.6592C44.1302 41.8152 44.7787 40.8339 44.7787 39.7216C44.7787 39.5498 44.7633 39.3737 44.7302 39.1933Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_140_83">
                        <rect width="11.2944" height="10.9945" fill="white" transform="translate(26.7274 17.8849)"/>
                        </clipPath>
                        <clipPath id="clip1_140_83">
                        <rect width="11.2944" height="10.9945" fill="white" transform="translate(17.5082 33.7304)"/>
                        </clipPath>
                        <clipPath id="clip2_140_83">
                        <rect width="11.2944" height="10.9945" fill="white" transform="translate(35.9464 33.7304)"/>
                        </clipPath>
                        </defs>
                        </svg>




                        <h1 className='text-2xl font-semibold'>Abundance</h1>
                    </Link>
                    <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Have any query ? Don't be Shy to Contact Us below!</p>
                    <a href="javascript:;"  className="py-2.5 px-5 h-9 block w-fit bg-[#009797] rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-[#009797] lg:mx-0">
                        Contact us
                    </a>
                </div>
              
                <div className="lg:mx-auto text-left  ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Abundance</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 hover:text-gray-900">Home</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">About</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Membership</a></li>
          
                    </ul>
                </div>
              

                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Product</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 hover:text-gray-900">Product Feature</a></li>
                    </ul>
                </div>
            
                <div className="lg:mx-auto text-left">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Blog</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 hover:text-gray-900">Company Members</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Company Goals</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Company Mission</a></li>

                    </ul>
                </div>
                {/*END COL*/}
                <div className="lg:mx-auto text-left">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Policy and T&Cs</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 hover:text-gray-900">Web Privacy and Cookie Notice</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">App T&Cs/Privacy</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">User Data Privacy</a></li>
                    </ul>
                </div>
            </div>
            {/* GRID */}
            <div className="py-7 border-t border-gray-200">
                <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span className="text-sm text-gray-500 ">©<a href="https://pagedone.io/">Abundance</a> 2024, All rights reserved.</span>
                    <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                        <a href="javascript:;"  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g id="Social Media">
                            <path id="Vector" d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white"/>
                            </g>
                          </svg>
                        </a>
                        <a href="javascript:;"  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                            <svg className="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                        <a href="javascript:;"  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                            <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                        <a href="javascript:;"  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                            <svg className="w-[1.25rem] h-[0.875rem] text-white" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
