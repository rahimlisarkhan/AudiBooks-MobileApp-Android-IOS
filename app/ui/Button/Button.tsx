import {Text, TouchableOpacity} from 'react-native';
import React, {CSSProperties, PropsWithChildren} from 'react';

import {btStyle} from './style';
import {ButtonSizeType, ButtonVariantType} from './type';
import {COLORS} from '../../shared/theme/colors';

type Props = {
  text?: string;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  disabled?: boolean;
  rounded?: boolean;
  bgColor?: string;
  color?: string;
  onPress?: () => void;
  style?: CSSProperties;
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
        {backgroundColor: isNotContained ? 'transparent' : bgColor},
        disabled && btStyle.disabled,
        rounded && btStyle.rounded,
        style,
      ]}
      {...props}>
      <Text
        style={{
          ...btStyle.buttonText,
          fontSize: btStyle[size ?? 'medium'].fontSize,
          color: isNotContained ? COLORS.primary50 : color,
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
