import React from 'react'

const SearchBar = () => {
  return (
    <div className=' bg-white flex-1 rounded-md h-full w-full '>
      <div className='h-full'>
        <input type="text" placeholder='ابحث عن لعبة'  className='pr-3 h-full flex justify-center items-center w-full'/>
      </div>
    </div>
  )
}

export default SearchBar
