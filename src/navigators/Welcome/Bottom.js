import { Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { setWelcome } from '../../store/welcome';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Bottom = ({ ...props }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const renderIndicator = () => {
    const arrayToBeTraversed = props.data;
    return (
      <View style={style.indicatorStyle}>
        {arrayToBeTraversed.map((_, index) =>
          index === props.indexValue ? (
            <View key={index} style={style.indicatorFocused} />
          ) : (
            <View key={index} style={style.indicatorNormal} />
          ),
        )}
      </View>
    );
  };

  const handleNext = () => {
    console.log(props.indexValue, 'index required in next button');
    if (props.referred.current) {
      props.referred.current.scrollToIndex({
        animated: true,
        index: props.indexValue + 1,
      });
    }
  };

  return (
    <View style={style.bottomView}>
      {renderIndicator()}
      {props.indexValue !== 2 ? (
        <View>
          <TouchableOpacity
            style={style.nextButton}
            onPress={() => handleNext()}
          >
            <View>
              <Text style={style.nextText}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            style={style.startButton}
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
            <View>
              <Text style={style.nextText}>Start</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Bottom;
