import {View, Text} from 'react-native';
import React, {lazy} from 'react';
import Animated, {AnimatedStyleProp} from 'react-native-reanimated';
import {styles as styleContent} from './style';
import {Typography} from '../../../ui/Typography';
import {Button} from '../../../ui/Button';

type Props = {
  styles: AnimatedStyleProp<any>;
  onFinish: () => void;
};

const CelebrateImg = lazy(() => import('../../../assets/images/celebrate.svg'));

export const FinishPanel: React.FC<Props> = ({styles, onFinish}) => {
  return (
    <Animated.View style={styles}>
      <View>
        <View style={styleContent.imageContent}>
          <CelebrateImg />
        </View>

        <Typography variant="body2" weight="semibold" align="center">
          You are ready to go!
        </Typography>

        <Typography
          variant="body2"
          align="center"
          style={styleContent.subTitle}>
          Congratulation, any interesting topics will be shortly in your hands.
        </Typography>

        <Button onPress={onFinish}>Finish</Button>
      </View>
    </Animated.View>
  );
};
