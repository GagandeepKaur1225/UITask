import { Alert, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import AsyncStorage from '@react-native-async-storage/async-storage';
import Bottom from './Bottom';
import CustomList from '../../components/CustomFlatlist';
import { Images } from '../../shared/Images';
import { PushNotification } from 'react-native-push-notification';
import TopView from './TopView';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import messaging from '@react-native-firebase/messaging';
import { setWelcome } from '../../store/welcome';

const Welcome = ({ route }) => {
  const dataIndex = useSelector(data => data.welcome.indexList);
  const objectInfo = route.params;
  const [indexRequired, setIndexRequired] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = useRef(null);
  useEffect(() => {
    console.log('in use effect of welcome', objectInfo, route.params);
    if (objectInfo?.value === 0) {
      setCurrentIndex(0);
      console.log('in if condition in use effect of welcome ');
    }
  }, [route.params]);
  const dispatch = useDispatch();
  const item = [
    {
      image: Images.screen2,
      heading: 'WE ARE CUTE',
      subHeading: 'Discover all kinds of plants in the World.',
      body: 'Quickly scan the plant and find in our complete catalogue everything about the plant you want',
      isSkip: true,
    },
    {
      image: Images.flower,
      heading: 'WE ARE COMPLETE',
      subHeading: 'Share your best plan experiences',
      body: 'Quickly scan the plant and find in our complete catalogue everything about the plant you want',
      isSkip: true,
    },
    {
      image: Images.screen2,
      heading: 'WE ARE CUTE',
      subHeading: 'Beautiful plants for incredible experiences',
      body: 'Quickly scan the plant and find in our complete catalogue everything about the plant you want',
      isSkip: false,
    },
  ];
  const pull_data = data => {
    console.log(data, 'data from child is');
    setIndexRequired(data);
  };
  const set_index = raw => {
    console.log(raw, 'raw value is:');
    setCurrentIndex(prev => prev + 1);
  };
  console.log(indexRequired, 'outside the render');
  return (
    <View style={{ height: heightPercentageToDP(100) }}>
      <TopView indexCheck={indexRequired} />
      <CustomList
        reference={flatlistRef}
        data={item}
        pull_data={pull_data}
        setIndexItem={indexRequired}
        Index={currentIndex}
      />
      <Bottom indexValue={indexRequired} data={item} referred={flatlistRef} />
    </View>
  );
};

export default Welcome;
