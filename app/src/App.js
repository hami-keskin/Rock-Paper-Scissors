import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";

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

  return (
    <div>
      <>
        <h1>Rock Paper Scissors Game</h1>
      </>
    </div>
  );
}

export default App;
