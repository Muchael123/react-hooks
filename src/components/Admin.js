import React, { useState } from 'react'
import initialItems from './utils';
import { useMemo } from 'react';


function Admin() {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems)
    const selectedItem = useMemo(() => items.find((item) => item.isSelected), [items]);
    const handleCount = () => {
      setCount(prev => prev+1)
    }
  return (
    <div className="w-full bg-[#392F5A] text-[#DCCCA3] justify-center items-center p-4">
      <p className=" w-[200px] rounded-xl min-h-[100px] p-3">{selectedItem?.id}</p>
      <p className=" w-[200px] rounded-xl min-h-[100px] p-3">{count}</p>
      <button className='bg-blue-500 p-3 rounded-md hover:bg-blue-700' onClick={handleCount}>Increment</button>
    </div>
  );
}

export default Admin