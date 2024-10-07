"use client";
import React from 'react';
import { task, todoListTaskPlaceHolder } from '../Component/const/todoListPlaceHolder';
import { Delete, EllipsisVertical, Trash2 } from 'lucide-react';
import { useState } from 'react';
import FormData from '../Component/ui/FormData';
import Header from '../Component/ui/Header';
import { Box, Modal, Typography } from '@mui/material';

const TaviTask = () => {

    const Names = ['John', 'Eddie', 'Silvie', 'Lucas' ];
    const randNamesSelect = Math.floor(Math.random() * Names.length);
    
    const date = new Date();
    const hours = date.getHours();
    const amPm:string = hours < 12 ? "am" : "pm";
    const weekday = date.getDay();

    const time = hours % 12;
    const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
    const monthsName = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
      ];
      const Month = date.getMonth();
    const minutes = date.getMinutes();

   const [DummyData, setDummyData] = useState(
        [{
            id:'1',
            task:'Washing my car',
            weekday: `${dayNames[weekday]}`,
            time:`${time}:${minutes} ${amPm}`,
            month:`${monthsName[Month]}`,
            status: true,
            
        },
        {
            id:'2',
            task:'Talk to my girl',
            time:`${time}:${minutes} ${amPm}`,
            weekday: `${dayNames[weekday]}`,
            status: false,
            
        },
        {
            id:'3',
            task:'Flyaway',
            time:`${time}:${minutes} ${amPm}`,
            weekday: `${dayNames[weekday]}`, 
            status: true,
            
        },
        {
            id:'4',
            task:'Holidays',
            time:`${time}:${minutes} ${amPm}`,
            weekday: `${dayNames[weekday]}`,
            status: false,
            
        },
        {
            id:'5',
            task:'Zumba class',
            time:`${time}:${minutes} ${amPm}`,
            weekday: `${dayNames[weekday]}`, 
            status: true,
            
        },
  
    ]);

//MainSection 

const handleDeleteTask = (value:string)=>{

    console.log("deleted " + value);
     const deleted = DummyData.filter(item => item.id !== value);



    setDummyData(deleted);

    console.log(DummyData);
    


    
}



  return (
    <section className=' h-screen flex flex-col items-center justify-center '>

        <div className='w-[900px] h-[70vh] bg-white p-10 rounded-md'>
        <Header />
        <FormData />
        
{ DummyData   ? (        <div className='mt-5'>
            {DummyData.map((item)=>(
                <div className='flex  text-2xl mt-2 items-center justify-between hover:bg-gray-200 '>
                    <div className='flex items-center gap-5 w-3/5'>
                        <input className='h-10 w-8' type="checkbox" />
                       <p className=''> {item.task} </p>
                    </div>

                    <div className='flex gap-2 mr-5 text-gray-500 text-sm'>
                        <p>{item.weekday.slice(0,3)}</p>
                        <p>{item.time}</p>
                        <p>{item.month}</p>
                    </div>
                    


                    <div className='flex gap-5'>
                    <div 


                    onClick={() => handleDeleteTask(item.id)}
                    className='flex items-center'>
                        {React.createElement(Trash2,{
                            style:{
                                color:"#006BFF"
                            }
                        })}
                    </div>

                    <div 
                   
                    className='flex items-center'>
                        {React.createElement(EllipsisVertical,{
                            style:{
                                color:"#006BFF"
                            }
                        })}
                    </div>



                    
                    </div>
                    </div>
            ))}

        </div>) : <div className='mt-3 text-center h-[200px] flex items-center justify-center text-xl text-gray-400'>
            <p>Sorry we don't have any task yet.</p>
        </div>}
        </div>
  

    </section>
    
  )
}

export default TaviTask;