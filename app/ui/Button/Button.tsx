import {Text, TouchableOpacity} from 'react-native';
import React, {PropsWithChildren} from 'react';

import {btStyle} from './style';
import {ButtonSizeType, ButtonVariantType} from './type';

type Props = {
  text?: string;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  bgColor?: string;
  color?: string;
  onPress?: () => void;
};

export const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  text,
  size,
  variant,
  bgColor,
  color,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...btStyle[size ?? 'medium'],
        ...btStyle[variant ?? 'contained'],
        backgroundColor: bgColor,
      }}
      {...props}>
      <Text
        style={{
          ...btStyle.buttonText,
          fontSize: btStyle[size ?? 'medium'].fontSize,
          color,
        }}>
        {children ?? text}
      </Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  text: 'Button',
  size: 'medium',
  variant: 'contained',
};
