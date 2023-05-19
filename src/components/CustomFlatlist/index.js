import { FlatList, Image, Text, View } from 'react-native';
import React, { useEffect } from 'react';

import { Images } from '../../shared/Images';
import { style } from './style';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const CustomList = ({ ...props }) => {

  useEffect(() => {
    console.log(props?.reference?.current?._listRef, 'props?.referred?._getItem');
    
  }, [props])
  
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
    const itemIndex = Math.floor(contentOffsetX / 360);
    console.log("check");
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
