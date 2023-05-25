import { Text, View } from 'react-native';

import React from 'react';
import { TextInput } from 'react-native-gesture-handler';

const index = () => {
  return (
    <View>
      <Text>email</Text>
      <TextInput></TextInput>
      <Text>password</Text>
      <TextInput />
    </View>
  );
};

export default index;
