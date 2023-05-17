import React, { useState } from 'react';

import Bottom from './Bottom';
import CustomList from '../../components/CustomFlatlist';
import { Images } from '../../shared/Images';
import TopView from './TopView';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

const Welcome = () => {
  const dataIndex = useSelector(data => data.welcome.indexList);
  const [indexRequired, setIndexRequired] = useState(0);
  const item = [
    {
      image: Images.mainImage,
      heading: 'WE ARE CUTE',
      subHeading: 'Discover all kinds of plants in the World.',
      body: 'Quickly scan the plant and find in our complete catalogue everything about the plant you want',
      isSkip: true,
    },
    {
      image: Images.secondImage,
      heading: 'WE ARE COMPLETE',
      subHeading: 'Share your best plan experiences',
      body: 'Quickly scan the plant and find in our complete catalogue everything about the plant you want',
      isSkip: true,
    },
    {
      image: Images.mainImage,
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
  console.log(indexRequired, 'outside the render');
  return (
    <View>
      <TopView indexCheck={indexRequired} />
      <CustomList
        data={item}
        pull_data={pull_data}
        setIndexItem={indexRequired}
      />
      <Bottom indexValue={indexRequired} />
    </View>
  );
};

export default Welcome;
{
  /* <View style={style.bottomView}>
        <Text>-{indexRequired + 1}-</Text>
        {indexRequired !== 2 ? (
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
      </View> */
}
{
  /* {indexRequired !== 2 ? (
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
      )} */
}
