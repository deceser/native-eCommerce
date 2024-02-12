import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  width: number;
  height: number;
  fill: string;
  stroke: string;
};

const HeartSVG: React.FC<Props> = ({ ...props }) => {
  const { width, height, fill, stroke } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 21C11.6989 20.9996 11.4049 20.9086 11.1562 20.7389C7.47232 18.2381 5.87716 16.5234 4.99732 15.4514C3.12232 13.1663 2.22466 10.8202 2.24997 8.27953C2.2795 5.36813 4.61528 3 7.45685 3C9.5231 3 10.9542 4.16391 11.7876 5.13328C11.814 5.16368 11.8467 5.18805 11.8833 5.20476C11.9199 5.22146 11.9597 5.23011 12 5.23011C12.0402 5.23011 12.08 5.22146 12.1167 5.20476C12.1533 5.18805 12.1859 5.16368 12.2123 5.13328C13.0458 4.16297 14.4768 3 16.5431 3C19.3847 3 21.7204 5.36812 21.75 8.28C21.7753 10.8211 20.8767 13.1672 19.0026 15.4519C18.1228 16.5239 16.5276 18.2386 12.8437 20.7394C12.595 20.9089 12.301 20.9998 12 21Z"
        fill={fill}
        stroke={stroke}
      />
    </Svg>
  );
};

export default HeartSVG;
