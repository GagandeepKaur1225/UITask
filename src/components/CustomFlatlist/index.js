import { Dimensions, FlatList, Image, Text, View } from 'react-native';
import React, { useEffect } from 'react';

import { Images } from '../../shared/Images';
import { style } from './style';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const CustomList = ({ ...props }) => {
  const { width, height } = Dimensions.get('window');
  console.log(width, 'width of the screen is:');
  let itemWidths = [];
  useEffect(() => {
    console.log(
      props?.reference?.current?._listRef,
      'props?.referred?._getItem',
    );
  }, [props]);

  const itemView = ({ item, index }) => {
    return (
      <>
        <View style={{ width: widthPercentageToDP('100%') }}>
          <Image
            source={item.image}
            style={style.imageStyle}
            resizeMode="contain"
          />
          <Text style={style.headerText}>{item.heading}</Text>
          <Text style={style.heading}>{item.subHeading}</Text>
          <Text style={style.body}>{item.body}</Text>
        </View>
      </>
    );
  };

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const values = event.nativeEvent.contentOffset;
    console.log(values, 'values in event for width are:');
    console.log(contentOffsetX, 'checking...');
    const itemIndex = Math.floor(contentOffsetX / width);

    console.log('check', itemIndex);
    props.pull_data(itemIndex);
  };
  return (
    <FlatList
      ref={props.reference}
      style={style.flatlist}
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
      initialScrollIndex={props.Index}
    />
  );
};

export default CustomList;
