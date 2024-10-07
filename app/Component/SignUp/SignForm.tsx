


import React from 'react'

const SignForm = () => {
  return (
    <div className='bg-white w-[500px] p-10 rounded-md'>
        

        <p className='w-full text-center mb-10 text-2xl font-bold'>SignUp</p>
        <form className='flex flex-col gap-5 items-center'>
            <div className='flex items-center gap-4 '>
            <label htmlFor="name" className='w-[100px] font-bold'>Name</label>
            <input className="bg-gray-200 p-2" type="text" id='name' placeholder='Name' />
            </div>

            <div className='flex items-center gap-4 '>
            <label htmlFor="name" className='w-[100px] font-bold'>Password</label>
            <input className="bg-gray-200 p-2" type="text" id='name' placeholder='Name'/>
            </div>

    
                <button className='font-bold bg-[#006BFF] text-white w-4/5 h-16 rounded-md'>Login</button>
          
        </form>
    </div>
  )
}

export default SignForm;