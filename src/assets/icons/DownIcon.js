import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DownIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M5.801 11.157a.4.4 0 0 1-.601 0L.582 5.889a.4.4 0 0 1 .3-.664h2.385a.4.4 0 0 0 .4-.4V.4c0-.22.18-.4.4-.4h2.867c.22 0 .4.18.4.4v4.425c0 .22.18.4.4.4h2.384a.4.4 0 0 1 .3.664l-4.617 5.268Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default DownIcon
