import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function MenuIcon({width, height}: any) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 35 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G strokeWidth={3} strokeLinecap="round">
        <Path d="M2 2h31M2 22h16" stroke="#000" />
        <Path d="M2 12h24" stroke="#B98875" />
      </G>
    </Svg>
  )
}

export default MenuIcon
