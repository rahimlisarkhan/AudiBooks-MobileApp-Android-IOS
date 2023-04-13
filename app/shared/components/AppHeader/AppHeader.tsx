import {TouchableOpacity, View} from 'react-native';
import {Typography} from '../../../ui/Typography';
import ArrowLeftIcon from '../../../assets/icons/arrow-light-left.svg';
import MoreIcon from '../../../assets/icons/more-square.svg';
import {styles} from './style';
import {COLORS} from '../../theme/colors';

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
        <ArrowLeftIcon width={24} height={24} color={COLORS.neutral80} />
      </TouchableOpacity>
      <Typography variant="body2" weight="medium" color={COLORS.neutral80}>
        {title}
      </Typography>
      <View>
        {moreIcon && (
          <TouchableOpacity onPress={onMoreButton}>
            <MoreIcon width={24} height={24} color={COLORS.neutral80} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

AppHeader.defaultProps = {
  title: 'Page Title',
};
