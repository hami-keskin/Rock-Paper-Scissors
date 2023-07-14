import React, { useState } from "react";
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";

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

  const handlePlay = async (move) => {
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
      <>
        <h1>Rock Paper Scissors Game</h1>
        <button onClick={() => handlePlay(1)} disabled={playLoading}>
          Play Rock
        </button>
        <button onClick={() => handlePlay(2)} disabled={playLoading}>
          Play Paper
        </button>
        <button onClick={() => handlePlay(3)} disabled={playLoading}>
          Play Scissors
        </button>

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
      </>
    </div>
  );
}

export default App;
