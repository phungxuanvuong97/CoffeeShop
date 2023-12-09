import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CoffeeCupIcon = ({width, height, color}: any) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 19 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M7.03906 19.1816C5.75586 19.1816 4.64551 18.9648 3.70801 18.5312C2.77051 18.0977 2.04395 17.4824 1.52832 16.6855C1.01855 15.8945 0.763672 14.957 0.763672 13.873V2.79004C0.763672 2.20996 1.07129 1.72363 1.68652 1.33105C2.30176 0.932617 3.14551 0.633789 4.21777 0.43457C5.2959 0.229492 6.52051 0.126953 7.8916 0.126953C9.26855 0.126953 10.4932 0.229492 11.5654 0.43457C12.6377 0.633789 13.4814 0.932617 14.0967 1.33105C14.7119 1.72363 15.0195 2.20996 15.0195 2.79004V13.873C15.0195 14.957 14.7646 15.8945 14.2549 16.6855C13.7451 17.4824 13.0186 18.0977 12.0752 18.5312C11.1377 18.9648 10.0273 19.1816 8.74414 19.1816H7.03906ZM7.03906 17.626H8.74414C10.1973 17.626 11.3457 17.2891 12.1895 16.6152C13.0332 15.9414 13.4551 15.0273 13.4551 13.873V4.02051C12.8574 4.26074 12.0693 4.43945 11.0908 4.55664C10.1123 4.67383 9.0459 4.73242 7.8916 4.73242C6.73145 4.73242 5.66211 4.67383 4.68359 4.55664C3.71094 4.43945 2.92578 4.26074 2.32812 4.02051V13.873C2.32812 15.0273 2.75 15.9414 3.59375 16.6152C4.44336 17.2891 5.5918 17.626 7.03906 17.626ZM7.8916 3.25586C8.91699 3.25586 9.81934 3.2207 10.5986 3.15039C11.3779 3.08008 11.9873 2.9834 12.4268 2.86035C12.8662 2.73145 13.0859 2.58496 13.0859 2.4209C13.0859 2.25684 12.8662 2.11328 12.4268 1.99023C11.9873 1.86133 11.3779 1.76172 10.5986 1.69141C9.81934 1.62109 8.91699 1.58594 7.8916 1.58594C6.86621 1.58594 5.96387 1.62109 5.18457 1.69141C4.40527 1.76172 3.7959 1.86133 3.35645 1.99023C2.91699 2.11328 2.69727 2.25684 2.69727 2.4209C2.69727 2.58496 2.91699 2.73145 3.35645 2.86035C3.7959 2.9834 4.40527 3.08008 5.18457 3.15039C5.96387 3.2207 6.86621 3.25586 7.8916 3.25586ZM13.9648 13.8467V12.3086H15.5381C15.9424 12.3086 16.2354 12.2148 16.417 12.0273C16.5986 11.834 16.6895 11.5205 16.6895 11.0869V7.57129C16.6895 7.1377 16.5986 6.82715 16.417 6.63965C16.2354 6.44629 15.9424 6.34961 15.5381 6.34961H13.9648V4.81152H15.5381C16.3525 4.81152 17.0029 5.06348 17.4893 5.56738C17.9814 6.06543 18.2275 6.7334 18.2275 7.57129V11.0869C18.2275 11.9248 17.9814 12.5957 17.4893 13.0996C17.0029 13.5977 16.3525 13.8467 15.5381 13.8467H13.9648Z"
      fill={color}
    />
  </Svg>
);
export default CoffeeCupIcon;