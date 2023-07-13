// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RockPaperScissors {
    enum Move {
        None,
        Rock,
        Paper,
        Scissors
    }
    uint8[3][3] private payoffMatrix = [[0, 2, 1], [1, 0, 2], [2, 1, 0]];
    struct Player {
        address addr;
        Move move;
        bool played;
    }

    Player public player;

    function play(Move _move) public {
        require(_move >= Move.Rock && _move <= Move.Scissors, "Invalid move.");
        require(
            player.addr == address(0) || player.addr == msg.sender,
            "Not the player."
        );
        require(!player.played, "Already played.");

        player.addr = msg.sender;
        player.move = _move;
        player.played = true;
    }

    function determineResult() public view returns (string memory) {
        require(player.played, "Player has not played yet.");

        Move randomMove = getRandomMove();
        uint8 result = payoffMatrix[uint8(player.move)][uint8(randomMove)];

        string memory resultMessage;

        // Determine the winner based on the result
        if (result == 1) {
            resultMessage = "Player wins!";
        } else if (result == 2) {
            resultMessage = "Computer wins!";
        } else {
            resultMessage = "It's a draw!";
        }

        return resultMessage;
    }

    function resetGame() public {
        require(player.played, "Player has not played yet.");

        player.addr = address(0);
        player.move = Move.None;
        player.played = false;
    }

    function getRandomMove() private view returns (Move) {
        uint256 randomNumber = uint256(
            keccak256(abi.encodePacked(block.timestamp, msg.sender))
        ) % 3;
        return Move(randomNumber);
    }
}
