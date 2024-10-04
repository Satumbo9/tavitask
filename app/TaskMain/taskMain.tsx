"use client";
import React from 'react';
import { task, todoListTaskPlaceHolder } from '../Component/const/todoListPlaceHolder';
import { Delete } from 'lucide-react';
import { useState } from 'react';


const TaviTask = () => {

    const date = new Date();
    const [aux, setAux] = useState<task>();
    const [data, setData] = useState<task[]>(
        [
            {
                id:'1',
                task:'Washing my car',
                formateDate: (`${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()} `),
                status: true,
                icon: 'delete'
            },
            {
                id:'2',
                task:'Talk to my girl',
                formateDate: (`${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()} `),
                status: false,
                icon: 'delete'
            },
            {
                id:'3',
                task:'Go to school',
                formateDate: (`${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()} `),
                status: true,
                icon: 'delete'
            }
        ] 
    );

    console.log("DAY: " + date.getDay());
    const handleClick = (value: string) => {
        const removed = data.filter(item => item.id !== value);
        setData(removed)
        console.log(value);
    }

  return (
    <div>tavitask Page

        {data.map((items)=> {
            if(items.status)
                {
                return (
                <div key={items.id} className='flex gap-2 bg-gray-200 my-5 mx-10'>
                    <p>{items.task}</p>
                    <p>{items.formateDate}</p>
                    <Delete className='cursor-pointer' onClick={() => handleClick(items.id)}/>
                </div>
                )
            }
            
        })}
        
    </div>
    
  )
}

export default TaviTask;