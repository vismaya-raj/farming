import React, { useState } from 'react'

export default function Counter() {
    const [getCount,setCount] = useState(0);
    const increment = () => 
    {
        setCount(getCount+1);
    }
    const decrement=()=>
    {
      if(getCount<=0)
      {
        window.stop();
       
      }
      else
      setCount(getCount-1)
    }
  return (
    <div className='counter-container'>
     
     <div>
      <button className='counter-buttons' onClick={decrement}>-</button>
      </div>
      <div className='get-count' >
            {getCount}
        </div>
        <div>
            <button className='counter-buttons' onClick={increment} >+</button>
      </div>
  



    </div>
  )
}

// import React, { useContext } from 'react';
// import CounterContext from './CounterContext';

// const Counter= () => {
//   const { getCount, increment, decrement } = useContext(CounterContext);

//   return (
//       <div className='counter-container'>
     
//         <div>
//             <button className='counter-buttons' onClick={increment} style={{borderRadius:'50%'}}>+</button>
//       </div>
//       <div>
//             {getCount}
//         </div>
//       <div>
//       <button className='counter-buttons' onClick={decrement}>-</button>
//       </div>



//     </div>
//   );
// };

// export default Counter;
