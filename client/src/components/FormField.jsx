import React from 'react'

const FormField = ( { label, name, type , labelName,
   placeholder, value, handleChange, isSurpriseMe,
    handleSurpriseMe } ) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label 
        htmlFor={name}
        className='block text-sm font-medium text-accent'
        >
          {labelName}

        </label>

        {isSurpriseMe &&  (
          <button
          type='button'
          onClick={handleSurpriseMe}
          className='font-semibold text-xs 
          bg-[#ececf1] py-1 px-2 rounded-[5px] text-black'
          >
            Surprise me
          </button>
        )}
      </div>
      <input 
      type={type}
      id={name}
      name ={name}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      required
      className='bg-primary border border-gray-300
       text-accent text-sm rounded-lg 
       focus:ring-[#4583e7] focus:border-[#4583e7]
       outline-none block w-full p-3'
      
      />
    </div>
  )
}

export default FormField