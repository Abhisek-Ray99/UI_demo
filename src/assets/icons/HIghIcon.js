import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const HighIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Circle cx={16} cy={16} r={16} fill="#48C547" opacity={0.1} />
    <Path
      fill="#48C547"
      d="M17.333 26V11.107l4.787 4.773L24 14l-8-8-8 8 1.88 1.88 4.787-4.773V26h2.666Z"
    />
  </Svg>
)
export default HighIcon
