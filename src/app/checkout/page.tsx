import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Checkout = () => {
    return (
        <div className='py-8 mb-[4rem] sm:px-[3rem] px-6 flex flex-col'>
            <div className='h-[70px]'></div>
            <h3 className='font-[600] text-[26px] leading-[45px] text-[#4E2020]'>CHECKOUT</h3>

            <section className='flex md:flex-row flex-col justify-between'>
                <section className='flex flex-col basis-[45%]'>
                    <div className='flex flex-col'>
                        <p className='mt-6 mb-4 text-[#4E2020] font-[500] text-[1.1rem]'>Billing Information</p>
                        <input
                            type="text"
                            name='name'

                            placeholder='FullName'

                            className='w-full h-[42px] placeholder-[#000] text-[1rem] px-3 py-1 mb-5 rounded border-[1px] border-[#B2A9A9] focus:outline-0 focus:border-[1px] focus:border-[#B2A9A9]'
                        />
                        <input
                            type="text"
                            name='address'

                            placeholder='Address'

                            className='w-full h-[42px] placeholder-[#000] text-[1rem] px-3 py-1 mb-5 rounded border-[1px] border-[#B2A9A9] focus:outline-0 focus:border-[1px] focus:border-[#B2A9A9]'
                        />
                    </div>

                    <div className=''>
                        <p className='text-[#4E2020] mt-3 mb-7 font-[500] text-[1.1rem]'>Shipping Address</p>
                        <input
                            type="text"
                            name='street'

                            placeholder='Street'

                            className='w-full h-[42px] placeholder-[#000] text-[1rem] px-3 py-1 mb-5 rounded border-[1px] border-[#B2A9A9] focus:outline-0 focus:border-[1px] focus:border-[#B2A9A9]'
                        />
                        <input
                            type="text"
                            name='city'

                            placeholder='City'

                            className='w-full h-[42px] placeholder-[#000] text-[1rem] px-3 py-1 mb-5 rounded border-[1px] border-[#B2A9A9] focus:outline-0 focus:border-[1px] focus:border-[#B2A9A9]'
                        />

                        <div className='flex justify-between items-center'>
                            <select name='state'
                                className='w-full h-[42px] text-[1rem] px-3 py-1 mb-5 rounded border-[1px] border-[#B2A9A9]
                                focus:outline-0 focus:border-[1px] focus:border-[#B2A9A9] placeholder-[#000] mr-4'
                            >
                                <option value="">State</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Enugu">Enugu</option>
                                <option value="Rivers">Rivers</option>
                            </select>

                            <select name='zipcode'
                                className='w-full h-[42px] placeholder-[#000] text-[1rem] px-3 py-1 mb-5 rounded border-[1px] border-[#B2A9A9]
                                focus:outline-0 focus:border-[1px] focus:border-[#B2A9A9] ml-4'
                            >
                                <option value="">Zip Code</option>
                                <option value="Lagos">00112233</option>
                                <option value="Enugu">00112232</option>
                                <option value="Rivers">00112231</option>
                            </select>
                        </div>

                    </div>

                    <section className=''>
                        <p className='text-[#4E2020] mt-3 mb-7 font-[500] text-[1.1rem]'>Delivery Schedule</p>
                        <input
                            type="text"
                            name='date'

                            placeholder='Date...'

                            className='w-full h-[42px] placeholder-[#000] text-[1rem] px-3 py-1 mb-5 rounded border-[1px] border-[#B2A9A9] focus:outline-0 focus:border-[1px] focus:border-[#B2A9A9]'
                        />
                        <select name='delivery-period'
                            className='w-full h-[42px] placeholder-[#000] text-[1rem] px-3 py-1 mb-5 rounded border-[1px] border-[#B2A9A9]
                                focus:outline-0 focus:border-[1px] focus:border-[#B2A9A9]'
                            >
                            <option value="">Select a Delivery Period</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>

                        <div className='flex justify-between items-center'>
                                <select name='state'
                                    className='w-full h-[42px] text-[1rem] px-3 py-1 mb-5 rounded border-[1px] border-[#B2A9A9]
                                    focus:outline-0 focus:border-[1px] focus:border-[#B2A9A9] placeholder-[#000] mr-4'
                                >
                                    <option value="">Time</option>
                                    <option value="time1">time1</option>
                                    <option value="time2">time2</option>
                                    <option value="time3">time3</option>
                                </select>

                                <select name='zipcode'
                                    className='w-full h-[42px] placeholder-[#000] text-[1rem] px-3 py-1 mb-5 rounded border-[1px] border-[#B2A9A9]
                                    focus:outline-0 focus:border-[1px] focus:border-[#B2A9A9] ml-4'
                                >
                                    <option value="">Time range</option>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                </select>
                        </div>
                        <input
                            type="text"
                            name='delivery-type'
                            value=""
                            placeholder='Delivery Type'

                            className='w-full h-[42px] text-[1rem] px-3 py-1 mb-5 rounded border-[1px] border-[#B2A9A9]
                                focus:outline-0 focus:border-[1px] focus:border-[#B2A9A9] placeholder-[#000] mr-4'
                        />
                        <textarea name="" id="" className='border-[1px] border-[#B2A9A9]
                                focus:outline-0 focus:border-[1px] focus:border-[#B2A9A9] placeholder-[#A38C8C] rounded p-2 md:h-1[30px] h-[120px] basis-[30%] w-full'>
                            Kindly drop your instruction
                        </textarea>
                    </section>

                </section>

                <section className='basis-[45%] flex flex-col'>
                    <div className='flex flex-col'>
                        <p className='text-[#4E2020] mt-[3rem] mb-3 md:mt-4 md:mb-10 font-[500] text-[1.1rem]'>Order Summary</p>
                        <div className='flex items-center justify-between sm:mb-0 mb-[2rem]'>
                            <div className='flex items-center'>
                                <Image
                                    src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1720285742/timbu-shop/prod1_f1dxpk.svg"
                                    alt=''
                                    width={100}
                                    height={100}
                                    className='h-[150px]'
                                />
                                <div className='flex flex-col ml-2'>
                                    <p className='sm:text-[0.8rem] text-[0.8rem] font-[500]'>Music System Speaker</p>
                                    <p className='sm:text-[0.8rem] text-[0.8rem] font-[400]'>Size: Big</p>
                                    <p className='sm:text-[0.8rem] text-[0.8rem] font-[400]'>Qty: 1</p>
                                </div>
                            </div>
                            <p className='text-sm mt-[-3rem]'>₦80,000</p>
                        </div>

                        <div className='flex items-center relative top-[10px] md:top-[30px] mx-6 md:mx-0'>

                            <input
                                type="email"
                                name="email"
                                placeholder="Promo Code"
                                className='md:w-[90%] w-[100%] h-[44px] text-[#000] text-sm px-3 py-1 mb-5 border-[1px] border-[#B2A9A9]
                                focus:outline-0 focus:border-[1px] focus:border-[#B2A9A9] search-input placeholder-[#000] placeholder-[2px]'
                            />
                            <button
                                type="submit"
                                className='absolute bg-[#af0101] md:px-6 px-3 bottom-[20px] md:right-[11px] right-[-20px] h-[44px] p-1 text-[#fff] w-[80px]
                                focus:outline-none focus:border-transparent focus:ring-0 submit-btn'
                            >
                                Apply
                            </button>

                        </div>

                        <div className='flex flex-col mt-10 gap-4'>
                            <p className='flex justify-between items-center'><span>Subtotal</span> <span>₦80,000</span></p>
                            <p className='flex justify-between items-center'><span>Shipping</span> <span className='mr-2'>₦2,000</span></p>
                            <p className='flex justify-between items-center'><span>Total Order</span> <span>₦82,000</span></p>
                        </div>

                    </div>

                    <section className=''>
                        <p className='text-[#4E2020] mt-[3rem] mb-4 md:mt-3 md:mb-7 text-start font-[500] text-[1.1rem]'>Method of Payment</p>
                        <div className='flex justify-around rounded border-[1px] border-[#B2A9A9]
                            focus:outline-0 focus:border-[1px] focus:border-[#B2A9A9 py-3'>
                            <div className='flex items-center justify-around'>
                                <svg className='sm:w-[18px] sm:h-[18px] h-[15px] w-[15px]' width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10.2621" cy="10.2621" r="9.26214" stroke="#8E5858" strokeWidth="2"/>
                                    <circle cx="10.5" cy="10.5" r="6.5" fill="#F12424"/>
                                </svg>
                                <span className='text-[10px] sm:text-sm ml-1 sm:ml-2'>Credit Card</span>
                            </div>
                            <div className='flex items-center justify-around'>
                                <svg className='sm:w-[18px] sm:h-[18px] h-[15px] w-[15px]' width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10.2621" cy="10.7377" r="9.26214" stroke="#8E5858" strokeWidth="2"/>
                                </svg>
                                <span className='text-[10px] sm:text-sm ml-1 sm:ml-2'>Online Payment</span>
                            </div>
                            <div className='flex justify-between items-center gap-4'>
                                <svg className='sm:w-[18px] sm:h-[18px] h-[15px] w-[15px]' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_151_485)">
                                    <path d="M2.15137 1.26123H14.1426V5.72623H2.15137V1.26123Z" fill="white"/>
                                    <path d="M2.15137 5.8512H14.1426V15.9999H2.15137V5.8512Z" fill="#006CA2"/>
                                    <path d="M3.69871 3.8538C3.58371 3.8538 3.48496 3.86005 3.48496 4.0238C3.48496 4.1038 3.48121 4.18255 3.48621 4.26255C3.48746 4.3063 3.49371 4.35505 3.51496 4.39255C3.53746 4.4313 3.56371 4.4313 3.59996 4.4363C3.64746 4.4438 3.68746 4.44505 3.73621 4.44505C3.84746 4.44505 3.96121 4.3738 4.00121 4.2613C4.02121 4.2013 4.02246 4.1313 3.99246 4.05255C3.93996 3.92505 3.81121 3.8538 3.69871 3.8538ZM6.69746 3.6538L6.69371 3.63755C6.67121 3.54505 6.64996 3.45255 6.62871 3.36005C6.61246 3.3288 6.60121 3.2838 6.55996 3.29505C6.53121 3.30255 6.51996 3.3388 6.51246 3.3588L6.50371 3.3688C6.48371 3.4963 6.46121 3.6238 6.43746 3.7513L6.43496 3.76505L6.42746 3.7963C6.42371 3.8338 6.41871 3.87505 6.43121 3.9113L6.46121 3.9488L6.50996 3.96505L6.54371 3.97755H6.65996C6.80121 3.9363 6.71496 3.7638 6.70121 3.66505L6.69746 3.6538ZM3.60246 3.1238C3.71371 3.1463 3.85871 3.10755 3.92371 2.98005C3.97121 2.8863 3.96246 2.77505 3.90621 2.6913L3.88621 2.6638C3.84121 2.61255 3.77621 2.5988 3.71746 2.5963C3.65871 2.59255 3.59121 2.5963 3.53621 2.62505L3.50871 2.6563C3.49371 2.68505 3.48121 2.7238 3.47496 2.76505C3.45871 2.8638 3.47121 2.98255 3.50996 3.05505C3.53121 3.0938 3.56371 3.1163 3.60246 3.1238Z" fill="#78A3AD"/>
                                    <path d="M13.77 0.347534H2.22995C1.59495 0.347534 1.07495 0.867534 1.07495 1.50253V16H6.06495V13.5475C6.06495 13.1938 6.3537 12.9038 6.70745 12.9038H9.2887C9.64245 12.9038 9.93245 13.1938 9.93245 13.5475V16H14.9225V1.50253C14.925 0.867534 14.405 0.347534 13.77 0.347534ZM4.4237 11.455H2.79745V9.49253H4.4237V11.455ZM4.4237 8.45253H2.79745V6.49003H4.4237V8.45253ZM4.8912 4.45753C4.78745 4.70253 4.6037 4.91378 4.3687 5.01503C4.0912 5.13503 3.7912 5.14878 3.4962 5.14128C3.3287 5.13753 3.1012 5.15003 2.95745 5.04753C2.6812 4.84878 2.7312 4.57128 2.72745 4.26628C2.7237 3.99378 2.7237 3.72128 2.71495 3.45003C2.70745 3.19878 2.7112 2.95378 2.7162 2.70753C2.71995 2.52628 2.6712 2.28628 2.7962 2.13628C3.00495 1.88378 3.40245 1.87753 3.6962 1.90003C4.17495 1.93753 4.7637 2.17378 4.69995 2.81003C4.6887 2.90378 4.65995 3.00253 4.61245 3.08003C4.56245 3.16253 4.4587 3.26128 4.50745 3.37503C4.5637 3.50378 4.7337 3.57378 4.8112 3.69878C4.90495 3.85128 4.9487 4.00003 4.9512 4.14003C4.9537 4.25003 4.93245 4.35878 4.8912 4.45753ZM7.3362 11.455H5.70995V9.49253H7.3362V11.455ZM7.3362 8.45253H5.70995V6.49003H7.3362V8.45253ZM7.46495 5.12878C7.3262 5.16378 7.0512 5.13503 6.98745 4.98503C6.8987 4.77503 6.93995 4.53128 6.6412 4.49253C6.5012 4.47378 6.2987 4.53503 6.23995 4.67378C6.17995 4.81878 6.22745 4.99753 6.07245 5.09628C5.96745 5.16378 5.81995 5.17378 5.6987 5.15378C5.4262 5.11003 5.3612 4.90878 5.4012 4.65878C5.4212 4.53753 5.44745 4.41628 5.4787 4.29628C5.5387 4.05253 5.6137 3.81128 5.6687 3.56753C5.7262 3.31253 5.7687 3.05503 5.8387 2.80128C5.9612 2.35003 6.18495 1.75503 6.77995 1.95503C7.03495 2.04003 7.1062 2.32253 7.1887 2.54753C7.3087 2.87253 7.3562 3.23003 7.4312 3.56753C7.4862 3.81128 7.55995 4.05253 7.6212 4.29628C7.6562 4.44128 7.72495 4.65878 7.70495 4.83753C7.68995 4.97503 7.6262 5.08628 7.46495 5.12878ZM10.2487 11.455H8.62245V9.49253H10.2487V11.455ZM10.2487 8.45253H8.62245V6.49003H10.2487V8.45253ZM10.6637 4.22253C10.6612 4.31878 10.6562 4.43253 10.64 4.54628C10.6162 4.72253 10.5487 5.02128 10.33 5.04253C10.2587 5.05003 10.1812 5.04378 10.1187 5.02503C9.76995 4.92253 9.70995 4.54628 9.50245 4.28878C9.4487 4.22253 9.4112 4.15253 9.36995 4.08128C9.32245 4.00003 9.22745 3.84003 9.11995 3.82628C8.98745 3.80878 9.01745 3.99378 9.0187 4.08503C9.02245 4.36003 9.1137 4.94628 8.7962 5.08503C8.32495 5.29128 8.20745 4.65128 8.19995 4.35878C8.18995 3.99378 8.1487 3.62878 8.1487 3.26378C8.1487 2.97878 8.11745 2.37378 8.36745 2.16753C8.77245 1.83378 9.01495 2.18378 9.27245 2.48253C9.38995 2.62003 9.4662 2.76128 9.56495 2.91253C9.6237 3.00253 9.7787 3.10003 9.8262 2.95503C9.9062 2.71753 9.82245 2.42003 9.94745 2.20003C10.1012 1.93128 10.54 2.00253 10.655 2.27128C10.6762 2.32003 10.6825 2.40253 10.6887 2.45878C10.7562 3.04003 10.6737 3.63628 10.6637 4.22253ZM13.1625 11.455H11.535V9.49253H13.1625V11.455ZM13.1625 8.45253H11.535V6.49003H13.1625V8.45253ZM13.4237 4.87128C13.3525 5.02628 13.1487 5.18003 12.975 5.11503C12.7775 5.04128 12.6787 4.84003 12.6037 4.65628C12.5325 4.47878 12.4475 4.28878 12.285 4.17253C12.2025 4.11253 12.1337 4.14503 12.0775 4.20753C11.8537 4.45128 12.2162 4.95128 11.8437 5.11503C11.7562 5.15253 11.63 5.14878 11.5362 5.13878C11.0825 5.09128 11.1775 4.63378 11.175 4.29878C11.1725 4.01128 11.1725 3.72628 11.1625 3.44503C11.1537 3.18753 11.1587 2.94003 11.165 2.69378C11.1662 2.58878 11.1737 2.50128 11.1862 2.39753C11.2012 2.26628 11.19 2.11503 11.3187 2.02878C11.4387 1.94878 11.6075 1.96878 11.7387 2.00378C11.9112 2.05003 11.9112 2.11628 11.9687 2.28003C12.0112 2.40378 12.0162 2.54753 12.0187 2.67878C12.0212 2.75628 12.035 2.86378 12.1312 2.86503C12.23 2.86503 12.3137 2.69753 12.37 2.63253C12.4237 2.56878 12.485 2.51128 12.5175 2.43503C12.6312 2.17753 12.9987 1.93128 13.26 2.17378C13.4862 2.38253 13.3125 2.67378 13.16 2.86753C13.0212 3.04503 12.7775 3.24128 12.8662 3.49378C12.9737 3.80378 13.2025 4.07253 13.3337 4.37378C13.375 4.46628 13.435 4.59378 13.4475 4.71253C13.45 4.76753 13.4462 4.82253 13.4237 4.87128Z" fill="#78A3AD"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_151_485">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>

                                <svg className='sm:w-[18px] sm:h-[18px] h-[15px] w-[15px]' width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_151_476)">
                                    <path d="M3.99951 16.9155V15.7904C3.99951 15.359 3.73533 15.0778 3.28253 15.0778C3.05617 15.0778 2.8109 15.1528 2.64109 15.3966C2.50909 15.1903 2.32046 15.0778 2.03747 15.0778C1.84875 15.0778 1.6602 15.134 1.50921 15.3403V15.1153H1.11304V16.9155H1.50921V15.9216C1.50921 15.6029 1.67902 15.4528 1.94319 15.4528C2.20719 15.4528 2.33937 15.6216 2.33937 15.9216V16.9155H2.73554V15.9216C2.73554 15.6029 2.92408 15.4528 3.16935 15.4528C3.43352 15.4528 3.56552 15.6216 3.56552 15.9216V16.9155H3.99951ZM9.86654 15.1153H9.22519V14.5714H8.82902V15.1153H8.47058V15.4715H8.82894V16.2967C8.82894 16.7093 8.99875 16.9531 9.45155 16.9531C9.62137 16.9531 9.80991 16.8968 9.94208 16.8218L9.82882 16.4842C9.71564 16.5592 9.58364 16.578 9.48928 16.578C9.30065 16.578 9.22519 16.4655 9.22519 16.2779V15.4715H9.86654V15.1153ZM13.2246 15.0777C12.9983 15.0777 12.8474 15.1903 12.753 15.3403V15.1153H12.3568V16.9155H12.753V15.9029C12.753 15.6029 12.885 15.4341 13.1303 15.4341C13.2057 15.4341 13.3001 15.4529 13.3755 15.4716L13.4887 15.0965C13.4133 15.0778 13.3001 15.0778 13.2246 15.0778M8.14986 15.2654C7.96114 15.1341 7.69705 15.0778 7.41406 15.0778C6.96134 15.0778 6.65953 15.3029 6.65953 15.6592C6.65953 15.9593 6.88589 16.128 7.28206 16.1843L7.47069 16.2031C7.67823 16.2405 7.79141 16.2968 7.79141 16.3906C7.79141 16.5218 7.64051 16.6156 7.37633 16.6156C7.11216 16.6156 6.90471 16.5218 6.77262 16.4281L6.58399 16.7281C6.79153 16.8781 7.07452 16.9531 7.35743 16.9531C7.88569 16.9531 8.18758 16.7094 8.18758 16.3718C8.18758 16.053 7.94232 15.8842 7.56497 15.828L7.37633 15.8092C7.20652 15.7904 7.07452 15.753 7.07452 15.6405C7.07452 15.5092 7.20652 15.4342 7.41406 15.4342C7.64051 15.4342 7.86687 15.5279 7.98004 15.5842L8.14986 15.2654ZM18.6768 15.0778C18.4503 15.0778 18.2994 15.1903 18.2051 15.3404V15.1153H17.8089V16.9156H18.2051V15.903C18.2051 15.603 18.3371 15.4342 18.5823 15.4342C18.6579 15.4342 18.7522 15.453 18.8277 15.4717L18.9409 15.0966C18.8654 15.0778 18.7522 15.0778 18.6768 15.0778ZM13.6208 16.0155C13.6208 16.5593 13.9981 16.9531 14.583 16.9531C14.8471 16.9531 15.0357 16.8969 15.2243 16.7469L15.0357 16.4281C14.8848 16.5406 14.7339 16.5968 14.5641 16.5968C14.2433 16.5968 14.017 16.3718 14.017 16.0155C14.017 15.678 14.2433 15.4529 14.5641 15.4342C14.7339 15.4342 14.8848 15.4904 15.0357 15.603L15.2243 15.2841C15.0357 15.1341 14.8471 15.0778 14.583 15.0778C13.9981 15.0778 13.6208 15.4717 13.6208 16.0155ZM17.2807 16.0155V15.1153H16.8845V15.3404C16.7525 15.1716 16.5638 15.0778 16.3186 15.0778C15.8092 15.0778 15.413 15.4717 15.413 16.0155C15.413 16.5593 15.8092 16.9531 16.3186 16.9531C16.5826 16.9531 16.7714 16.8594 16.8845 16.6906V16.9156H17.2807V16.0155ZM15.828 16.0155C15.828 15.6967 16.0356 15.4342 16.3751 15.4342C16.6958 15.4342 16.9223 15.678 16.9223 16.0155C16.9223 16.3343 16.6958 16.5968 16.3751 16.5968C16.0356 16.578 15.828 16.3343 15.828 16.0155ZM11.0929 15.0778C10.5646 15.0778 10.1873 15.4529 10.1873 16.0155C10.1873 16.5781 10.5645 16.9531 11.1117 16.9531C11.3758 16.9531 11.64 16.8781 11.8475 16.7094L11.6588 16.4281C11.5079 16.5406 11.3192 16.6156 11.1306 16.6156C10.8853 16.6156 10.6401 16.5031 10.5834 16.1842H11.9229V16.0343C11.9419 15.4529 11.6023 15.0778 11.0929 15.0778ZM11.0928 15.4154C11.338 15.4154 11.5079 15.5655 11.5455 15.8468H10.6023C10.64 15.603 10.8098 15.4154 11.0928 15.4154ZM20.9216 16.0155V14.4027H20.5255V15.3404C20.3934 15.1716 20.2047 15.0778 19.9595 15.0778C19.4501 15.0778 19.054 15.4717 19.054 16.0155C19.054 16.5593 19.4501 16.9531 19.9595 16.9531C20.2236 16.9531 20.4123 16.8594 20.5255 16.6906V16.9156H20.9216V16.0155ZM19.469 16.0155C19.469 15.6967 19.6765 15.4342 20.0161 15.4342C20.3368 15.4342 20.5632 15.678 20.5632 16.0155C20.5632 16.3343 20.3368 16.5968 20.0161 16.5968C19.6765 16.578 19.469 16.3343 19.469 16.0155ZM6.22546 16.0155V15.1153H5.82929V15.3404C5.6972 15.1716 5.50857 15.0778 5.2633 15.0778C4.75395 15.0778 4.35778 15.4717 4.35778 16.0155C4.35778 16.5593 4.75395 16.9531 5.2633 16.9531C5.52747 16.9531 5.71611 16.8594 5.82929 16.6906V16.9156H6.22546V16.0155ZM4.75395 16.0155C4.75395 15.6967 4.96149 15.4342 5.30103 15.4342C5.62175 15.4342 5.84819 15.678 5.84819 16.0155C5.84819 16.3343 5.62175 16.5968 5.30103 16.5968C4.96149 16.578 4.75395 16.3343 4.75395 16.0155Z" fill="black"/>
                                    <path d="M8.01782 1.44397H13.9604V12.0584H8.01782V1.44397Z" fill="#FF5F00"/>
                                    <path d="M8.39515 6.75122C8.39515 4.59461 9.41385 2.68173 10.9796 1.44397C9.82893 0.543829 8.37633 0 6.79164 0C3.03729 0 0 3.01925 0 6.75122C0 10.4832 3.03729 13.5024 6.79156 13.5024C8.37624 13.5024 9.82885 12.9586 10.9796 12.0584C9.41385 10.8394 8.39515 8.90783 8.39515 6.75122Z" fill="#EB001B"/>
                                    <path d="M21.9782 6.75122C21.9782 10.4831 18.9409 13.5024 15.1866 13.5024C13.6019 13.5024 12.1493 12.9586 10.9985 12.0584C12.5832 10.8207 13.5831 8.90783 13.5831 6.75122C13.5831 4.59461 12.5643 2.68173 10.9985 1.44397C12.1492 0.543829 13.6019 0 15.1866 0C18.9409 0 21.9782 3.03805 21.9782 6.75122Z" fill="#F79E1B"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_151_476">
                                    <rect width="22" height="17" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>

                                <svg className='sm:w-[18px] sm:h-[18px] h-[15px] w-[15px]' width="32" height="11" viewBox="0 0 32 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5496 3.50256C16.5314 5.02878 17.8325 5.88042 18.8126 6.38681C19.8196 6.90633 20.1579 7.23951 20.1539 7.70416C20.1464 8.41519 19.3506 8.72902 18.606 8.74121C17.3069 8.76255 16.5515 8.36933 15.951 8.07193L15.483 10.3937C16.0855 10.6881 17.2011 10.9448 18.358 10.9561C21.0736 10.9561 22.8503 9.5348 22.8599 7.33122C22.8705 4.53457 19.2114 4.37978 19.2364 3.12975C19.245 2.75072 19.5861 2.34624 20.3336 2.24339C20.7036 2.19144 21.725 2.15168 22.883 2.71705L23.3375 0.47067C22.7148 0.23026 21.9144 5.43594e-05 20.9179 5.43594e-05C18.3619 5.43594e-05 16.5641 1.44066 16.5496 3.50256ZM27.7048 0.193548C27.2089 0.193548 26.791 0.500223 26.6045 0.970838L22.7254 10.7911H25.439L25.979 9.20878H29.295L29.6082 10.7911H32L29.9129 0.193548H27.7048ZM28.0844 3.05633L28.8675 7.03581H26.7227L28.0844 3.05633ZM13.2595 0.193681L11.1205 10.7909H13.7064L15.8444 0.193416L13.2595 0.193681ZM9.43412 0.193681L6.74263 7.40663L5.65387 1.27354C5.52612 0.588886 5.02163 0.193548 4.46138 0.193548H0.061625L0 0.501284C0.90325 0.70909 1.9295 1.04426 2.55125 1.40289C2.93175 1.62196 3.04025 1.81346 3.16525 2.33404L5.22738 10.7911H7.96L12.1495 0.193548L9.43412 0.193681Z" fill="url(#paint0_linear_151_482)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_151_482" x1="1471.17" y1="32.9338" x2="1504.79" y2="-1092.15" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#222357"/>
                                    <stop offset="1" stop-color="#254AA5"/>
                                    </linearGradient>
                                    </defs>
                                </svg>

                                <svg className='sm:w-[18px] sm:h-[18px] h-[15px] w-[15px]' width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_151_483)">
                                    <path d="M20.5333 14H1.46667C1.07768 14 0.70463 13.8525 0.429577 13.5899C0.154523 13.3274 0 12.9713 0 12.6L0 1.4C0 1.0287 0.154523 0.672601 0.429577 0.410051C0.70463 0.1475 1.07768 0 1.46667 0L20.5333 0C20.9223 0 21.2954 0.1475 21.5704 0.410051C21.8455 0.672601 22 1.0287 22 1.4V12.6C22 12.9713 21.8455 13.3274 21.5704 13.5899C21.2954 13.8525 20.9223 14 20.5333 14ZM8.57511 6.02292C8.55837 6.02313 8.5419 6.0269 8.52689 6.03397C8.51187 6.04103 8.4987 6.05121 8.48833 6.06375C8.46426 6.08715 8.45048 6.11846 8.44983 6.15125C8.44983 6.1635 8.50972 6.33792 8.63806 6.6955L8.9155 7.469L9.04444 7.8295C9.18907 8.23394 9.26465 8.449 9.27117 8.47467C8.98665 8.81091 8.72944 9.16739 8.50178 9.541L8.47856 9.58183L8.47733 9.59642C8.47733 9.65475 8.52683 9.70258 8.58856 9.70258L8.60506 9.70142H8.60444H9.34878C9.38348 9.70121 9.41755 9.6926 9.44781 9.67637C9.47806 9.66015 9.50349 9.63685 9.52172 9.60867L9.52233 9.60808L11.9863 6.21367C11.9993 6.19738 12.0064 6.17753 12.0065 6.15708L12.0059 6.14833V6.14892C12.0051 6.11616 11.9913 6.08491 11.9674 6.06142C11.9571 6.04892 11.944 6.03877 11.9291 6.0317C11.9142 6.02464 11.8979 6.02084 11.8812 6.02058H11.1363C11.1015 6.0208 11.0673 6.02941 11.037 6.04563C11.0066 6.06185 10.9811 6.08514 10.9627 6.11333L10.9621 6.11392L9.93544 7.55242L9.51072 6.16875C9.49983 6.12659 9.47448 6.08911 9.43872 6.06226C9.40296 6.03542 9.35883 6.02075 9.31333 6.02058L9.29744 6.02117H9.29806L8.57511 6.02292ZM17.1172 5.95817H17.1013C16.6381 5.95817 16.2219 6.15008 15.9347 6.45458L15.9335 6.45575C15.6194 6.76587 15.444 7.18053 15.4446 7.61192V7.62767V7.62708C15.4434 7.644 15.4434 7.66442 15.4434 7.68425C15.4434 7.9975 15.5711 8.28275 15.7789 8.4945L15.7783 8.49392C15.8965 8.6038 16.0372 8.68922 16.1915 8.74483C16.3459 8.80044 16.5106 8.82503 16.6754 8.81708H16.6723C16.8783 8.81475 17.0738 8.7745 17.2523 8.70217L17.2425 8.70567C17.4228 8.64092 17.5756 8.54 17.6959 8.41167L17.6972 8.4105C17.6911 8.44375 17.6843 8.47175 17.6764 8.49858L17.6776 8.49275C17.6667 8.52847 17.6601 8.56526 17.6581 8.60242V8.60358C17.6581 8.70158 17.7002 8.75117 17.7839 8.75117H18.4507C18.4767 8.7534 18.5029 8.75062 18.5278 8.74301C18.5527 8.73539 18.5758 8.72309 18.5956 8.70683C18.6154 8.69057 18.6316 8.67068 18.6433 8.64834C18.6549 8.626 18.6617 8.60165 18.6633 8.57675V8.57617L19.0593 6.16875C19.0631 6.15059 19.0624 6.13185 19.0575 6.11396C19.0525 6.09607 19.0433 6.0795 19.0306 6.0655C19.0196 6.05104 19.0052 6.03928 18.9885 6.03117C18.9718 6.02306 18.9534 6.01883 18.9347 6.01883H18.1995C18.1097 6.01883 18.0528 6.12092 18.0345 6.32333C17.9269 6.19159 17.7855 6.08866 17.6239 6.02457C17.4623 5.96047 17.286 5.9374 17.1123 5.95758L17.1172 5.957V5.95817ZM6.13983 5.95817H6.12272C5.66011 5.95817 5.24394 6.15008 4.95794 6.45458L4.95672 6.45575C4.64258 6.76587 4.46724 7.18053 4.46783 7.61192V7.62767V7.62708C4.45974 7.78564 4.48522 7.94413 4.54276 8.09307C4.6003 8.24201 4.68872 8.37834 4.80272 8.49392L4.80211 8.49333C5.01844 8.694 5.31422 8.81767 5.64056 8.81767L5.69922 8.8165H5.69617C5.89906 8.81358 6.09156 8.77333 6.26694 8.70158L6.25717 8.70508C6.43989 8.63858 6.59511 8.53825 6.72039 8.4105L6.721 8.40992C6.69839 8.46708 6.68433 8.53358 6.6825 8.60242V8.60358C6.6825 8.70158 6.72528 8.75117 6.80839 8.75117H7.4745C7.50053 8.7534 7.52677 8.75062 7.55167 8.74301C7.57656 8.73539 7.5996 8.72309 7.61942 8.70683C7.63925 8.69057 7.65546 8.67068 7.6671 8.64834C7.67873 8.626 7.68556 8.60165 7.68717 8.57675V8.57617L8.08378 6.16875C8.08711 6.15072 8.0862 6.13221 8.08113 6.11456C8.07606 6.09691 8.06694 6.08055 8.05444 6.06667C8.04345 6.05221 8.02902 6.04045 8.01234 6.03234C7.99567 6.02422 7.97722 6.02 7.9585 6.02H7.22333C7.1335 6.02 7.07667 6.12208 7.05894 6.3245C6.95025 6.1938 6.80855 6.09162 6.64714 6.02754C6.48572 5.96346 6.3099 5.93959 6.13617 5.95817L6.14106 5.95758L6.13983 5.95817ZM19.9296 4.66667L19.9198 4.66608C19.8906 4.66598 19.8625 4.67637 19.8409 4.69518C19.8194 4.71399 19.8061 4.73984 19.8037 4.76758L19.1754 8.60533C19.1703 8.6238 19.1702 8.64323 19.1753 8.66173C19.1803 8.68023 19.1902 8.69718 19.2042 8.71092C19.2157 8.72398 19.2301 8.73446 19.2464 8.74162C19.2627 8.74877 19.2804 8.75243 19.2983 8.75233H19.9399L19.9595 8.7535C20.0081 8.7535 20.0548 8.73506 20.0891 8.70224C20.1235 8.66942 20.1428 8.62491 20.1428 8.5785V8.57733L20.7698 4.80608L20.7704 4.79325C20.7704 4.75999 20.759 4.72764 20.7381 4.70108V4.70167C20.7271 4.69049 20.7138 4.68157 20.6991 4.67545C20.6844 4.66934 20.6685 4.66615 20.6525 4.66608L20.6433 4.66667H19.9296ZM12.7979 4.66667C12.7717 4.66338 12.745 4.66541 12.7196 4.67263C12.6943 4.67984 12.6708 4.69207 12.6507 4.70853C12.6307 4.72499 12.6145 4.7453 12.6032 4.76814C12.5919 4.79098 12.5858 4.81583 12.5852 4.84108L11.9576 8.60475C11.9544 8.62264 11.9553 8.641 11.9602 8.65853C11.9652 8.67606 11.9741 8.69234 11.9863 8.70625C11.9971 8.72076 12.0114 8.73258 12.028 8.74071C12.0446 8.74883 12.063 8.75302 12.0817 8.75292H12.8792C12.915 8.75289 12.9496 8.74101 12.9773 8.71931C13.0049 8.69761 13.0238 8.66743 13.0307 8.63392V8.63275L13.2049 7.56292C13.2101 7.51607 13.2345 7.47309 13.2727 7.44333C13.3144 7.41117 13.3651 7.39041 13.4182 7.38325H13.42C13.4695 7.3745 13.5263 7.36983 13.5844 7.36925C13.6357 7.36925 13.6974 7.37217 13.7683 7.37858C13.8458 7.38709 13.9238 7.39099 14.0018 7.39025C14.4495 7.39095 14.8809 7.22985 15.2093 6.93933L15.2081 6.9405C15.3719 6.77474 15.4983 6.57872 15.5797 6.36453C15.661 6.15033 15.6955 5.9225 15.6811 5.69508V5.69975C15.6943 5.54935 15.6672 5.39823 15.6026 5.26051C15.5379 5.12279 15.4377 5.00297 15.3114 4.91225L15.3089 4.9105C15.0173 4.73448 14.6757 4.64909 14.3312 4.66608H14.3348L12.7979 4.66667ZM1.80889 4.66667C1.78333 4.66405 1.75747 4.66659 1.733 4.67413C1.70854 4.68167 1.686 4.69404 1.66687 4.71044C1.64774 4.72683 1.63243 4.74688 1.62194 4.76929C1.61146 4.7917 1.60602 4.81596 1.606 4.8405V4.84167L0.977778 8.60533C0.974501 8.62323 0.975375 8.64159 0.980338 8.65913C0.9853 8.67666 0.994231 8.69295 1.0065 8.70683C1.0173 8.72135 1.0316 8.73317 1.04819 8.74129C1.06478 8.74941 1.08318 8.7536 1.10183 8.7535H1.83761C1.86384 8.75678 1.89051 8.75475 1.91586 8.74754C1.94121 8.74033 1.96469 8.72809 1.98476 8.71163C2.00483 8.69518 2.02103 8.67487 2.03232 8.65203C2.04361 8.62919 2.04973 8.60433 2.05028 8.57908L2.22444 7.56467C2.22974 7.51799 2.25384 7.4751 2.29167 7.44508C2.33336 7.41292 2.38403 7.39216 2.43711 7.385H2.43894C2.49302 7.3759 2.54781 7.37121 2.60272 7.371H2.60333C2.65467 7.371 2.71578 7.37392 2.78667 7.38033C2.86395 7.38882 2.94171 7.39271 3.0195 7.392C3.48578 7.392 3.90989 7.22108 4.22767 6.94108L4.22644 6.94225C4.39014 6.77645 4.51655 6.58042 4.59789 6.36624C4.67924 6.15206 4.7138 5.92425 4.69944 5.69683V5.7015C4.7126 5.5511 4.68558 5.39998 4.62092 5.26226C4.55626 5.12454 4.45607 5.00472 4.32972 4.914L4.32728 4.91225C4.03693 4.73688 3.69696 4.65132 3.35378 4.66725H3.35744L1.80889 4.66667ZM17.0769 8.07042L17.0476 8.071C16.8914 8.07114 16.7403 8.01844 16.621 7.92225L16.6222 7.92283C16.5671 7.87433 16.5231 7.81544 16.493 7.74987C16.4629 7.68431 16.4474 7.6135 16.4474 7.54192L16.4481 7.51567V7.49992C16.4481 7.28175 16.5403 7.084 16.6901 6.9405C16.8373 6.79642 17.0427 6.70717 17.27 6.70717H17.2902H17.2889L17.3097 6.70658C17.4741 6.70658 17.6238 6.76433 17.7387 6.85942L17.7381 6.85883C17.7949 6.90899 17.8401 6.96981 17.871 7.03747C17.902 7.10514 17.9179 7.17818 17.9178 7.252L17.9172 7.28V7.27883V7.29283C17.9172 7.50808 17.8237 7.70292 17.6727 7.84117C17.5965 7.91367 17.506 7.97113 17.4065 8.01027C17.307 8.0494 17.2004 8.06944 17.0928 8.06925H17.0775L17.0769 8.07042ZM6.08972 8.07042L6.05917 8.071C5.89906 8.071 5.75178 8.015 5.63933 7.92225L5.63994 7.92283C5.58621 7.87378 5.54345 7.81484 5.51424 7.74957C5.48504 7.6843 5.47001 7.61406 5.47006 7.54308L5.47067 7.51567V7.49992C5.47067 7.28175 5.56294 7.084 5.71267 6.9405C5.85994 6.79642 6.06467 6.70717 6.292 6.70717H6.31339H6.31217L6.33294 6.70658C6.49733 6.70658 6.64706 6.76433 6.76194 6.85942L6.76133 6.85883C6.81792 6.90895 6.86304 6.9697 6.89386 7.03726C6.92467 7.10482 6.94051 7.17773 6.94039 7.25142L6.93978 7.28V7.27883V7.29925C6.93978 7.5145 6.84628 7.70817 6.69533 7.84642C6.5387 7.9903 6.32972 8.0706 6.11233 8.07042H6.08972ZM13.3662 6.57708L13.5306 5.59067C13.5319 5.57614 13.5362 5.56201 13.5433 5.54907C13.5503 5.53614 13.5599 5.52465 13.5716 5.51528C13.5833 5.50591 13.5968 5.49883 13.6114 5.49445C13.626 5.49006 13.6413 5.48847 13.6565 5.48975H13.8301L13.8673 5.48917C13.9731 5.48917 14.0776 5.49617 14.1796 5.50958L14.168 5.50842C14.2627 5.52475 14.3452 5.56558 14.41 5.62392C14.4469 5.65722 14.4763 5.69737 14.4964 5.74191C14.5165 5.78645 14.5268 5.83443 14.5267 5.88292L14.5261 5.90508V5.90392C14.539 6.00137 14.5264 6.10034 14.4895 6.19203C14.4526 6.28373 14.3925 6.3653 14.3147 6.4295L14.3141 6.43008C14.1193 6.53617 13.8961 6.58488 13.6724 6.57008H13.6761L13.3674 6.57942L13.3662 6.57708ZM2.37906 6.57708L2.54344 5.59067C2.54467 5.57612 2.54892 5.56194 2.55593 5.54897C2.56294 5.536 2.57258 5.52448 2.58429 5.51509C2.596 5.5057 2.60955 5.49863 2.62415 5.49428C2.63875 5.48993 2.65411 5.48839 2.66933 5.48975H2.85206C3.04771 5.47607 3.24357 5.51358 3.41856 5.59825L3.41244 5.59533C3.52794 5.66592 3.56706 5.81583 3.52856 6.04217C3.52561 6.12667 3.50141 6.20925 3.45802 6.28296C3.41463 6.35666 3.3533 6.41932 3.27922 6.46567L3.27739 6.46683C2.98774 6.56865 2.6776 6.60615 2.3705 6.5765L2.37906 6.57708Z" fill="black"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_151_483">
                                    <rect width="22" height="14" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                        <p className='my-2 text-sm'>Securely pay with your credit card</p>
                        <div className='relative'>
                            <Link href="/checkout" className='top-[5px] right-[0px] bg-[#AF0101] absolute rounded p-2 text-sm text-[#fff]'>
                                Confirm Order
                            </Link>
                        </div>
                    </section>

                </section>

            </section>

        </div>
    )
}

export default Checkout
