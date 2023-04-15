import React from 'react';
import {ICONS, IconType} from './icons';

type Props = {
  name: IconType;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
};

export const AppIcon: React.FC<Props> = ({name, size, ...props}) => {
  const IconComponent = ICONS[name];

  return (
    <IconComponent width={size ?? width} height={size ?? height} {...props} />
  );
};

AppIcon.defaultProps = {
  size: 24,
  name: 'home',
};
