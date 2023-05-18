import {AppLayout} from '../../shared/components/AppLayout';
import {Categories} from '../../feature/Home/Categories';
import {RecomendList} from '../../shared/components/RecomendList';
import {useNavigation} from '@react-navigation/native';
import {PATHNAME} from '../../shared/constants/pathname';
import {TabHeader} from '../../shared/components/TabHeader';
import {useQueries} from '@tanstack/react-query';
import {
  getCatagories,
  getCatalogBooks,
  getCompilationsBooks,
} from '../../api/home';
import {CategoryType} from '../../types/category';
import {BookType} from '../../types/books';

const HomeScreen = () => {
  const {navigate} = useNavigation();

  const [catagories, catalog, compilations] = useQueries({
    queries: [
      {queryKey: ['catagoroes'], queryFn: getCatagories},
      {queryKey: ['catalog'], queryFn: getCatalogBooks},
      {queryKey: ['compilations'], queryFn: getCompilationsBooks},
    ],
  });

  const books = catalog?.data?.data;

  const handleSelectCategory = (item: CategoryType) => {
    console.log(item);
  };

  const handleSelectItem = (item: any) => {
    navigate(PATHNAME.DetailItems.pathname, {
      id: item?.id,
      title: item?.title ?? item?.name,
    });
  };

  const handleSelectSeeMore = (title: string) => {
    navigate(PATHNAME.SeeMore.pathname, {title});
  };
  return (
    <AppLayout variant="none">
      <TabHeader />
      <Categories
        data={catagories?.data?.data.genres}
        title="Categories"
        onChooseCategory={handleSelectCategory}
      />
      <RecomendList
        title="Recommended For You"
        data={books?.best_books}
        onPressItem={handleSelectItem}
        onSeeMore={() => handleSelectSeeMore('Recommended For You')}
      />
      <RecomendList
        title="Best Seller"
        variant="suggestion"
        data={compilations?.data?.data.compilations}
        // data={books?.best_books}
        onPressItem={handleSelectItem}
        onSeeMore={() => handleSelectSeeMore('Best Seller')}
      />
      <RecomendList
        title="Popular"
        variant="withinfo"
        data={books?.popular_books}
        onPressItem={handleSelectItem}
        onSeeMore={() => handleSelectSeeMore('Best Seller')}
      />

      <RecomendList
        title="New Releases"
        variant="withinfo"
        data={books?.new_books}
        onPressItem={handleSelectItem}
        onSeeMore={() => handleSelectSeeMore('New Releases')}
      />
    </AppLayout>
  );
};

export default HomeScreen;
