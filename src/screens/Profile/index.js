import {
  Alert,
  Linking,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';

import DocumentPicker from 'react-native-document-picker';
import FileViewer from 'react-native-file-viewer';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { ImageBackground } from 'react-native';
import { Images } from '../../shared/Images';
import { changeLogin } from '../../store/welcome/index';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';

const Profile = ({ route }) => {
  const [fileResponse, setFileResponse] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [uri, setUri] = useState('');
  const objectInfo = route.params;
  const dataLogged = useSelector(data => data.welcome.loggedUser);
  const email = useSelector(data => data.welcome.email);
  useEffect(() => {
    GoogleSignin.configure();
    console.log('inn use effect');
  });

  const handleDocumentSelection = useCallback(async () => {
    try {
      console.log('in try block of function');
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileResponse(response[0].name);
      console.log(response[0].uri, 'response of data picker is');
      setUri(response[0].uri);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log('LOGGED OUT');
      dispatch(changeLogin());
      navigation.goBack(); // Remember to remove the user from your app's state as well
      // navigation.navigate('Welcome', { value: 0 });
    } catch (error) {
      console.error(error);
    }
  };

  console.log(objectInfo, 'objectInfo is');

  const preview = () => {
    Linking.openURL(uri)
      .then(() => console.log('opened'))
      .catch(error => {
        console.log('Error opening file: ', error);
      });
  };
  return (
    <>
      {/* <ImageBackground
        source={require('../../components/imagesAll/subtle-prism.png')}
        style={{ flex: 1 }}
      > */}
      <View style={{ flex: 1, backgroundColor: '#87CEEB' }}>
        <View style={style.mainView}>
          <Text style={style.welcomeText}>Welcome {dataLogged} !!</Text>
          <Text style={{ alignSelf: 'center' }}>{email}</Text>
          <View style={style.uploadMain}>
            <View>
              <TouchableOpacity onPress={() => preview()}>
                <Text>{fileResponse}</Text>
              </TouchableOpacity>
            </View>
            <View style={style.buttonView}>
              <TouchableOpacity
                onPress={() => handleDocumentSelection()}
                hitSlop={{
                  top: 5,
                  left: 20,
                  bottom: 10,
                  right: 20,
                }}
              >
                <Text>ADD DOC</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={style.logOut}
            onPress={() => signOut()}
            hitSlop={{
              top: 5,
              left: 20,
              bottom: 10,
              right: 20,
            }}
          >
            <Text style={style.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
        style={{
          width: widthPercentageToDP('80%'),
          height: heightPercentageToDP('80%'),
          alignSelf: 'center',
        }}
      ></Modal>
      {/* </ImageBackground> */}
    </>
  );
};

export default Profile;
