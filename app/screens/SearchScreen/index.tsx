import {View, Text} from 'react-native';
import React from 'react';
import {AppLayout} from '../../shared/components/AppLayout';
import {TabHeader} from '../../shared/components/TabHeader';
import {Typography} from '../../ui/Typography';
import {COLORS} from '../../shared/theme/colors';
import {TextInput} from '../../ui/TextInput';

const SearchScreen = () => {
  return (
    <AppLayout variant="small">
      <TabHeader style={{paddingHorizontal: 0}} />

      <View>
        <Typography
          variant="title3"
          weight="semibold"
          color={COLORS.neutralBlack}>
          Explore
        </Typography>
        <TextInput placeholder="Search Books or Author..." />
      </View>
    </AppLayout>
  );
};

export default SearchScreen;
