import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { motion } from 'framer-motion'
const CartContainer = () => {
    return (
        <div className='w-full fixed top-0 right-0 md:w-375 h-screen z-[101] bg-white drop-shadow-md flex flex-col'>
            <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
                <motion.div whileTap={{ scale: 0.75 }}>
                    <MdOutlineKeyboardBackspace className='text-textColor text-3xl' />
                </motion.div>
                <p className=' text-textColor text-lg font-semibold'>Cart</p>
                <motion.p whileTap={{ scale: 0.75 }} className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-textColor text-base font-semibold'>Clear <RiRefreshFill />{" "}</motion.p>
            </div>
            <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
                <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
                    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
                        <img src='' alt='' className='w-20 h-20 max-w-[60px] rounded-full object-contain' />
                        <div className='flex flex-col gap-2'>
                            <p className='text-base text-gray-50'></p>
                            <p className='text-sm block text-gray-300 font-semibold'></p>
                        </div>
                        <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                            <motion.div whileTap={{ scale: 0.75 }}>
                                <BiMinus className='text-gray-50' />
                            </motion.div>
                            <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>
                                1
                            </p>
                            <motion.div whileTap={{ scale: 0.75 }}>
                                <BiPlus className='text-gray-50' />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
                    <div className="w-full flex items-center justify-between">
                        <p className="text-gray-400 text-lg">Sub Total</p>
                        <p className="text-gray-400 text-lg">$ </p>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <p className="text-gray-400 text-lg">Delivery</p>
                        <p className="text-gray-400 text-lg">$ 2.5</p>
                    </div>
                    <div className="w-full border-b border-gray-600 my-2"></div>

                    <div className="w-full flex items-center justify-between">
                        <p className="text-gray-200 text-xl font-semibold">Total</p>
                        <p className="text-gray-200 text-xl font-semibold">
                            $
                        </p>
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        type="button"
                        className="w-full p-2 rounded-full bg-gradient-to-tr from-green-400 to-green-600 text-gray-50 text-lg my-2 hover:shadow-lg"
                    >
                        Check Out
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default CartContainer