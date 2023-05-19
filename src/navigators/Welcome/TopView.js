import { Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { setWelcome } from '../../store/welcome';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const TopView = ({ ...props }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <>
      {props.indexCheck !== 2 ? (
        <View style={style.skip}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
              dispatch(setWelcome());
            }}
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
            disabled={true}
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
