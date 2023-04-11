import {Appearance, StyleSheet} from 'react-native';
export const colorScheme = Appearance.getColorScheme() ?? 'dark';
type StatusBarStyle = 'dark-content' | 'light-content' | 'default';

export const statusBarBackground = colorScheme === 'dark' ? '#141414' : '#fff';

const barStyle: StatusBarStyle =
  colorScheme === 'light' ? 'dark-content' : 'light-content';

export const rootColor = colorScheme === 'dark' ? '#fff' : '#141414';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: statusBarBackground,
  },
});

export const styles = {
  root: style,
  statusBarBackground,
  barStyle,
};
