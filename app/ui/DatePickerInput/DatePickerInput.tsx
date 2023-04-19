import React, {MutableRefObject, useRef, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {TextInput} from '../TextInput';
import {TouchableOpacity} from 'react-native';
import {onvertDateTimeToDate} from '../../shared/utils/onvertDateTimeToDate';

type Props = {
  onChangeText?: (data: Date) => void;
  dateMode?: string;
  theme?: 'dark' | 'light' | 'auto';
};

export const DatePickerInput: React.FC<Props> = ({
  dateMode = 'date',
  theme,
  onChangeText,
  ...props
}) => {
  const [date, setData] = useState(new Date());
  const [open, setOpen] = useState(false);

  const inputRef = useRef<MutableRefObject<null>>(null);

  return (
    <>
      <TouchableOpacity>
        <TextInput
          ref={inputRef}
          value={onvertDateTimeToDate(date)}
          onFocus={() => setOpen(true)}
          {...props}
        />
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        theme={theme}
        mode={dateMode ?? 'date'}
        onConfirm={date => {
          setOpen(false);
          setData(date);
          onChangeText?.(date);
          inputRef?.current?.blur?.();
        }}
        onCancel={() => {
          setOpen(false);
          inputRef?.current?.blur?.();
        }}
      />
    </>
  );
};
