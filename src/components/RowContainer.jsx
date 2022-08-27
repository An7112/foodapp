import React, { useEffect, useRef } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
const RowContainer = ({ flag, data, scrollValue }) => {
    const rowContainer = useRef();
    useEffect(() => {
        rowContainer.current.scrollLeft = scrollValue;
    }, [scrollValue]);
    return (
        <div ref={rowContainer} className={`w-full flex scroll-smooth items-center gap-3 my-12 ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden'}`}>
            {data && data.map((item) => (
                <div key={item.id} className='w-275 h-[175px] min-w-[275px] md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 md:w-300 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className='w-full flex items-center justify-between'>
                        <motion.img whileHover={{ scale: 1.2 }} src={item.imageURL} className="w-40 h-full -mt-8 drop-shadow-2xl" />
                        <motion.div whileTap={{ scale: 0.75 }} className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                            <MdShoppingBasket className='text-white' />
                        </motion.div>
                    </div>
                    <div className='w-full flex flex-col items-end justify-end absolute bottom-0 right-2'>
                        <p className='text-textColor font-semibold text-base md:text-lg'>{item.title}</p>
                        <p className='mt-0 text-sm text-gray-500'>{item.calories} Calories</p>
                        <div className='flex items-center gap-8'>
                            <p className='text-lg text-headingColor font-semibold'><span className='text-sm text-red-500'>$</span> {item.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RowContainer