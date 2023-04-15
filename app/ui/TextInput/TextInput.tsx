import {View, TextInput as Input} from 'react-native';
import React, {CSSProperties, useState} from 'react';
import {styles} from './style';
import {COLORS} from '../../shared/theme/colors';

type Props = {
  placeholder: string;
  disabled?: boolean;
  readOnly?: boolean;
  style?: CSSProperties;
};

export const TextInput: React.FC<Props> = ({
  disabled,
  placeholder,
  readOnly,
  style,
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
          style,
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
