// CounterProvider.js
// import React, { useState } from 'react';
// import CounterContext from './CounterContext';

// const CounterProvider = ({ children }) => {
//   const [getCount, setCount] = useState(0);

//   const increment = () => {
//     setCount(getCount + 1);
//   };

//   const decrement = () => {
//     if (getCount <= 0) {
//       // Handle the case when getCount is already 0 or negative (e.g., show a message)
//       return;
//     } else {
//       setCount(getCount - 1);
//     }
//   };

//   return (
//     <CounterContext.Provider value={{ getCount, increment, decrement }}>
//       {children}
//     </CounterContext.Provider>
//   );
// };

// export default CounterProvider;

