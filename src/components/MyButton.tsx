import React, { useEffect, useId } from 'react';

type MyButtonProps = {
  count: number;
  handleCountUpBtn: () => void;
};

function MyButton({ count, handleCountUpBtn }: MyButtonProps) {
  const id = useId();
  console.log(id);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
  }, [count]);

  return <button onClick={handleCountUpBtn}>Clicked {count} times</button>;
}

export default MyButton;
