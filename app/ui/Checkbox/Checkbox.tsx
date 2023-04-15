import {View, TouchableOpacity} from 'react-native';
import React, {CSSProperties, useLayoutEffect, useState} from 'react';

import {styles} from './style';
import {COLORS} from '../../shared/theme/colors';
import {widthPixel} from '../../shared/theme/metrics';
import {AppIcon} from '../../shared/components/AppIcon';
import {Typography} from '../Typography';

type Props = {
  checked: boolean;
  indeterminate: boolean;
  onChange?: (data: boolean) => void;
  style: CSSProperties;
  label?: string;
};

export const Checkbox: React.FC<Props> = ({
  indeterminate,
  checked,
  onChange,
  label,
  style,
}) => {
  const [check, setCheck] = useState(false);

  useLayoutEffect(() => {
    setCheck(checked);
  }, [checked]);

  const handleCheck = () => {
    setCheck(prev => !prev);
    onChange?.(!check);
  };

  return (
    <TouchableOpacity onPress={handleCheck}>
      <View style={[styles.container, style]}>
        <View style={[styles.content]}>
          {check && (
            <View style={styles.checkContent}>
              <AppIcon
                name={indeterminate ? 'minus' : 'check'}
                size={widthPixel(13)}
                color={COLORS.neutralWhite}
              />
            </View>
          )}
        </View>
        <Typography variant="headline">{label}</Typography>
      </View>
    </TouchableOpacity>
  );
};
