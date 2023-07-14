import React, { useState } from "react";
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";

function PlayButton({ move, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      Play {move}
    </button>
  );
}

function App() {
  const [result, setResult] = useState(null);
  const { contract, isLoading } = useContract(
    "0x3D01d7C35143f47bdDDaC0324a38A532e88E1B6a"
  );

  const { data: determineResult, isLoading: resultLoading } = useContractRead(
    contract,
    "determineResult",
    []
  );

  const { data: player, isLoading: playerLoading } = useContractRead(
    contract,
    "player",
    []
  );

  const { mutateAsync: play, isLoading: playLoading } = useContractWrite(
    contract,
    "play"
  );

  const { mutateAsync: resetGame, isLoading: resetLoading } = useContractWrite(
    contract,
    "resetGame"
  );

  const playMove = async (move) => {
    try {
      const data = await play({ args: [move] });
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const handleResetGame = async () => {
    try {
      const data = await resetGame({
        args: [
          /* Pass your arguments here */
        ],
      });
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div>
      <h1>Rock Paper Scissors Game</h1>
      <PlayButton
        move="Rock"
        onClick={() => playMove(1)}
        disabled={playLoading}
      />
      <PlayButton
        move="Paper"
        onClick={() => playMove(2)}
        disabled={playLoading}
      />
      <PlayButton
        move="Scissors"
        onClick={() => playMove(3)}
        disabled={playLoading}
      />

      <button onClick={handleResetGame} disabled={resetLoading}>
        Reset Game
      </button>

      {resultLoading || playerLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Result: {determineResult}</p>
          <p>Player: {player?.addr}</p>
          <p>Move: {player?.move}</p>
          <p>Played: {player?.played.toString()}</p>
        </>
      )}
    </div>
  );
}

export default App;
