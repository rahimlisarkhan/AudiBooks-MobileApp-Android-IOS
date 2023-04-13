import {View, Text, TextInput as Input} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {COLORS} from '../../theme/colors';

type Props = {
  placeholder: string;
  disabled?: boolean;
  readOnly?: boolean;
};

export const TextInput: React.FC<Props> = ({
  disabled,
  placeholder,
  readOnly,
  ...props
}) => {
  const [activeInput, setActiveInput] = useState(false);

  const onHandleFocus = (e: any) => {
    setActiveInput(true);
  };

  const onHandleBlur = (e: any) => {
    setActiveInput(false);
  };

  return (
    <View style={styles.inputContent}>
      {readOnly && <View style={styles.inputReadOnly}></View>}
      <Input
        style={[
          styles.input,
          activeInput && styles.activeInput,
          disabled && styles.disabled,
        ]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.neutral40}
        onFocus={onHandleFocus}
        onBlur={onHandleBlur}
        readOnly={readOnly}
        {...props}
      />
    </View>
  );
};
