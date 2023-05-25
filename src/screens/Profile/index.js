import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DocumentPicker from 'react-native-document-picker';
import FileViewer from 'react-native-file-viewer';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import ImageCropPicker from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-picker';
import { Images } from '../../shared/Images';
import { changeLogin } from '../../store/welcome/index';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import { useUploadImageMutation } from '../../services/modules/users';

const Profile = ({ route }) => {
  const [fileResponse, setFileResponse] = useState();
  const [name, setName] = useState('');
  const [singleFile, setSingleFile] = useState(null);
  const [disabled, setDisable] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [uriImage, setUri] = useState('');
  const objectInfo = route.params;
  const dataLogged = useSelector(data => data.welcome.loggedUser);
  const email = useSelector(data => data.welcome.email);
  const [uploadImage] = useUploadImageMutation();
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
      console.log(response[0], 'response of data picker is');
      setSingleFile(response[0]);
      // setUri(response[0].uri);

      setDisable(true);
      handleUpload(response[0].name);
    } catch (err) {
      // console.warn(err);
      console.log(err);
      Alert.alert(err.code);
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

  async function selectImage() {
    try {
      ImageCropPicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(data => {
        console.log(data);
        console.log(data.path, 'path for image is');
        setUri(data.path);
        try {
          uploadImage({ image: data })
            .then(res => {
              console.log('showing response');
              console.log(res);
            })
            .catch(err => {
              console.log('we got error');
              console.log(err);
            });
          console.log('function ran');
        } catch {
          console.log('error observed');
        }
      });
    } catch {
      console.log('unhandled');
    }
    // handleUpload();
  }
  async function handleUpload(link) {
    console.log(singleFile, 'single file in upload');
    if (singleFile !== null) {
      //If file selected then create FormData
      console.log('in if of handleUpload');
      const data = new FormData();
      console.log(singleFile, 'single file ');
      data.append('filename', singleFile.name);
      data.append('FileData', {
        FileName: singleFile.name,
        FileExt: '.doc',
        path: singleFile.uri,
      });
      let res1 = await fetch('https://v2.convertapi.com/upload', {
        method: 'post',
        body: data,
        headers: {
          'Content-Disposition': 'data; ',
          'Content-Type': 'multipart/data; ',
        },
      });
      console.log(res1, 'response is');
      let responseJson = await res1.json();
      if (responseJson.status === 1) {
        Alert.alert('Upload Successful');
      }
    } else {
      //if no file selected the show alert
      Alert.alert('unsuccessful');
    }
  }

  const preview = () => {
    console.log('in preview ouside');
    if (uri) {
      console.log('in preview');
      const path = FileViewer.open(uri) // absolute-path-to-my-local-file.
        .then(() => {
          console.log('opened the file');
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  return (
    <>
      {/* <ImageBackground
        source={require('../../components/imagesAll/subtle-prism.png')}
        style={{ flex: 1 }}
      > */}
      <View style={{ flex: 1, backgroundColor: '#87CEEB' }}>
        <View style={style.mainView}>
          <View style={style.uploadMain}>
            <View style={{ flex: 1 }}>
              <View style={style.image}>
                <Image
                  source={uriImage ? { uri: uriImage } : Images.defaultPic}
                  resizeMode="cover"
                  style={style.image}
                />
                <View style={style.imageButton}>
                  <TouchableOpacity
                    onPress={() => selectImage()}
                    hitSlop={{
                      top: 10,
                      left: 40,
                      bottom: 10,
                      right: 40,
                    }}
                  >
                    <Image
                      source={Images.camera}
                      style={style.cameraImage}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <Text style={style.welcomeText}>Welcome {dataLogged} !!</Text>
          <Text style={style.emailText}>{email}</Text>
          <TouchableOpacity
            style={[style.logOut, { marginTop: 30 }]}
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
      {/* </ImageBackground> */}
    </>
  );
};

export default Profile;
