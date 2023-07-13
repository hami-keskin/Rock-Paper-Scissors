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

    event GameResult(string result);
    event GameReset();

    modifier onlyNotPlayed() {
        require(!player.played, "Already played.");
        _;
    }

    modifier onlyPlayer() {
        require(
            player.addr == address(0) || player.addr == msg.sender,
            "Not the player."
        );
        _;
    }

    modifier onlyPlayed() {
        require(player.played, "Player has not played yet.");
        _;
    }

    function play(Move _move) external {
        require(_move >= Move.Rock && _move <= Move.Scissors, "Invalid move.");

        // Clear player's address, move, and played status
        clearPlayer();

        // Assign the new address, move, and mark player as played
        player.addr = msg.sender;
        player.move = _move;
        player.played = true;
    }

    function determineResult()
        external
        view
        onlyPlayed
        returns (string memory)
    {
        Move randomMove = getRandomMove();
        uint8 result = payoffMatrix[uint8(player.move)][uint8(randomMove)];

        string memory resultMessage;

        if (result == 1) {
            resultMessage = "Player wins!";
        } else if (result == 2) {
            resultMessage = "Computer wins!";
        } else {
            resultMessage = "It's a draw!";
        }

        return resultMessage;
    }

    function resetGame() public onlyPlayed {
        clearPlayer();
        emit GameReset();
    }

    function getRandomMove() private view returns (Move) {
        uint256 randomNumber = uint256(
            keccak256(abi.encodePacked(block.timestamp, msg.sender))
        ) % 3;
        return Move(randomNumber);
    }

    function clearPlayer() private {
        player.addr = address(0);
        player.move = Move.None;
        player.played = false;
    }
}
