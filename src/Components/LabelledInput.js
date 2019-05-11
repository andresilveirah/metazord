import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import Text, { Typography } from 'components/Text'

export default ({ label, ...inputProps }) => (
  <View style={styles.container}>
    <Text>{label}</Text>
    <TextInput
      style={[styles.input, Typography.medium]}
      autoCorrect={false}
      autoCapitalize="none"
      textContentType="none"
      {...inputProps} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  input: {
    flex:1,
    borderBottomWidth: 1
  }
})
