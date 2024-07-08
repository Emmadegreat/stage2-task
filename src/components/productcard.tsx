import React,{ChangeEvent, FC, useState} from 'react'

import Button from './button'
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from 'next/image'
import Link from 'next/link'

//import { ProductList } from '@/productlist'


interface productsProps{
    imgUrl: string,
    name: string,
    price:string,
}

const ProductCard: React.FC<productsProps> = ({ imgUrl, name, price }) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const ToggleModal = (): void => setShowModal(!showModal)

    return (
        <div className='px-2 py-4'>

            <div className='bg-[#fff] rounded-xl shadow-2xl w-full'>

                <Image
                    src={imgUrl}
                    alt={name}
                    className='w-[100%] h-auto'
                    width={100}
                    height={100}
                />
                <div className='flex flex-col items-center mt-[-0.7rem] px-2'>
                    <p className='text-[16px] tex-center'>{name}</p>
                    <p>₦{price}</p>

                    <button
                        onClick={ToggleModal}
                        className='group hover:text-[#fff] bg-[#EBADAD] rounded px-6 mb-4 mt-1 items-center py-2 flex gap-4 hover:bg-[#AF0101]'>
                        <span className='group-hover:text-[#fff]'>
                            <svg
                                width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.994 5.71428H9.59517C9.25535 5.71428 8.97069 5.60457 8.7412 5.38514C8.51172 5.16571 8.39658 4.89447 8.39578 4.57143C8.39498 4.24838 8.51012 3.97714 8.7412 3.75771C8.97229 3.53828 9.25694 3.42857 9.59517 3.42857H11.994V1.14286C11.994 0.81905 12.1091 0.547813 12.3394 0.329146C12.5697 0.11048 12.8543 0.000765845 13.1934 3.94088e-06C13.5324 -0.000757963 13.8174 0.108956 14.0485 0.329146C14.2796 0.549336 14.3944 0.820574 14.3928 1.14286V3.42857H16.7916C17.1314 3.42857 17.4164 3.53828 17.6467 3.75771C17.877 3.97714 17.9917 4.24838 17.9909 4.57143C17.9901 4.89447 17.875 5.16609 17.6455 5.38628C17.416 5.60647 17.1314 5.71581 16.7916 5.71428H14.3928V7.99999C14.3928 8.3238 14.2776 8.59542 14.0473 8.81485C13.817 9.03428 13.5324 9.14361 13.1934 9.14285C12.8543 9.14209 12.5697 9.03237 12.3394 8.81371C12.1091 8.59504 11.994 8.3238 11.994 7.99999V5.71428ZM7.19638 24C6.53671 24 5.9722 23.7764 5.50283 23.3291C5.03347 22.8819 4.79839 22.3436 4.79759 21.7143C4.79679 21.0849 5.03187 20.547 5.50283 20.1005C5.9738 19.6541 6.53831 19.4301 7.19638 19.4285C7.85445 19.427 8.41937 19.651 8.89113 20.1005C9.36289 20.5501 9.59757 21.088 9.59517 21.7143C9.59278 22.3405 9.35809 22.8788 8.89113 23.3291C8.42416 23.7794 7.85925 24.003 7.19638 24ZM19.1903 24C18.5307 24 17.9662 23.7764 17.4968 23.3291C17.0274 22.8819 16.7924 22.3436 16.7916 21.7143C16.7908 21.0849 17.0258 20.547 17.4968 20.1005C17.9678 19.6541 18.5323 19.4301 19.1903 19.4285C19.8484 19.427 20.4133 19.651 20.8851 20.1005C21.3569 20.5501 21.5915 21.088 21.5891 21.7143C21.5867 22.3405 21.3521 22.8788 20.8851 23.3291C20.4181 23.7794 19.8532 24.003 19.1903 24ZM2.3988 3.42857H1.1994C0.859571 3.42857 0.574915 3.31886 0.34543 3.09943C0.115946 2.88 0.000803733 2.60876 4.13585e-06 2.28571C-0.000795462 1.96267 0.114347 1.69143 0.34543 1.472C0.576514 1.25257 0.861171 1.14286 1.1994 1.14286H3.1784C3.39829 1.14286 3.60819 1.2 3.80809 1.31429C4.00799 1.42857 4.15791 1.59048 4.25786 1.8L9.02546 11.4286H17.4212L21.769 4C21.869 3.80952 22.0089 3.66667 22.1888 3.57143C22.3687 3.47619 22.5686 3.42857 22.7885 3.42857C23.2483 3.42857 23.5933 3.61447 23.8236 3.98628C24.0539 4.35809 24.0587 4.73409 23.838 5.11428L19.5502 12.5143C19.3303 12.8952 19.0356 13.1905 18.6662 13.4C18.2968 13.6095 17.8918 13.7143 17.4512 13.7143H8.51572L7.19638 16H20.3897C20.7296 16 21.0146 16.1097 21.2449 16.3291C21.4752 16.5486 21.5899 16.8198 21.5891 17.1428C21.5883 17.4659 21.4732 17.7375 21.2437 17.9577C21.0142 18.1779 20.7296 18.2872 20.3897 18.2857H7.19638C6.29683 18.2857 5.61198 17.9143 5.14182 17.1714C4.67165 16.4286 4.65686 15.6762 5.09744 14.9143L6.71662 12.1143L2.3988 3.42857Z" fill="currentColor"/>
                            </svg>
                        </span>
                        Add to Cart
                    </button>
                </div>
            </div>



            {showModal && (

                <div
                    onClick={ToggleModal}
                    className='fixed bg-opacity-40 inset-0 overflow-auto flex items-center w-full z-[2000] h-[100vh] bg-[#69444442] top-[70px] bottom-[60px] left-0 right-0'>

                    <div className='z-[1500] flex justify-around items-center md:right-[25%] lg:w-[60%] pr-[5rem] p-6 relative bottom-[8%] left-[20%]
                        bg-[#fff] shadow-lg' >

                        <div className='flex flex-col bg-[#fff]'>
                            <p className='text-[0.8rem]'>Item Secured! You&apos;re One Step Closer to Checkout</p>

                            <Image
                                src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1720285742/timbu-shop/prod1_f1dxpk.svg"
                                alt=''
                                width={100}
                                height={100}
                                className='h-[170px] w-[170px]'
                            />
                            <div className='flex flex-col'>
                                <p className='sm:text-[0.8rem] text-[0.8rem] font-[500]'>Music System Speaker</p>
                                <p className='ml-8 sm:text-[0.8rem] text-[0.8rem] font-[400]'>QTY: 1</p>
                                <p className='sm:text-[0.8rem] text-[0.8rem] font-[400]'>Total: ₦80,000</p>
                            </div>
                        </div>

                        <div className='flex flex-col bg-white'>
                            <p className='text-[0.8rem]'>You have just 1 item in your cart</p>
                            <p className='text-center text-sm font-[400]'>₦80,000.00</p>
                            <Link href="/"
                                className='hover:bg-[#AF0101] hover:text-[#fff] w-[200px] p-2 mt-3 text-sm text-[#000] text-center rounded border-[1px] border-[#B2A9A9]'>
                                Continue Shopping
                            </Link>
                            <Link href="/cart"
                                className='hover:bg-[#AF0101] hover:text-[#fff] w-[200px] p-2 my-3 text-sm text-[#000] text-center rounded border-[1px] border-[#B2A9A9]'>
                                View Vart
                            </Link>
                            <Link href="/checkout"
                                className='hover:bg-[#ad5b5b] w-[200px] text-[#fff] text-center rounded bg-[#AF0101] p-2 text-sm'
                            >Proceed to Checkout</Link>
                        </div>
                    </div>




                </div>
            )}

        </div>
    )
}

export default ProductCard