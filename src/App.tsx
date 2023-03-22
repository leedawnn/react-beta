import React, { useState } from 'react';
import MyButton from '../src/components/MyButton';

function App() {
  const [count, setCount] = useState(0);

  const handleCountUpBtn = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <MyButton count={count} handleCountUpBtn={handleCountUpBtn} />
      <MyButton count={count} handleCountUpBtn={handleCountUpBtn} />
      <MyButton count={count} handleCountUpBtn={handleCountUpBtn} />
    </div>
  );
}
export default App;
s;
