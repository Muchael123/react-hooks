import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREAMENT":
            return { count: state.count + 1, even: !state.even };
        default:
            return state;
        
    }
}

function Increament() {
    // use of useSate
    // const [count, setCount] = useState(0);
    // const [even, setEven] = useState(true);

    //useReducer
    const [state, dispatch] = useReducer(reducer, {count: 0, even: true})

    const increament = () => {
       
    }
  return (
    <div className="m-5 ">
      <h1>
        I Have increamented{" "}
        <span>
          <span className="text-blue-700 font-semibold">{state.count}</span>{" "}
          times
        </span>
      </h1>
      <button
        onClick={ 
            () => {dispatch({ type: "INCREAMENT" }); }
        }
        className="border border-black p-2 rounded-lg hover:bg-blue-700 hover:text-[#f4f5f5] font-semibold transition-all duration-200 ease-in-out"
      >
        Click me
      </button>
      <p>
        {state.count} is {state.even ? "even" : "odd"}
      </p>
    </div>
  );
}

export default Increament