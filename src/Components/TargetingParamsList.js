import React from 'react';
import { FlatList, View, TouchableHighlight } from 'react-native';

import Text from 'components/Text'

export default ({ targetingParams, onDeletePress }) => (
  <FlatList
    data={Object.keys(targetingParams)}
    style={{ padding: 15 }}
    renderItem={({ item, index}) => (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
      }}>
        <View style={{flex: 1}}>
          <Text>{item}: {targetingParams[item]}</Text>
        </View>
        <View>
          <TouchableHighlight
            underlayColor="#DDD"
            onPress={() => onDeletePress(item)}>
              <Text>✖️</Text>
          </TouchableHighlight>
        </View>
      </View>
    )}
    keyExtractor={(item) => item}
  />
);
