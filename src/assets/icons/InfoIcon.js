import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const InfoIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <Circle cx={6.5} cy={6.5} r={6} stroke="#D2BAF5" />
    <Path
      fill="#D2BAF5"
      d="M5.688 5.717a.3.3 0 0 1 .3-.3h1.024a.3.3 0 0 1 .3.3V9.45a.3.3 0 0 1-.3.3H5.989a.3.3 0 0 1-.3-.3V5.717ZM5.688 3.52a.813.813 0 1 1 1.625 0 .813.813 0 0 1-1.625 0Z"
    />
  </Svg>
)
export default InfoIcon
