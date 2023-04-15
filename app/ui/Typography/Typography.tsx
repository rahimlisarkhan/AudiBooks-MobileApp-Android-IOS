import {Text, TouchableOpacity} from 'react-native';
import React, {CSSProperties, PropsWithChildren} from 'react';
import {styles as tyStyle} from './style';
import {FontVariantType, FontWeightType} from '../../types/typography';
import {COLORS} from '../../shared/theme/colors';

type Props = {
  variant?: FontVariantType;
  weight?: FontWeightType;
  color?: string;
  style?: CSSProperties;
  align?: 'center' | 'left' | 'right';
  onPress?: () => void;
};

export const Typography: React.FC<PropsWithChildren<Props>> = ({
  variant,
  weight,
  align,
  color,
  onPress,
  children,
  style,
  ...props
}) => {
  const typographyStyle = {
    ...tyStyle.font,
    ...tyStyle[variant ?? 'body1'],
    ...tyStyle[weight ?? 'regular'],
    ...tyStyle[align ?? 'center'],
    color,
    ...style,
  };

  const content = (
    <Text
      style={typographyStyle}
      testID="ID_Typography"
      suppressHighlighting
      {...props}>
      {children}
    </Text>
  );

  return onPress ? (
    <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>
  ) : (
    content
  );
};

Typography.defaultProps = {
  variant: 'body1',
  weight: 'regular',
  color: COLORS.neutral80,
};
