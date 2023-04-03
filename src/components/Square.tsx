import React from 'react';

type SquareProps = {
  value: string;
  onSquareClick: (i: number) => void;
};

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
}
