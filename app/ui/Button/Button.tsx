import {Text, TouchableOpacity} from 'react-native';
import React, {CSSProperties, PropsWithChildren, ReactElement} from 'react';

import {btStyle} from './style';
import {ButtonSizeType, ButtonVariantType} from './type';
import {COLORS} from '../../shared/theme/colors';
import {SvgProps} from 'react-native-svg';

type Props = {
  text?: string;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  disabled?: boolean;
  rounded?: boolean;
  bgColor?: string;
  color?: string;
  icon?: ReactElement;
  onPress?: () => void;
  style?: CSSProperties;
  textStyle?: CSSProperties;
};

export const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  text,
  size,
  variant,
  bgColor,
  disabled,
  color,
  onPress,
  rounded,
  style,
  textStyle,
  icon,
  ...props
}) => {
  const isNotContained = variant === 'text' || variant === 'outlined';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        btStyle.button,
        btStyle[size ?? 'medium'],
        btStyle[variant ?? 'contained'],
        {
          backgroundColor: isNotContained ? 'transparent' : bgColor,
          borderColor: bgColor,
        },
        disabled && btStyle.disabled,
        rounded && btStyle.rounded,
        style,
      ]}
      {...props}>
      {icon && icon}
      <Text
        style={{
          ...btStyle.buttonText,
          fontSize: btStyle[size ?? 'medium'].fontSize,
          color: isNotContained ? COLORS.primary50 : color,
          marginLeft: icon ? 14 : 0,
          ...textStyle,
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
  bgColor: COLORS.primary50,
  color: COLORS.neutralWhite,
};
