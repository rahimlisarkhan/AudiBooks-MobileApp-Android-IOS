import {FlatList, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppLayout} from '../../shared/components/AppLayout';

import data from '../../data/books.json';
import {CardInfo} from '../../shared/components/CardWithInfo';
import {pixelSizeHorizontal} from '../../shared/theme/metrics';

const SeeMoreScreen = () => {
  const {setOptions} = useNavigation();
  const {params} = useRoute();

  useLayoutEffect(() => {
    setOptions({
      title: params?.title,
    });
  }, [params]);

  return (
    <AppLayout style={{paddingHorizontal: pixelSizeHorizontal(20)}}>
      <FlatList
        numColumns={2}
        style={{flexDirection: 'row', flexWrap: 'wrap', gap: 20}}
        data={data}
        renderItem={({item}) => {
          console.log(item);

          return <CardInfo {...item} />;
        }}
      />
    </AppLayout>
  );
};

export default SeeMoreScreen;
