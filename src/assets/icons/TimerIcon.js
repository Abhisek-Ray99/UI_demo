import * as React from "react"
import Svg, { Path } from "react-native-svg"
const TimerIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#D2BAF5"
      d="M7 0C3.133 0 0 3.133 0 7s3.133 7 7 7 7-3.133 7-7-3.133-7-7-7Zm1.612 9.882-2.49-1.81a.34.34 0 0 1-.138-.273v-4.75a.34.34 0 0 1 .339-.34h1.354a.34.34 0 0 1 .34.34v3.886L9.807 8.24c.153.11.184.322.074.474l-.796 1.095a.341.341 0 0 1-.474.074Z"
    />
  </Svg>
)
export default TimerIcon
