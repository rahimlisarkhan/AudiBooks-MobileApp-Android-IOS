import {View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppLayout} from '../../shared/components/AppLayout';
import {DetailInfo} from '../../feature/Detailed/components/DetailInfo';

const DetailScreen = () => {
  const {setOptions} = useNavigation();
  const {params} = useRoute();

  console.log('params', params);

  useLayoutEffect(() => {
    setOptions({
      title: params?.title,
    });
  }, [params]);

  return (
    <AppLayout>
      <DetailInfo {...params} />
    </AppLayout>
  );
};

export default DetailScreen;
