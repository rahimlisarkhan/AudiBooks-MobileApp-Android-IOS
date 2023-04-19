import {View} from 'react-native';
import {Typography} from '../../../ui/Typography';
import {styles} from './styles';
import {TextInput} from '../../../ui/TextInput';
import {Button} from '../../../ui/Button';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {PATH} from '../../../shared/constants/path';
import {FinishPanel} from '../FinishPanel';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

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

const initialStateAnimated = {
  finish_panel: {
    opacity: 0,
    zIndex: -999,
  },
  personalize_panel: {
    opacity: 1,
    zIndex: 999,
  },
};

export const PersonalizeContent = () => {
  const [chooseCategories, setChooseCategories] = useState([]);
  const [animatedPanels, setAnimatedPanels] = useState(initialStateAnimated);
  const [showPanel, setShowPanel] = useState(true);

  const {navigate} = useNavigation();

  const animatedPersonalizeStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(animatedPanels.personalize_panel.opacity, {
        duration: 500,
      }),
      zIndex: animatedPanels.personalize_panel.zIndex,
    };
  });

  const animatedFinishStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(animatedPanels.finish_panel.opacity, {duration: 500}),
      zIndex: animatedPanels.finish_panel.zIndex,
    };
  });

  const handleSearchCategories = (text: string) => {
    console.log('text:', text);
  };

  const handleChooseItem = (item: any) => {
    const isAlreadyChoose = chooseCategories.find(el => el.id === item.id);

    if (!isAlreadyChoose) {
      setChooseCategories(prev => [...prev, item]);
      return;
    }

    setChooseCategories(prev => prev.filter(el => el.id !== item.id));
  };

  const changeRoutePersonalize = () => {
    onHandleAnimatePanels();
    setShowPanel(false);
  };

  const changeRouteHome = () => {
    navigate(PATH.Home.pathname);
  };

  const onHandleAnimatePanels = () => {
    setAnimatedPanels(prevState => ({
      finish_panel: {...prevState.personalize_panel},
      personalize_panel: {...prevState.finish_panel},
    }));
  };

  const categories = data?.map((item, index) => {
    const isAlreadyChoose = chooseCategories.find(el => el.id === item.id);

    return (
      <Button
        key={`category-id:${index}`}
        size="xsmall"
        rounded
        variant={isAlreadyChoose ? 'contained' : 'outlined'}
        onPress={() => handleChooseItem(item)}>
        {item.title}
      </Button>
    );
  });

  return (
    <>
      {showPanel && (
        <Animated.View style={animatedPersonalizeStyles}>
          <View>
            <Typography variant="body2" weight="semibold" style={styles.title}>
              Personalize Suggestion
            </Typography>
            <Typography variant="headline">
              Choose{' '}
              <Typography variant="headline" weight="semibold">
                {' '}
                min. 3 topic
              </Typography>{' '}
              you like, we will give you more often that relate to it.
            </Typography>
          </View>

          <View style={styles.searchContent}>
            <TextInput
              placeholder="Search Categories"
              onChangeText={handleSearchCategories}
            />
            <View style={styles.searchList}>{categories}</View>

            <View style={styles.btnGroup}>
              <View style={styles.btnSendContent}>
                <Button
                  text="Submit"
                  style={styles.marginBtn}
                  disabled={!chooseCategories.length}
                  onPress={changeRoutePersonalize}
                />
                <Button
                  variant="outlined"
                  text="Skip"
                  style={styles.marginBtn}
                  onPress={changeRouteHome}
                />
              </View>
            </View>
          </View>
        </Animated.View>
      )}
      <FinishPanel styles={animatedFinishStyles} onFinish={changeRouteHome} />
    </>
  );
};
