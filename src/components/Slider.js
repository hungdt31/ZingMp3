import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import icons from '../ultis/icons';

const Slider = () => {
    const {SlArrowLeft, SlArrowRight} = icons
    const { banner } = useSelector(state => state.app);
    console.log('Đây là thông tin slider', banner);
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Thực hiện các tác vụ bạn muốn lặp lại ở đây
            handleClick1()
        }, 4000);
    
        // Hủy việc lặp lại khi component bị unmount hoặc khi dependency thay đổi.
        return () => clearInterval(intervalId);
      }, []); 
    const handleClick1 = () => {
        const item = document.querySelector('.parent')
        const item2 = document.querySelector('.item:nth-child(1)')
        item.appendChild(item2)
        const item3 = document.querySelector('.item:nth-child(1)')
        item3.classList.add('animate-slide-in-right')
        setTimeout(()=>{
            item3.classList.remove('animate-slide-in-right')
        },1000)
        
    }
    const handleClick2 = () => {
        const length = banner.length
        const item = document.querySelector('.parent')
        const item2 = document.querySelector(`.item:nth-child(${length})`)
        item.prepend(item2)
        const item3 = document.querySelector('.item:nth-child(1)')
        item3.classList.add('animate-slide-in-right')
        setTimeout(()=>{
            item3.classList.remove('animate-slide-in-right')
        },1000)
        
    }
    return (
        <div className='flex gap-4 w-full overflow-hidden px-[59px] pt-8 '>
            <div className='prev-button mr-[-5%] mt-[6%] z-10 '>
                <button 
                onClick={()=>handleClick2()}
                className='opacity-20 p-2 rounded-full bg-slate-400'>
                    <SlArrowLeft
                    size={24}
                    color='#fff'
                    />
                </button>
            </div>
            <div className='flex gap-4 parent'>
            {banner?.map(item => (
                <div className='w-1/3 item'>
                    <img
                    alt={item.encodeId}
                    key={item.encodeId}
                    src={item.banner}
                    className='w-full object-contain rounded'
                    />
                </div>
            ))}
            </div>
            <div className='next-button ml-[-5%] mt-[6%] z-10'>
                <button
                onClick={()=>handleClick1()}
                className='opacity-20 p-2 rounded-full bg-slate-400'>
                    <SlArrowRight
                        size={24}
                        color='#fff'
                    />
                </button>
            </div>
        </div>
    );
};

export default Slider;
