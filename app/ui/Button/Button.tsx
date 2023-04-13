import {Text, TouchableOpacity} from 'react-native';
import React, {CSSProperties, PropsWithChildren} from 'react';

import {btStyle} from './style';
import {ButtonSizeType, ButtonVariantType} from './type';
import {COLORS} from '../../shared/theme/colors';

type Props = {
  text?: string;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
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
  color,
  onPress,
  style,
  ...props
}) => {
  const isNotContained = variant === 'text' || variant === 'outlined';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        btStyle.button,
        btStyle[size ?? 'medium'],
        btStyle[variant ?? 'contained'],
        {backgroundColor: isNotContained ? 'transparent' : bgColor},
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
