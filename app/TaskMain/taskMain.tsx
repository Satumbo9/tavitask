"use client";
import React from 'react';
import { task, todoListTaskPlaceHolder } from '../Component/const/todoListPlaceHolder';
import { Delete, Trash2 } from 'lucide-react';
import { useState } from 'react';
import FormData from '../Component/ui/FormData';
import Header from '../Component/ui/Header';

const TaviTask = () => {

    const Names = ['John', 'Eddie', 'Silvie', 'Lucas' ];
    const randNamesSelect = Math.floor(Math.random() * Names.length);

//MainSection 

  return (
    <section className=' h-screen flex flex-col items-center justify-center '>

        <div className='w-[600px] bg-white p-10 rounded-md'>
        <Header />
        <FormData />
        <div className='mt-5'>
            {todoListTaskPlaceHolder.map((item)=>(
                <div className='flex  text-2xl mt-2 items-center justify-between '>
                    <div className='flex items-center gap-5'>
                        <input className='h-10 w-8	' type="checkbox" />
                       <p className=''> {item.task} </p>
                    </div>

                    <div className='flex items-center'>
                        {React.createElement(Trash2,{
                            style:{
                                color:"#006BFF"
                            }
                        })}
                    </div>

                    
                    </div>
            ))}

        </div>
        </div>
  

    </section>
    
  )
}

export default TaviTask;