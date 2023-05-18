import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppLayout} from '../../shared/components/AppLayout';
import {DetailInfo} from '../../feature/Detailed/components/DetailInfo';
import {useQuery} from '@tanstack/react-query';
import {getBookID} from '../../api/home';
import {shortName} from '../../shared/utils/shortName';

const DetailScreen = () => {
  const {setOptions} = useNavigation();
  const {params} = useRoute();

  const bookID = params?.id;

  console.log('params', params);

  const {data: book, isLoading} = useQuery(['book', bookID], () =>
    getBookID(bookID),
  );

  const headerTitle = params?.title ?? params?.name;
  const shortTitle = shortName(headerTitle, 30);

  useLayoutEffect(() => {
    setOptions({
      title: shortTitle,
    });
  }, [shortTitle]);

  return (
    <AppLayout>
      <DetailInfo {...book?.data.book} />
    </AppLayout>
  );
};

export default DetailScreen;
