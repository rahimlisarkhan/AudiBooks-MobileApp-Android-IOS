import {View} from 'react-native';
import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {Dots} from '../Dots';
import {Button} from '../../../ui/Button/Button';
import {styles} from './style';
import {pixelSizeVertical} from '../../../shared/theme/metrics';
import {useNavigation} from '@react-navigation/native';

type Props = {
  data: {
    [key in string]: string;
  }[];
  onPrevPress: () => void;
  onLastPress: () => void;
  renderCard: (cardData: {
    [key in string]: string;
  }) => void;
};

const Slide: React.FC<Props> = ({
  data,
  renderCard,
  onPrevPress,
  onLastPress,
}) => {
  const navigation = useNavigation();

  const slideSize = data.length - 1;

  const [slide, setSlide] = useState<number>(0);

  const isLastSlide = slide === slideSize;

  const dynamicText = useMemo(
    () => (isLastSlide ? 'Lets Get Started' : 'Next'),
    [slide],
  );

  useLayoutEffect(() => {
    setSlide(0);
  }, []);

  const onPrev = () => {
    setSlide(prevSlide => (prevSlide === 0 ? 0 : (prevSlide -= 1)));
    onPrevPress?.();
  };

  const onNext = () => {
    setSlide(prevSlide =>
      prevSlide === slideSize ? slideSize : (prevSlide += 1),
    );
    if (isLastSlide) {
      onLastPress?.();
    }
  };

  return (
    <View>
      {renderCard(data[slide])}
      <Dots count={slideSize + 1} activeDot={slide} />

      <View style={styles.btnGroup}>
        {!isLastSlide && (
          <Button
            size="large"
            variant="text"
            style={{flex: 1, marginRight: pixelSizeVertical(12)}}
            onPress={onPrev}
            text="Skip"
          />
        )}
        <Button
          size="large"
          onPress={onNext}
          text={dynamicText}
          style={{flex: 1}}
        />
      </View>
    </View>
  );
};

export default Slide;
