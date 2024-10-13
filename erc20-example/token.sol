//SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyFakeToken is ERC20{
    constructor() ERC20("Gold", "GLD") {
        _mint(msg.sender, 50 * 10**18);
    }
}