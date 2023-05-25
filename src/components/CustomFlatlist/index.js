import { Dimensions, FlatList, Image, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Images } from '../../shared/Images';
import { style } from './style';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const CustomList = ({ ...props }) => {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [currDirection, setCurrentDirection] = useState('');
  const { width, height } = Dimensions.get('window');
  const snapInterval = width;
  console.log(width, 'width of the screen is:');
  const itemView = ({ item, index }) => {
    return (
      <>
        <View style={{ width: widthPercentageToDP('100%') }}>
          <Image
            source={item.image}
            style={style.imageStyle}
            resizeMode="cover"
          />
          <Text style={style.headerText}>{item.heading}</Text>
          <Text style={style.heading}>{item.subHeading}</Text>
          <Text style={style.body}>{item.body}</Text>
        </View>
      </>
    );
  };

  const onMomentumScrollEnd = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const itemIndex = Math.floor(contentOffsetX / width);
    const itemOffset = contentOffsetX - itemIndex * width;
    const itemPercentage = (itemOffset / width) * 100;
    console.log('percentage f the item viewed', itemPercentage);
    const values = event.nativeEvent.contentOffset;

    props.pull_data(itemIndex);
  };

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const itemIndex = Math.floor(contentOffsetX / width);
    const itemOffset = contentOffsetX - itemIndex * width;
    const itemPercentage = (itemOffset / width) * 100;
    console.log(
      'percentage f the item viewed',
      itemPercentage,
      'index',
      itemIndex,
    );
    console.log(itemIndex, previousIndex, 'comparing indices');
    // props.pull_data(itemIndex);
    const currentDirection = itemIndex > previousIndex ? 'forward' : 'backward';
    if (
      (currentDirection === 'forward' && itemPercentage >= 30) ||
      (currentDirection === 'backward' && itemPercentage <= 50)
    ) {
      console.log(currentDirection, 'current direction is');
      props.pull_data(itemIndex);
    }
    setPreviousIndex(itemIndex);
    setCurrentDirection(currentDirection);
  };
  return (
    <FlatList
      ref={props.reference}
      style={style.flatlist}
      data={props.data}
      renderItem={itemView}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      // decelerationRate={0}
      // overScrollMode={'never'}
      pagingEnabled={true}
      keyExtractor={(_, index) => {
        index.toString();
      }}
      // onScroll={handleScroll}
      onMomentumScrollEnd={onMomentumScrollEnd}
      initialScrollIndex={props.Index}
      // snapToInterval={width}
      disableIntervalMomentum={true}
      // scrollEventThrottle={10}
    />
  );
};

export default CustomList;
