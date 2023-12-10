import React, { useEffect, useState } from 'react'

function UseEffect() {
    
    const [count, setCount] = useState(0);
    const counter = () =>{
        if (count < 10) {
            setCount((prevCount) => prevCount + 1);
        }
    };
   
    useEffect(() => {
        // The code we want to run
        
       
            const uns = setInterval(counter, 1000);
        

        //optional return statement

        return () => {
            clearInterval(uns);
            console.log("I returned  it while cleaning again:", count);
        }
    }, [count]) //The dependancy array
  return (
    <div className="bg-[#12100E] text-[24px] text-[#DFF3E4] p-6 h-[270px] w-[400px] m-5 rounded-2xl">
      <p>Count: {count >= 0 ? `${count} ✨` : `Count < 0 👀 (${count})`}</p>
      <div className="flex flex-row mt-5 w-ful justify-between">
        <button
          onClick={counter}
          className="rounded-lg px-3 py-2 bg-[#151e40] transition-all duration-200 text-slate-200 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="rounded-lg px-3 py-2 bg-[#151e40] transition-all duration-200 text-slate-200 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default UseEffect