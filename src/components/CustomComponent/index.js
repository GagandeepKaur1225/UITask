import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Images } from '../../shared/Images';
import React from 'react';
import { style } from './style';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const CustomComponent = () => {
  return (
    <>
      <View style={style.skip}>
        <TouchableOpacity
          hitSlop={{
            top: 5,
            left: 20,
            bottom: 10,
            right: 20,
          }}
        >
          <Text>SKIP</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={Images.flower}
          style={style.imageStyle}
          resizeMode="contain"
        />
      </View>
      <View style={{ left: widthPercentageToDP('8%') }}>
        <Text style={style.headerText}>WE ARE CUTE</Text>
        <Text style={style.heading}>
          Discover all kinds of plants in the World.
        </Text>
        <Text>
          Quickly scan the plant and find in our complete catalogue,everything
          about the plant you want
        </Text>
      </View>
      <View style={style.bottomView}>
        <Text>----</Text>
        <View>
          <TouchableOpacity
            style={style.nextButton}
            hitSlop={{
              top: 5,
              left: 20,
              bottom: 10,
              right: 20,
            }}
          >
            <View>
              <Text style={style.nextText}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CustomComponent;
