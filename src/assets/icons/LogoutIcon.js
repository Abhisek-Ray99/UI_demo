import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Logout = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#727682"
      d="m17.75 7.62-6 6.123c-.535.547-1.464.164-1.464-.62V9.625H5.43a.864.864 0 0 1-.857-.875v-3.5c0-.484.382-.874.857-.874h4.857v-3.5c0-.78.925-1.166 1.465-.62l6 6.125a.895.895 0 0 1 0 1.24ZM6.858 13.56v-1.458a.434.434 0 0 0-.428-.438h-3A1.154 1.154 0 0 1 2.286 10.5V3.5c0-.645.51-1.166 1.143-1.166h3a.434.434 0 0 0 .428-.438V.438A.434.434 0 0 0 6.43.001h-3C1.536 0 0 1.568 0 3.5v6.998c0 1.932 1.536 3.5 3.429 3.5h3a.434.434 0 0 0 .428-.438Z"
    />
  </Svg>
)
export default Logout
