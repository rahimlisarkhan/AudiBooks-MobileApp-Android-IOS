import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Card} from '../Card';

type Props = {
  data: {
    [key in string]: string;
  }[];
  renderCard: (cardData: {
    [key in string]: string;
  }) => void;
};

const Slide: React.FC<Props> = ({data, renderCard}) => {
  const slideSize = data.length - 1;

  const [slide, setSlide] = useState<number>(0);

  const onPrev = () => {
    setSlide(prevSlide => (prevSlide === 0 ? 0 : (prevSlide -= 1)));
  };

  const onNext = () => {
    setSlide(prevSlide =>
      prevSlide === slideSize ? slideSize : (prevSlide += 1),
    );
  };

  return <View>{renderCard(data[slide])}</View>;
};

export default Slide;
