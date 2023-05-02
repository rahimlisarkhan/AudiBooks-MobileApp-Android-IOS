import {AppLayout} from '../../shared/components/AppLayout';
import {Categories} from '../../feature/Home/Categories';
import {RecomendList} from '../../shared/components/RecomendList';
import books from '../../data/books.json';
import {useNavigation} from '@react-navigation/native';
import {PATH} from '../../shared/constants/path';

const data = [
  {id: 1, title: 'Art'},
  {id: 2, title: 'Business'},
  {id: 3, title: 'Biography'},
  {id: 4, title: 'Comedy'},
  {id: 5, title: 'Culture'},
  {id: 6, title: 'Education'},
  {id: 7, title: 'News'},
  {id: 8, title: 'Philosophy'},
  {id: 9, title: 'Psychology'},
  {id: 10, title: 'Technology'},
  {id: 11, title: 'Travel'},
];

const HomeScreen = () => {
  const {navigate} = useNavigation();

  const handleSelectCategory = item => {
    console.log(item);
  };

  const handleSelectItem = (item: any) => {
    navigate(PATH.DetailItems.pathname, item);
  };

  return (
    <AppLayout variant="none">
      <Categories
        data={data}
        title="Categories"
        onChooseCategory={handleSelectCategory}
      />
      <RecomendList
        title="Recommended For You"
        data={books}
        onPressItem={handleSelectItem}
      />
      <RecomendList
        title="Best Seller"
        variant="suggestion"
        data={books}
        onPressItem={handleSelectItem}
      />
      <RecomendList
        title="New Releases"
        variant="withinfo"
        data={books}
        onPressItem={handleSelectItem}
      />
      <RecomendList
        title="Trending Now"
        variant="withinfo"
        data={books}
        onPressItem={handleSelectItem}
      />
    </AppLayout>
  );
};

export default HomeScreen;
