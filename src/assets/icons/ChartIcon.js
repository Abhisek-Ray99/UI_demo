import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ChartIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#727682"
      d="M16.276 10.417c.215 0 .39.175.39.39v1.302c0 .215-.175.391-.39.391H.391A.392.392 0 0 1 0 12.11V.39C0 .177.176 0 .39 0h1.303c.215 0 .39.176.39.39v10.027h14.193Zm-4.144-7.308L9.375 4.948 6.598 1.247a.391.391 0 0 0-.647.032L3.125 5.99v3.386h12.5l-2.926-6.113a.39.39 0 0 0-.567-.153Z"
    />
  </Svg>
)
export default ChartIcon
