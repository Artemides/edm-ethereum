import { Approach } from "./types";

export const topics: Approach[] = [
  {
    id: `sm-approach-design`,
    title: "design",
    icon: "⚙️",
    bColor: "#fff",
    bgColor: "#ffffffb0",
    bgColor2: "#ffffff14",
  },
  {
    id: `sm-approach-develop`,
    title: "develop",
    icon: "🛠️",
    bColor: "#94e2d5",
    bgColor: "#94e2d5b0",
    bgColor2: "#94e2d514",
  },
  {
    id: `sm-approach-test`,
    title: "test",
    icon: "🪲",
    bColor: "#a6e3a1",
    bgColor: "#a6e3a1b0",
    bgColor2: "#a6e3a114",
  },
  {
    id: `sm-approach-secure`,
    title: "secure",
    icon: "⚔️",
    bColor: "#f38ba8",
    bgColor: "#f38ba8b0",
    bgColor2: "#f38ba814",
  },
  {
    id: `sm-approach-verify`,
    title: "verify",
    icon: "♻️",
    bColor: "#fab387",
    bgColor: "#fab387b0",
    bgColor2: "#fab38714",
  },
  {
    id: `sm-approach-deploy`,
    title: "deploy",
    icon: "🚀",
    bColor: "#f9e2af",
    bgColor: "#f9e2afb0",
    bgColor2: "#f9e2af14",
  },
  {
    id: `sm-approach-monitor`,
    title: "monitor",
    icon: "🤖",
    bColor: "#cba6f7",
    bgColor: "#cba6f7b0",
    bgColor2: "#cba6f714",
  },
] as const;

export const defiProtocols = [
  {
    title: "aave",
    className: "col-span-2",
    image: "/images/portfolio/defi/aave.png",
    bColor: "#9391F7",
    bgColor: "#9391F77f",
  },
  {
    title: "uniswap",
    className: "row-start-2 col-span-2",
    image: "/images/portfolio/defi/uniswap.png",
    bColor: "#FF007A",
    bgColor: "#FF007Aa0",
  },
  {
    title: "curve",
    className: "row-start-4 col-start-1 col-span-2",
    image: "/images/portfolio/defi/curve.png",
    bColor: "#FCB503",
    bgColor: "#FCB5037f",
  },
  {
    title: "compound",
    className: "col-start-6 row-start-3 col-span-2",
    image: "/images/portfolio/defi/compound.png",
    bColor: "#00D395",
    bgColor: "#00D3957f",
  },
  {
    title: "chainlink",
    className: "col-start-4 row-start-4 col-span-2",
    image: "/images/portfolio/defi/link.png",
    bColor: "#335DD2",
    bgColor: "#335DD27f",
  },
];

export const contracts = [
  {
    title: "contract-contract",
    className: "col-start-1 row-start-2 col-span-2 row-span-2",
    code: `contract Contract {
 uint balance;
 mapping s_owner;
 constructor()
 do(address) {
  .call("swap");
 }
 receive()    
}`,
  },
  {
    title: "contract-uniswap",
    className: "col-start-5 col-span-2 row-span-2 ",
    code: `Uniswap {
  address token0;
  address token1;
  
  swap(uint) {
    //impl...
  }
}`,
  },

  {
    title: "contract-oracle",
    className: "col-start-4 row-start-3 col-span-2 row-span-2",
    code: `Oracle {
  priceEth() {
    //impl...
  }
}`,
  },
];

export const requirementContracts = [
  {
    title: "contract-contract",
    className: "col-start-1 row-start-2 col-span-2 row-span-2",
    code: `contract Contract {
   uint balance;
   mapping s_owner;
   constructor()
   do(address) {
    .call("swap");
   }
   receive()    
  }`,
  },
  {
    title: "contract-uniswap",
    className: "col-start-5 col-span-2 row-span-2 ",
    code: `Uniswap {
      address token0;
      address token1;
      swap(uint) {
        //impl...
      }
    }`,
  },

  {
    title: "contract-oracle",
    className: "col-start-4 row-start-3 col-span-2 row-span-2",
    code: `Oracle {
      priceEth() {
        //impl...
      }
    }`,
  },
];

export const tokens = [
  {
    title: "dai",
    className: "row-start-4 col-start-1 col-span-2",
    image: "/images/portfolio/defi/dai.png",
    bColor: "#F5AC37",
    bgColor: "#F5AC377f",
  },
  {
    title: "maker",
    className: "row-start-4 col-start-1 col-span-2",
    image: "/images/portfolio/defi/maker.png",
    bColor: "#59B6A7",
    bgColor: "#59B6A77f",
  },
  {
    title: "usdc",
    className: "row-start-4 col-start-1 col-span-2",
    image: "/images/portfolio/defi/usdc.png",
    bColor: "#2775CA",
    bgColor: "#2775CA7f",
  },
];

export const marketplaces = [
  {
    title: "opensea",
    className: "row-start-4 col-start-1 col-span-2",
    image: "/images/portfolio/defi/opensea.svg",
    bColor: "#2081E2",
    bgColor: "#2081E27f",
  },
];

export const devConsiderations = [
  {
    title: "Math Validation",
    description: "Mathematical issues, especially precision and overflows across different versions.",
  },
  {
    title: "Code Review",
    description: "Frequent code reviews and sessions to catch vulnerabilities early.",
  },
  {
    title: "Nat Specting",
    description: "Make contracts accessible, secure, and comprehensible for both users and developers.",
  },
];

export const devPullRequests = [
  {
    text: "Automated Testing (Fuzz)",
    success: true,
    ci: null,
  },
  {
    text: "Static Analysis",
    success: true,
    ci: null,
  },
  {
    text: "Security Audit",
    success: false,
    ci: `pragma solidity ^0.7.0;
contract Withdrawer {
 mapping(address => uint) balances;
 /* @i natspec missing */ 
 function withdraw(uint percentage) external {
  /* @audit possible overflow */ 
  /* @audit precision loss */ 
  uint amount = balances[msg.sender] * percentage / 100;
  /* @audit Transfers before updating balances (Reentrancy) */ 
  /* @audit Use of 'transfer' instead of 'call' */ 
  payable(msg.sender).transfer(amount);
  balances[msg.sender] -= amount;
 }
}`,
  },
  {
    text: "Simulation on forked Mainnet",
    success: true,
    ci: `//SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;    
import "@openzeppelin/contracts/math/SafeMath.sol";
contract Withdrawer {
 using SafeMath for uint;
 //@notice Stores the balance of each user.
 mapping(address => uint) private s_balances;

 //@notice Withdraws a percentage of the user's balance.
 //@param percentage of the user's balance to withdraw.
 //@dev Uses SafeMath to update balances before transferring Ether.
 //@custom security Prevents reentrancy by updating balance before 
 //sending Ether

 function withdraw(uint percentage) external {
  uint amount = s_balances[msg.sender].mul(percentage).div(100);
  require(s_balances[msg.sender] >= amount, "Insufficient balance");
  s_balances[msg.sender] = s_balances[msg.sender].sub(amount);
  (bool success, ) = msg.sender.call{value: amount}("");
  require(success, "Transfer failed");
 }
}`,
  },
  {
    text: "Gas Optimization",
    success: true,
    ci: null,
  },
  {
    text: "Automated Dependency Updates",
    success: false,
    ci: `//SPDX-License-Identifier: MIT
pragma solidity ^0.5.27;
/* @audit overflow/underflow */
`,
  },
];
