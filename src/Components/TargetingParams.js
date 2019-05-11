import React from 'react'
import { View } from 'react-native'

import Text from 'components/Text'

import TargetingParamsList from 'components/TargetingParamsList';
import AddTargetingParam from 'components/AddTargetingParam';

export default ({ targetingParams, onTargetingParamsChange }) => {
  const addTargetingParam = (key, value) => onTargetingParamsChange({ ...targetingParams, [key]: value });
  const removeTargetingParam = (key) => {
    const { [key]: _value, ...rest } = targetingParams;
    onTargetingParamsChange(rest);
  };

  return (
    <View>
      <View style={{ borderBottomWidth: 1 }}>
        <Text>Targeting Params</Text>
      </View>
      <TargetingParamsList
        targetingParams={targetingParams}
        onDeletePress={removeTargetingParam}
      />
      <AddTargetingParam onAdd={addTargetingParam} />
    </View>
  );
};
