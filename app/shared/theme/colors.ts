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
  | 'mainBlue'
  | 'mainOrange'
  | 'white';

type ColorsType = {
  [key in ColorsKeyType]: string;
};

export const COLORS: ColorsType = {
  mainBlue: '#4838D1',

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

  mainOrange: '#F77A55',
  white: '#FFFFFF',
};
