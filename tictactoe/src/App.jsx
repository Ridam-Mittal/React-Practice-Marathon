import { useEffect, useState } from "react";
import Square from "./components/Square";

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('❌');
  const [result, setResult] = useState({ winner: 'none', state: 'none' });

  useEffect(() => {
    checkWin();
    checkIfTie();

    if (result.state === 'none') {
      // Switch player only if game is ongoing
      setPlayer(player === '❌' ? '⭕' : '❌');
    }

  }, [board]);

  useEffect(() => {
    if (result.state !== 'none') {
      setTimeout(()=>{
        alert('Game Finished! Restart the game');
        setBoard(['', '', '', '', '', '', '', '', '']);
        setPlayer('❌'); // Reset player to starting player after game ends
      }, 300);
    }
  }, [result]);

  const Patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const chooseSquare = (index) => {
    if (board[index] === '' && result.state === 'none') {
      setBoard(board.map((val, ind) => {
        if (ind === index) {
          return player;
        } else {
          return val;
        }
      }));
    }
  };

  const checkWin = () => {
    Patterns.some((pattern) => {
      const block1 = board[pattern[0]];
      if (block1 === '') return false; // Skip empty patterns
      const foundWinner = pattern.every((idx) => board[idx] === block1); // Check all indexes in the pattern
      if (foundWinner) {
        setResult({ winner: player, state: 'won' });
        return true; // Exit the loop early if a winner is found
      }
      return false;
    });
  };
  

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const handleRestart = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setResult({ winner: 'none', state: 'none' });
    setPlayer('❌'); // Reset to starting player
  };

  return (
    <div className="h-screen w-full bg-slate-400 flex justify-center items-center flex-col gap-5">
      <div className="flex w-[25vw] font-semibold text-xl items-center justify-center">
        {result.state === 'none' ? `Player's Turn: ${player}` : `Game Over! ${result.state === 'Tie' ? "It's a Tie" : `${result.winner} Wins!`}`}
      </div>
      <div className="h-[45vh] w-[25vw] bg-slate-800 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.4)] text-white text-xl">
        <div className="row h-[33.3%] w-[100%] items-center flex justify-center">
          <Square val={board[0]} index={0} choosesquare={() => chooseSquare(0)} />
          <Square val={board[1]} index={1} choosesquare={() => chooseSquare(1)} />
          <Square val={board[2]} index={2} choosesquare={() => chooseSquare(2)} />
        </div>
        <div className="row h-[33.3%] w-[100%] items-center flex justify-center">
          <Square val={board[3]} index={3} choosesquare={() => chooseSquare(3)} />
          <Square val={board[4]} index={4} choosesquare={() => chooseSquare(4)} />
          <Square val={board[5]} index={5} choosesquare={() => chooseSquare(5)} />
        </div>
        <div className="row h-[33.3%] w-[100%] items-center flex justify-center">
          <Square val={board[6]} index={6} choosesquare={() => chooseSquare(6)} />
          <Square val={board[7]} index={7} choosesquare={() => chooseSquare(7)} />
          <Square val={board[8]} index={8} choosesquare={() => chooseSquare(8)} />
        </div>
      </div>
      <button
        type="submit"
        className="border border-white bg-slate-950 py-3 text-white px-12 rounded-lg"
        onClick={handleRestart}
        disabled={result.state === 'none'}
      >
        Restart
      </button>
    </div>
  );
}

export default App;
