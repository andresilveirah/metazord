import React, { useState } from 'react';
import { View, TouchableHighlight } from 'react-native';

import Text from 'components/Text'

import LabelledInput from 'components/LabelledInput';

export default ({ onAdd }) => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const isValid = () => key.trim() !== '' && value.trim() !== '';
  const addParam = () => {
    if(isValid()) {
      onAdd(key, value);
      setKey('');
      setValue('');
    }
  };

  return (
    <View style={{ alignItems: 'center', flexWrap: 'wrap' }}>
      <LabelledInput
        label="Key: "
        placeholder="Key..."
        value={key}
        onChangeText={setKey}
        returnKeyType="next"
      />
      <LabelledInput
        label="Value: "
        placeholder="Value..."
        value={value}
        onChangeText={setValue}
        onSubmitEditing={addParam}
        returnKeyType="done"
      />
      <TouchableHighlight
        underlayColor="#DDD"
        onPress={addParam}
        disabled={!isValid()} style={{ alignSelf: 'flex-end' }}
      >
        <Text style={[!isValid() ? { color: '#AAAAAA' } : null]}>➕Add</Text>
      </TouchableHighlight>
    </View>
  );
};
