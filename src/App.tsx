import React from 'react';
import Square from './components/Square';

type BoardProps = {
  xIsNext: boolean;
  squares: string[];
  onPlay: (nextSquares: string[]) => void;
};

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {
  // const [squares, setSquares] = useState<string[] | string>(Array(9).fill(null)); // 'string | string[]' 형식의 인덱스 시그니처는 읽기만 허용됩니다.ts(2542)

  const onSquareClick = (i: number) => {
    const nextSquares = squares.slice(); // squares의 사본 생성 => 배열 원본을 수정하는 것은 좋지 않음.

    if (squares[i] || calculateWinner(squares)) return;

    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        {/* onSquareClick을 호출할 때, 함수를 props로 전달하는 것이 포인트! 컴포넌트에 함수를 props로 전달할 때 바로 호출되게 던져주면 안된다. */}
        <Square value={squares[0]} onSquareClick={() => onSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => onSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => onSquareClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => onSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => onSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => onSquareClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => onSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => onSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => onSquareClick(8)} />
      </div>
    </>
  );
}
