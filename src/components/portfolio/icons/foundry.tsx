import React from "react";

type FoundryProps = {
  width?: string;
  height?: string;
};

export const Foundry = ({ height, width }: FoundryProps) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "100%"}
      height={height ?? "100%"}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200.000000 200.000000"
      className="fill-white"
    >
      <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" stroke="none">
        <path
          d="M838 1905 c-574 -109 -898 -689 -694 -1245 25 -67 79 -159 140 -236
    331 -425 982 -460 1367 -75 385 385 350 1036 -75 1367 -168 132 -328 191 -541
    199 -81 3 -145 0 -197 -10z m292 -30 c366 -55 647 -315 737 -681 24 -100 23
    -297 -1 -394 -86 -336 -330 -580 -666 -666 -97 -24 -294 -25 -394 -1 -262 65
    -472 227 -590 456 -133 260 -137 537 -11 798 129 266 381 448 681 492 89 13
    140 12 244 -4z"
        />
        <path
          d="M925 1820 c-22 -24 -17 -67 20 -187 26 -85 42 -102 85 -88 22 7 33
    38 57 172 21 117 17 123 -77 123 -54 0 -70 -4 -85 -20z"
        />
        <path
          d="M713 1767 c-38 -22 -53 -37 -53 -53 0 -25 171 -204 195 -204 28 0 55
    20 55 40 0 36 -61 211 -81 231 -26 26 -55 23 -116 -14z"
        />
        <path
          d="M1181 1781 c-11 -11 -35 -68 -55 -128 l-35 -108 20 -17 c12 -10 29
    -18 38 -18 21 0 201 180 201 201 0 20 -24 41 -77 68 -52 26 -68 26 -92 2z"
        />
        <path
          d="M506 1631 c-30 -30 -47 -55 -43 -64 6 -16 153 -116 211 -143 35 -17
    36 -17 60 6 24 21 24 24 10 52 -27 53 -106 173 -122 186 -32 25 -66 14 -116
    -37z"
        />
        <path
          d="M1378 1657 c-11 -12 -44 -63 -74 -112 l-54 -89 24 -24 c17 -17 30
    -22 45 -17 38 12 231 144 231 158 0 8 -22 35 -50 61 -56 52 -90 59 -122 23z"
        />
        <path
          d="M372 1522 c-41 -41 -74 -93 -68 -107 7 -19 222 -125 252 -125 20 0
    54 28 54 45 0 10 -61 85 -124 153 -53 56 -83 65 -114 34z"
        />
        <path
          d="M1540 1508 c-49 -50 -140 -164 -140 -175 0 -16 35 -43 56 -43 29 0
    243 107 250 125 6 14 -27 66 -68 107 -27 27 -62 22 -98 -14z"
        />
        <path
          d="M251 1333 c-26 -22 -51 -127 -35 -143 13 -13 248 -33 278 -24 25 8
    36 22 36 50 0 17 -23 33 -109 77 -117 62 -138 66 -170 40z"
        />
        <path
          d="M1588 1293 c-99 -51 -108 -59 -108 -85 0 -44 31 -51 178 -39 69 6
    130 15 136 21 16 16 -9 121 -35 143 -32 26 -55 21 -171 -40z"
        />
        <path
          d="M692 1313 c-7 -3 -19 -17 -27 -33 l-14 -28 360 -298 c198 -165 365
    -300 372 -302 19 -4 46 20 49 44 2 17 -71 83 -360 323 -199 165 -363 301 -365
    300 -1 0 -8 -3 -15 -6z"
        />
        <path
          d="M1158 1207 c-147 -103 -157 -112 -142 -128 15 -16 24 -11 152 83 171
    127 177 132 160 145 -10 8 -53 -17 -170 -100z"
        />
        <path
          d="M1221 1148 c-78 -61 -140 -116 -138 -121 2 -6 10 -15 19 -20 23 -15
    293 220 277 239 -6 8 -13 14 -14 14 -1 0 -66 -50 -144 -112z"
        />
        <path
          d="M212 1114 c-19 -13 -22 -25 -22 -78 0 -91 5 -93 142 -61 130 31 158
    45 158 80 0 27 -22 36 -145 55 -38 6 -79 13 -91 15 -11 3 -30 -2 -42 -11z"
        />
        <path
          d="M1645 1103 c-104 -15 -125 -24 -125 -54 0 -27 33 -44 143 -74 134
    -36 140 -35 150 40 7 57 6 61 -18 83 -15 12 -31 22 -38 21 -7 -1 -57 -8 -112
    -16z"
        />
        <path
          d="M800 954 c-170 -123 -177 -133 -190 -256 -9 -90 -22 -112 -71 -110
    -38 1 -107 -42 -120 -76 -5 -13 -16 -23 -26 -21 -39 3 -46 0 -33 -16 25 -31
    48 -27 112 18 35 24 68 42 75 40 6 -2 27 3 47 11 27 11 42 27 56 58 11 24 20
    51 20 60 0 9 18 38 40 63 27 32 40 56 40 76 0 33 14 49 123 136 66 53 68 56
    51 74 -9 10 -18 19 -18 19 -1 0 -48 -35 -106 -76z m-92 -178 c6 -29 -15 -43
    -35 -24 -14 14 -14 20 -3 33 16 19 34 15 38 -9z"
        />
        <path
          d="M879 878 c-76 -60 -110 -93 -125 -125 l-21 -43 26 0 c19 0 61 30 149
    106 67 58 120 109 117 115 -4 5 -14 13 -24 19 -15 8 -38 -5 -122 -72z"
        />
        <path
          d="M1461 773 c-21 -26 -27 -40 -20 -49 23 -28 -32 -94 -67 -80 -14 5
    -54 -32 -78 -72 -8 -14 11 -93 23 -91 7 0 264 307 269 320 2 5 -19 9 -46 9
    -46 0 -53 -3 -81 -37z"
        />
        <path
          d="M1465 632 l-138 -166 54 -48 c30 -26 57 -48 60 -48 5 0 205 234 263
    308 19 24 19 25 -1 41 -12 9 -38 30 -60 48 l-39 32 -139 -167z"
        />
        <path
          d="M495 756 c-32 -14 -55 -51 -55 -89 0 -15 -19 -35 -60 -65 -58 -42
    -69 -62 -51 -90 6 -10 10 -10 21 3 7 8 9 15 5 15 -4 0 -2 6 5 14 6 8 18 12 26
    9 8 -3 34 11 58 31 37 30 44 41 43 70 -1 49 18 68 67 64 36 -2 40 0 47 25 7
    26 6 27 -34 27 -23 -1 -56 -7 -72 -14z"
        />
        <path
          d="M1035 615 c19 -45 19 -85 -1 -113 -31 -45 -62 -21 -71 57 -3 28 -9
    51 -13 51 -4 0 -15 -16 -25 -36 -16 -35 -16 -49 1 -131 5 -25 2 -33 -15 -42
    -30 -17 -65 20 -57 60 6 33 -4 37 -26 12 -25 -28 -30 -59 -18 -105 27 -99 102
    -153 206 -146 52 3 70 9 101 35 48 38 70 76 78 133 l6 45 -16 -27 c-16 -29
    -57 -39 -71 -17 -4 6 -1 35 6 65 11 43 11 59 0 85 -16 37 -55 85 -81 99 -17
    10 -17 8 -4 -25z"
        />
      </g>
    </svg>
  );
};
