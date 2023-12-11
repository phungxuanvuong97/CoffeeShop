import * as React from "react";
import Svg, { Path } from "react-native-svg";
const LeftArrowIcon = ({width = 18, height=16, strokeWidth = 1.5, color="#B98875"}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M16.5 8L1.5 8M1.5 8L8.25 14.75M1.5 8L8.25 1.25"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default LeftArrowIcon;
