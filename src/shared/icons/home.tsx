import * as React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";

type Props = {
  width: number;
  height: number;
  fill: string;
  stroke: string;
};

const HomeSVG: React.FC<Props> = ({ ...props }) => {
  const { width, height, fill, stroke } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.693 1.60532C11.8736 1.46489 12.1264 1.46489 12.307 1.60532L21.307 8.60532C21.4288 8.70005 21.5 8.8457 21.5 9V20C21.5 21.3807 20.3807 22.5 19 22.5H5C3.61929 22.5 2.5 21.3807 2.5 20V9C2.5 8.8457 2.57124 8.70005 2.69303 8.60532L11.693 1.60532ZM3.5 9.24454V20C3.5 20.8284 4.17157 21.5 5 21.5H19C19.8284 21.5 20.5 20.8284 20.5 20V9.24454L12 2.63343L3.5 9.24454Z"
        fill={fill}
        stroke={stroke}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 12C8.5 11.7239 8.72386 11.5 9 11.5H15C15.2761 11.5 15.5 11.7239 15.5 12V22C15.5 22.2761 15.2761 22.5 15 22.5C14.7239 22.5 14.5 22.2761 14.5 22V12.5H9.5V22C9.5 22.2761 9.27614 22.5 9 22.5C8.72386 22.5 8.5 22.2761 8.5 22V12Z"
        fill={fill}
        stroke={stroke}
      />
    </Svg>
  );
};
export default HomeSVG;
