import React from 'react';
import { View } from 'react-native';

import TargetingParams from 'components/TargetingParams';
import LabelledInput from 'components/LabelledInput';
import Toggle from 'components/Toggle';

export default ({ site, onSiteChange }) => {
  const {accountId, siteName, campaignEnv, targetingParams} = site;
  return (
    <View style={{ flex: 1 }}>
      <LabelledInput
        label="Account Id: "
        placeholder="Accound Id ..."
        value={accountId}
        onChangeText={(accountId) => onSiteChange({ ...site, accountId })}
        returnKeyType="next"
        keyboardType="numeric"
      />
      <LabelledInput
        label="Site Name: "
        placeholder="Site Name ..."
        value={siteName}
        onChangeText={(siteName) => onSiteChange({ ...site, siteName })}
        returnKeyType="done"
      />
      <Toggle
        off="Public"
        on="Staging"
        value={campaignEnv}
        onToggle={(campaignEnv) => onSiteChange({ ...site, campaignEnv })}
      />
      <TargetingParams
        targetingParams={targetingParams}
        onTargetingParamsChange={(targetingParams) => onSiteChange({ ...site, targetingParams })}
      />
    </View>
  );
};
