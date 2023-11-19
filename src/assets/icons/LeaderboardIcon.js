import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const LeaderboardIcon = ({
    color,
    ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Rect width={5} height={13} x={1} y={7} fill={color} rx={1} />
    <Rect width={5} height={17} x={9} y={3} fill={color} rx={1} />
    <Rect width={5} height={9} x={17} y={11} fill={color} rx={1} />
  </Svg>
)
export default LeaderboardIcon
