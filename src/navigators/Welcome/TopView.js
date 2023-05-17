import { Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';

const TopView = ({ ...props }) => {
  const navigation = useNavigation();
  return (
    <>
      {props.indexCheck !== 2 ? (
        <View style={style.skip}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            hitSlop={{
              top: 5,
              left: 5,
              bottom: 5,
              right: 5,
            }}
          >
            <Text>SKIP</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={style.skip}>
          <TouchableOpacity
            hitSlop={{
              top: 5,
              left: 20,
              bottom: 10,
              right: 20,
            }}
          >
            <Text />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default TopView;
