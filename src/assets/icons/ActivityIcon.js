import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
const ActivityIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={31}
    fill="none"
    {...props}
  >
    <Path
      fill="#FFE200"
      d="M26.867 4.547A15.808 15.808 0 0 0 15.734 0C7.044 0 0 6.94 0 15.5 0 24.06 7.044 31 15.734 31c3.91 0 7.603-1.413 10.463-3.924l-2.688-2.972a11.74 11.74 0 0 1-7.775 2.915C9.276 27.02 4.04 21.862 4.04 15.5S9.276 3.98 15.734 3.98c3.148 0 6.093 1.23 8.274 3.38l2.859-2.813Z"
    />
    <Circle cx={16.017} cy={16.016} r={8.783} fill="#FEF853" />
    <Path
      fill="#FFA600"
      d="m16.017 9.3 1.508 4.642h4.88l-3.948 2.868 1.508 4.641-3.948-2.868-3.948 2.868 1.508-4.64-3.948-2.87h4.88l1.508-4.64Z"
    />
  </Svg>
)
export default ActivityIcon
