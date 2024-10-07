


import { CalendarClock } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div>
    <div className='flex justify-between '>
        <div className='flex items-center'>
            <p className='font-bold text-3xl'>taviTask</p>
        </div>
       <div className='flex gap-2'>
        <div className='text-center flex items-center flex-col'>
            <p className='text-xl font-bold'>Today</p>
            <p className=' text-[#006BFF]'>17 Feb 2022</p>
        </div>
        <div className='flex items-center'>
            {React.createElement(CalendarClock,{
                style:{
                    width:40,
                    height:40,
                    color:"#006BFF"
                }
            })}
        </div>
       </div>
    </div>
</div>
  )
}

export default Header