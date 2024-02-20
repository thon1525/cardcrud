"use client"

import AddContext from '@/components/addcontext/Addcontext'
import React, { useContext, useState } from 'react';
import { Input } from './Input';

const SearchInput = () => {
    
  const { setSearch } = useContext(AddContext);
  return (
    <div className="flex justify-center">
        <Input
           className="bg-gray-50 border border-gray-300 w-[300px] h-[40px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        name="username"
        placeholder="Search for a user..."
        onChange={(e) => setSearch(e.target.value)}
        label=""
        error={''}
      />
     
      <button className='w-[100px] h-[40px] text-white bg-blue-900 rounded-md ml-2'>Search</button>
     
    </div>
  )
}

export { SearchInput}
