import {TouchableOpacity, View} from 'react-native';
import {Typography} from '../../../ui/Typography';
import {styles} from './style';
import {COLORS} from '../../theme/colors';
import {AppIcon} from '../AppIcon';
import {useRoute} from '@react-navigation/native';
import {PATHNAME} from '../../constants/pathname';

type Props = {
  title: string;
  moreIcon?: boolean;
  onBackButton: () => void;
  onMoreButton?: () => void;
};

export const AppHeader: React.FC<Props> = ({
  title,
  moreIcon,
  onBackButton,
  onMoreButton,
}) => {
  const router = useRoute();

  console.log('router', router);

  return (
    <View
      style={[
        styles.content,
        router.name === PATHNAME.ErrorNotFound.name && styles.border,
      ]}>
      <TouchableOpacity onPress={onBackButton}>
        <AppIcon name="arrow-light-left" size={24} color={COLORS.neutral80} />
      </TouchableOpacity>
      <Typography variant="body2" weight="medium">
        {title}
      </Typography>
      <View>
        {moreIcon && (
          <TouchableOpacity onPress={onMoreButton}>
            <AppIcon name="more-square" size={24} color={COLORS.neutral80} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

AppHeader.defaultProps = {
  title: 'Page Title',
};
