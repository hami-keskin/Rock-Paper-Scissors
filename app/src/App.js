import React, { useEffect, useState } from "react";
import { Sepolia } from "@thirdweb-dev/chains";
import {
  ThirdwebProvider,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import { Move } from "./Move";

function App() {
  return (
    <ThirdwebProvider activeChain={Sepolia}>
      <Component />
    </ThirdwebProvider>
  );
}

function Component() {
  const contractAddress = "0x3D01d7C35143f47bdDDaC0324a38A532e88E1B6a";
  const { contract, isLoading: contractLoading } = useContract(contractAddress);

  const [contractReady, setContractReady] = useState(false);

  useEffect(() => {
    if (contract) {
      setContractReady(true);
    }
  }, [contract]);

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

  return (
    <div>
      {contractLoading ? (
        <p>Loading contract...</p>
      ) : contractReady ? (
        <>
          <h1>Rock Paper Scissors Game</h1>

          {resultLoading || playerLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>Result: {determineResult}</p>
              <p>Player: {player?.addr}</p>
              <p>Move: {Move[player?.move]}</p>
              <p>Played: {player?.played.toString()}</p>
            </>
          )}
        </>
      ) : (
        <p>Contract not found.</p>
      )}
    </div>
  );
}

export default App;
