// For Complete knowledge of useState hook i do this mini counter web app!

import React,{useState} from 'react'
import './Counter.css'
function Counter(){
    const [count, setCount] = useState(0);

    function increment(){
          setCount(count+1);
    }
    function decrement(){
            setCount(count-1);
    }
    function reset(){
            setCount(0);
    }
   
    return(
        <div className='counter--contianer'>
            <p className={count<0?"red--count":"count"}>{count}</p>
            <button className='btn' onClick={increment}>Increment</button>
            <button className='btn'  onClick={decrement}>Decrement</button>
            <button className='btn' onClick={reset}>Reset</button>
        </div>
    );
}
export default Counter;