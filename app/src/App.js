import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract, useContractRead } from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider activeChain={Sepolia}>
      <Component />
    </ThirdwebProvider>
  );
}

function Component() {
  const { contract, isLoading } = useContract(
    "0x3D01d7C35143f47bdDDaC0324a38A532e88E1B6a"
  );

  const { data: determineResult, isLoading: resultLoading } = useContractRead(
    contract,
    "determineResult",
    [/* Pass your arguments here */]
  );

  const { data: player, isLoading: playerLoading } = useContractRead(
    contract,
    "player",
    [/* Pass your arguments here */]
  );

  return (
    <div>
      <>
        <h1>Rock Paper Scissors Game</h1>
      </>
    </div>
  );
}

export default App;
