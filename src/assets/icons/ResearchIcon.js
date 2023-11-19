import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ResearchIcon = ({
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
    <Path
      fill={color}
      fillRule="evenodd"
      d="M14.243 14.243a6 6 0 1 1-8.486-8.485 6 6 0 0 1 8.486 8.485Zm-.179 2.65a8 8 0 1 1 2.256-1.987l4.994 4.994a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.415 0l-5.128-5.128Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ResearchIcon
