import { Approach } from "./types";

export const topics: Approach[] = [
  {
    title: "design",
    icon: "⚙️",
    bColor: "#CAB3F5",
    bgColor: "#CAB3F5b0",
    bgColor2: "#CAB3F514",
  },
  {
    title: "develop",
    icon: "🛠️",
    bColor: "#B8FBF6",
    bgColor: "#B8FBF6b0",
    bgColor2: "#B8FBF614",
  },
  {
    title: "test",
    icon: "🪲",
    bColor: "#89FFA3",
    bgColor: "#89FFA3b0",
    bgColor2: "#B8FBF614",
  },
  {
    title: "secure",
    icon: "⚔️",
    bColor: "#FF4C4C",
    bgColor: "#FF4C4Cb0",
    bgColor2: "#FF4C4C14",
  },
  {
    title: "verify",
    icon: "♻️",
    bColor: "#9853FF",
    bgColor: "#9853FFb0",
    bgColor2: "#9853FF14",
  },
  {
    title: "deploy",
    icon: "🚀",
    bColor: "#FFF459",
    bgColor: "#fff459b0",
    bgColor2: "#fff45914",
  },
  {
    title: "monitor",
    icon: "🤖",
    bColor: "#87A9F0",
    bgColor: "#87A9F0b0",
    bgColor2: "#87a8f014",
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
    code: `Contract {
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
    code: `Contract {
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
