import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const LowIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Circle cx={15} cy={15} r={15} fill="#F73232" opacity={0.1} />
    <Path
      fill="#F73232"
      d="M16.25 5.625v13.962l4.488-4.474 1.762 1.762-7.5 7.5-7.5-7.5 1.762-1.762 4.488 4.474V5.625h2.5Z"
    />
  </Svg>
)
export default LowIcon
