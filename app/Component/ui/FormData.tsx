
import React from 'react';
import {z} from 'zod';
import Form from './Form';
import { Plus, SquarePlus } from 'lucide-react';

   


const FormData = () => {
  return (
    <form className='flex gap-5 items-center justify-center mt-4'>
        <input
        className='px-5  w-full h-11 bg-gray-200' 
        type="text" name="task" id="task" placeholder='Add an task ' />
 
    

    <div>
    {React.createElement(Plus,{
        style:{
            width:45,
            height:45,
            background:"#006BFF",
            padding:"5px",
           color:"white"
        }
     })}
     </div>

        {/* <button className='w-[70px] bg-red-300 h-11'>+</button> */}


    </form>
  )
}

export default FormData