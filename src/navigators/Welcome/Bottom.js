import { Text, TouchableOpacity, View } from 'react-native';

import Indicators from '../../components/CustomFlatlist/Indicators';
import React from 'react';
import { style } from './style';

const Bottom = ({ ...props }) => {
  return (
    <View style={style.bottomView}>
      <Text>-{props.indexValue + 1}-</Text>
      {/* <Indicators totalItems={3} /> */}
      {props.indexValue !== 2 ? (
        <View>
          <TouchableOpacity style={style.nextButton}>
            <View>
              <Text style={style.nextText}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity style={style.startButton}>
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
