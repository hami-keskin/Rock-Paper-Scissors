
```
# Rock Paper Scissors Game with thirdweb

This is a simple Rock Paper Scissors game built using thirdweb and Solidity smart contracts. Players can choose their move (Rock, Paper, or Scissors) and play against the computer. The smart contract handles the game logic and determines the winner.

## Getting Started

To get started with the project, follow the steps below:

1. Create a new project using the thirdweb starter template for Create React App (CRA) by running the following command:

```
npx thirdweb create --template cra-javascript-starter
```

2. Edit the `src/index.js` file to modify the app. You will find the `ThirdwebProvider` wrapping your app, which is necessary for thirdweb hooks and UI components to work.

3. Deploy a copy of your application to IPFS using the command:

```
yarn deploy
```

## Prerequisites

To use thirdweb and run the project, you need the following:

- Node.js (version 14 or higher)
- Yarn (or npm)

## Built With

- [thirdweb](https://portal.thirdweb.com/react) - thirdweb React SDK for interacting with smart contracts and blockchain.
- [Solidity](https://soliditylang.org/) - Smart contract language used to develop the game logic.
- [Create React App](https://create-react-app.dev/) - React framework for building the user interface.

## Usage

1. Connect your wallet to the thirdweb network by clicking the "Connect Wallet" button on the app.
2. Choose your move (Rock, Paper, or Scissors) by clicking the respective buttons.
3. Wait for the result to be determined by the smart contract.
4. The result (win, lose, or draw) will be displayed on the screen.
5. You can reset the game and play again by clicking the "Reset Game" button.

## Contract Details

The game's smart contract is implemented in Solidity and includes the following functions:

- `play(move)`: Allows the player to make a move (Rock, Paper, or Scissors).
- `determineResult()`: Determines the result of the game (win, lose, or draw).
- `resetGame()`: Resets the game state for a new round.

## Contributing

Contributions to the project are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or submit a pull request.

## Resources

- [thirdweb Documentation](https://docs.thirdweb.com/react) - Official documentation for thirdweb React SDK.
- [thirdweb Portal](https://portal.thirdweb.com/react) - Guides, tutorials, and resources for developing with thirdweb.
- [Solidity Documentation](https://soliditylang.org/docs/) - Official documentation for the Solidity programming language.
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started) - Official documentation for Create React App.

## Contact

For any questions or inquiries, please join our Discord community at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
