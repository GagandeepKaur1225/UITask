import { FlatList, Image, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { Images } from '../../shared/Images';
import { changeIndex } from '../../store/welcome';
import { style } from './style';
import { useDispatch } from 'react-redux';

const CustomList = ({ ...props }) => {
  const itemView = ({ item, index }) => {
    console.log(item, 'item renedred');
    console.log(item, index, 'item in reander item');

    return (
      <>
        <View style={{ width: widthPercentageToDP('100%') }}>
          <Image source={Images.mainImage} style={style.imageStyle} />
          <Text style={style.headerText}>{item.heading}</Text>
          <Text style={style.heading}>{item.subHeading}</Text>
          <Text style={style.body}>{item.body}</Text>
        </View>
      </>
    );
  };

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const itemIndex = Math.floor(contentOffsetX / 360); // Replace ITEM_WIDTH with the width of your ite
    props.pull_data(itemIndex);
  };
  return (
    <FlatList
      ref={e => console.log(e, 'e is')}
      style={{
        height: heightPercentageToDP('70%'),
        marginTop: heightPercentageToDP('8%'),
      }}
      data={props.data}
      renderItem={itemView}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      keyExtractor={(_, index) => {
        index.toString();
      }}
      scrollEventThrottle={16}
      onScroll={handleScroll}
      windowSize={1}
    />
  );
};

export default CustomList;
