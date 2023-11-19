import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CoinIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#FFD600"
      fillRule="evenodd"
      d="M0 6.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FFE400"
      fillRule="evenodd"
      d="M1.56 6.5a4.94 4.94 0 1 1 9.88 0 4.94 4.94 0 0 1-9.88 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FFD600"
      fillRule="evenodd"
      d="M2.411 6.747c0-2.32 1.995-4.2 4.456-4.2 1.439 0 2.718.642 3.532 1.64C9.63 2.927 8.188 2.08 6.537 2.08c-2.461 0-4.457 1.88-4.457 4.2 0 .964.345 1.851.924 2.56a3.997 3.997 0 0 1-.592-2.093Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default CoinIcon
