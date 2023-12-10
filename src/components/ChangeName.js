import React, { useState } from 'react'

function ChangeName() {
    const [InputValue, setInputvalue] = useState("Nothing yet...");
    const Changed = (event) => {
        const ValNew = event.target.value;
        setInputvalue(ValNew);
    }
  return (
    <div className="bg-[#f5f5f5] min-h-[90px] p-4">
      <input placeholder="Enter a name to be printed" onChange={Changed} />
      <h1 className="text-[24px] text-[#f41234] font-mono">{InputValue}</h1>
    </div>
  );
}

export default ChangeName