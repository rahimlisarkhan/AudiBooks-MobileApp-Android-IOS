import React, {CSSProperties} from 'react';
import {ICONS, IconType} from './icons';

type Props = {
  name: IconType;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  style?: CSSProperties | {};
};

export const AppIcon: React.FC<Props> = ({
  name,
  size,
  width,
  height,
  style,
  ...props
}) => {
  const IconComponent = ICONS[name];

  return (
    <IconComponent
      width={size ?? width ?? 24}
      height={size ?? height}
      style={style ?? {}}
      {...props}
    />
  );
};

AppIcon.defaultProps = {
  size: 24,
  name: 'home',
};
