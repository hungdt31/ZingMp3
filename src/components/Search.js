import React from 'react'
import icons from '../ultis/icons'
const {TbDatabaseSearch} = icons
const Search = () => {
  return (
    <div className='w-full flex items-center'>
        <span className='h-10 pl-4 flex items-center rounded-l-[20px] bg-[#2f2639]'><TbDatabaseSearch size={24}/></span>
        <input
            type="text"
            className='outline-none bg-[#2f2639] px-4 py-2 rounded-r-[20px] h-10 w-full text-white'
            placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát, ...'
        />
    </div>
  )
}

export default Search