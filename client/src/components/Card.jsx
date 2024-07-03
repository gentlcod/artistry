import React from 'react'
import { download } from '../assets'
import {downloadImage} from '../utils'


const Card = ({_id, name, prompt, photo}) => {
  return (
    <div className='card 
    rounded-xl group relative 
    shadow-card hover:shadow-cardhover'>
      <img 
      src={photo}
      alt={prompt}
      className='w-full h-auto object-cover rounded-xl'
      />

      <div className='group-hover:flex flex-col max-h-[94.5%]
      hidden absolute left-0 bottom-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'> 
      <p className='text-white overflow-y-auto text-md'>
        {prompt}
      </p>

      <div className='mt-5 flex items-center justify-between gap-2 '>
        <div className='flex items-center gap-2'>
          <div className='w-7 h-7 rounded-full bg-green-700 
          flex justify-center itmes-center text-white text-sm 
          font-bold object-cover'>
            {name[0]}
          </div>

          <p className='text-white text-sm'>
            {name}
          </p>
        </div>

        <button 
        type='button'
        onClick={() => downloadImage(_id, photo)}
        className='outline-none bg-transparent border-none'
        >
          <img 
          src={download}
          alt='download'
          className='w-6 h-6 object-contain invert' 
          />
        </button>
      </div>
      </div>

    </div>
  )
}

export default Card