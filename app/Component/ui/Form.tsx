import React from 'react'






const Form = () => {
  return (
    <form className='flex gap-4 items-center justify-center '>
        <label htmlFor="task"></label>
        <input
        className='px-5' 
        type="text" name="task" id="task" placeholder='Add an task' />
        <button>Add</button>

    </form>
  )
}

export default Form