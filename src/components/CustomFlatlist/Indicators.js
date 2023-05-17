import { FlatList, Text, View } from 'react-native';

import React from 'react';
import { style } from './style';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const Indicators = ({ ...props }) => {
  const draw = () => {
    let indicators = [];
    for (let i = 0; i < props.totalItems; i++) {
      indicators.push(
        <View>
          <Text>0</Text>
        </View>,
      );
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        width: widthPercentageToDP('16%'),
        borderWidth: 2,
      }}
    >
      {draw()}
    </View>
  );
};

export default Indicators;
