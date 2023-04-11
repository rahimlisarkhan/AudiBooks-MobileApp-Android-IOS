import {Dimensions, PixelRatio} from 'react-native';

export const DEVICE_HEIGHT = Dimensions.get('window').height; // Height from Dimensions

export const DEVICE_WIDTH = Dimensions.get('window').width; // Width from Dimensions

export const LAYOUT_WIDTH = 375; // Width from design
export const LAYOUT_HEIGHT = 812; //Height from design

const widthBaseScale = DEVICE_WIDTH / LAYOUT_WIDTH;
const heightBaseScale = DEVICE_HEIGHT / LAYOUT_HEIGHT;

function widthNormalize(size: number) {
  const resize = size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(resize));
}

function heightNormalize(size: number) {
  const resize = size * heightBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(resize));
}

//for width  pixel
const widthPixel = (size: number): number => {
  return widthNormalize(size);
};
//for height  pixel
const heightPixel = (size: number): number => {
  return heightNormalize(size);
};
//for font  pixel
const fontPixel = (size: number): number => {
  return heightPixel(size);
};

//for Margin and Padding vertical pixel
const pixelSizeVertical = (size: number): number => {
  return heightPixel(size);
};
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: number): number => {
  return widthPixel(size);
};

export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
};
