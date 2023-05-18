import {View, Text} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import Sheet from '@gorhom/bottom-sheet';
import {styles} from './styles';

const BottomSheet = () => {
  // ref
  const bottomSheetRef = useRef<Sheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleCloseSheet = () => {
    bottomSheetRef.current.close();
  };

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <View>
      <Sheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </Sheet>
    </View>
  );
};

export default BottomSheet;
