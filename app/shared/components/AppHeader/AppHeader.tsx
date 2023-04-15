import {TouchableOpacity, View} from 'react-native';
import {Typography} from '../../../ui/Typography';
import {styles} from './style';
import {COLORS} from '../../theme/colors';
import {AppIcon} from '../AppIcon';

type Props = {
  title: string;
  moreIcon: boolean;
  onBackButton: () => void;
  onMoreButton: () => void;
};

export const AppHeader: React.FC<Props> = ({
  title,
  moreIcon,
  onBackButton,
  onMoreButton,
}) => {
  return (
    <View style={styles.content}>
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
