import * as React from "react"
import Svg, { Path } from "react-native-svg"
const UserIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#727682"
      d="M6 6.75a3.376 3.376 0 1 0-.002-6.752A3.376 3.376 0 0 0 6 6.75Zm3 .75H7.709a4.084 4.084 0 0 1-3.418 0H3a3 3 0 0 0-3 3v.375C0 11.496.504 12 1.125 12h9.75c.621 0 1.125-.504 1.125-1.125V10.5a3 3 0 0 0-3-3Z"
    />
  </Svg>
)
export default UserIcon
