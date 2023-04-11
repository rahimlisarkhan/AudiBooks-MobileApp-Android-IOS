import React from 'react';
import SvgUri from 'react-native-svg-uri';

type Props = {
  width: string;
  height: string;
  source: string;
};

export const ImageSvg: React.FC<Props> = ({width, height, source}) => {
  return <SvgUri width={width} height={height} svgXmlData={source} />;
};
