import * as React from "react"
import Svg, { Path } from "react-native-svg"
const UpIcon = (props) => (
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
      d="M5.801.343a.4.4 0 0 0-.601 0L.582 5.611a.4.4 0 0 0 .3.664h2.385c.22 0 .4.18.4.4V11.1c0 .22.18.4.4.4h2.867a.4.4 0 0 0 .4-.4V6.675c0-.22.18-.4.4-.4h2.384a.4.4 0 0 0 .3-.664L5.801.343Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default UpIcon
