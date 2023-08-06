import React from 'react';
import CounterProvider from './CounterProvider';
import Counter from './Counter';
import ComponentB from './ComponentB';

const Provider = () => {
  return (
    <CounterProvider>
     <Counter/>
      <ComponentB />
    </CounterProvider>
  );
};

export default Provider;
