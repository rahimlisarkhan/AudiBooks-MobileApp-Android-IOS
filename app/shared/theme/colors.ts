type ColorsKeyType =
  | 'neutral5'
  | 'neutral10'
  | 'neutral20'
  | 'neutral30'
  | 'neutral40'
  | 'neutral50'
  | 'neutral60'
  | 'neutral70'
  | 'neutral80'
  | 'neutral90'
  | 'neutral100'
  | 'primary5'
  | 'primary10'
  | 'primary20'
  | 'primary30'
  | 'primary40'
  | 'primary50'
  | 'primary60'
  | 'primary70'
  | 'primary80'
  | 'primary90'
  | 'primary100'
  | 'accent5'
  | 'accent10'
  | 'accent20'
  | 'accent30'
  | 'accent40'
  | 'accent50'
  | 'accent60'
  | 'accent70'
  | 'accent80'
  | 'accent90'
  | 'accent100'
  | 'neutralBlack'
  | 'neutralWhite';

type ColorsType = {
  [key in ColorsKeyType]: string;
};

export const COLORS: ColorsType = {
  primary5: '#F3F1FE',
  primary10: '#DDD7FC',
  primary20: '#BBB1FA',
  primary30: '#9487F1',
  primary40: '#7466E3',
  primary50: '#4838D1',
  primary60: '#3528B3',
  primary70: '#261C96',
  primary80: '#191179',
  primary90: '#100A64',
  primary100: '#090638',

  accent5: '#FFFAF5',
  accent10: '#FEEEDD',
  accent20: '#FED9BB',
  accent30: '#FCBE99',
  accent40: '#FAA47F',
  accent50: '#F77A55',
  accent60: '#D4553E',
  accent70: '#B1362A',
  accent80: '#8F1C1B',
  accent90: '#761016',
  accent100: '#480A0D',

  neutral5: '#F5F5FA',
  neutral10: '#EBEBF5',
  neutral20: '#D5D5E3',
  neutral30: '#B8B8C7',
  neutral40: '#B8B8C7',
  neutral50: '#9292A2',
  neutral60: '#6A6A8B',
  neutral70: '#494974',
  neutral80: '#2E2E5D',
  neutral90: '#1C1C4D',
  neutral100: '#0F0F29',

  neutralWhite: '#FFFFFF',
  neutralBlack: '#010104',
};
