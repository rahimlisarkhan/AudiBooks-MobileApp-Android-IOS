import React from 'react';
import ArrowDownSquareIcon from '../../../assets/icons/arrow-down-square.svg';
import ArrowLightLeftIcon from '../../../assets/icons/arrow-light-left.svg';
import BookmarkIcon from '../../../assets/icons/bookmark.svg';
import CheckIcon from '../../../assets/icons/check.svg';
import DocumentFilledIcon from '../../../assets/icons/document-filled.svg';
import DocumentIcon from '../../../assets/icons/document.svg';
import EllipseIcon from '../../../assets/icons/ellipse.svg';
import HomeIcon from '../../../assets/icons/home.svg';
import MinusIcon from '../../../assets/icons/minus.svg';
import MoreSquareIcon from '../../../assets/icons/more-square.svg';
import PaperIcon from '../../../assets/icons/papar.svg';
import SearchFilledIcon from '../../../assets/icons/search-filled.svg';
import SearchIcon from '../../../assets/icons/search.svg';
import SettingsIcon from '../../../assets/icons/settings.svg';
import TimeSquareIcon from '../../../assets/icons/time-square.svg';

import StarIcon from '../../../assets/icons/star.svg';
import StarFilledIcon from '../../../assets/icons/star-filled.svg';

import {SvgProps} from 'react-native-svg';

export type IconType =
  | 'arrow-down-square'
  | 'arrow-light-left'
  | 'bookmark'
  | 'check'
  | 'document'
  | 'document-filled'
  | 'ellipse'
  | 'home'
  | 'minus'
  | 'more-square'
  | 'paper'
  | 'search-filled'
  | 'search'
  | 'settings'
  | 'time-square'
  | 'star'
  | 'star-filled';

export const ICONS: {
  [key in IconType]: React.FC<SvgProps>;
} = {
  'arrow-down-square': ArrowDownSquareIcon,
  'arrow-light-left': ArrowLightLeftIcon,
  bookmark: BookmarkIcon,
  check: CheckIcon,
  document: DocumentIcon,
  'document-filled': DocumentFilledIcon,
  ellipse: EllipseIcon,
  home: HomeIcon,
  minus: MinusIcon,
  'more-square': MoreSquareIcon,
  paper: PaperIcon,
  'search-filled': SearchFilledIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  'time-square': TimeSquareIcon,
  star: StarIcon,
  'star-filled': StarFilledIcon,
};
