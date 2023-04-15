import React, {SVGProps} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './style';

type Props = {
  icon: React.FC<SVGProps>;
  onPress?: () => void;
};

export const ProviderBtn: React.FC<Props> = ({icon: Icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.iconContent}>{<Icon />}</View>
    </TouchableOpacity>
  );
};
