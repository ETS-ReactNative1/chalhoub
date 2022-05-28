/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Text,
  Dimensions,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import UserPermissions from '../../utilities/UserPermissions';


const Profile = () => {
  const [username,setName]= useState('');
  const [gender, setGender] = useState('');
  const [imgs, setImgs] = useState();
  const [avatar, setAvatar] = useState();
  
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/2')
    .then(response => {
       setName(response.data.name)
       setGender(response.data.gender)
       
       setAvatar(response.data.image)
       console.log("response....",response.data)
       console.log("response....",response.data.name)
       console.log("response....",response.data.gender)
       console.log("response....",response.data.image)
    }).catch(err=>{
      console.log("Error-----",err)
    })
        
  },[]);
 
  
  const handlecamerAvatar = async () => {
    let granted = await UserPermissions.getCameraPermission();
    if (granted || Platform.OS === 'ios') {
      const options = {
        multiple: true,
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      ImagePicker.showImagePicker(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          //setAvatar(response.uri);
        }
      });
    }
  };
  const imageUploader = async () => {
    let granted = await UserPermissions.getCameraPermission();
    if (granted) {
      ImagePicker.openPicker({
        width: 200,
        height: 200,
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      }).then(image => {
        //let avatar = image.path;
        //setAvatar(avatar);
        console.log(image.path);
      });
    }
  };

  const imageCamera = async () => {
    let granted = await UserPermissions.getCameraPermission();
    if (granted) {
      ImagePicker.openCamera({
        width: 200,
        height: 200,
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      }).then(image => {
        //let avatar = image.path.toString();
        //setAvatar(avatar);
        console.log(image);
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.banner}></View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>handlecamerAvatar()}>
            <Image
              style={{
                top: -50,
                shadowOpacity: 80,
                borderRadius: 50,
                width: 100,
                height: 100,
                backgroundColor: '#f0f0fb',
                borderWidth: 10,
                borderColor: '#fff',
              }}
              source={{uri: avatar}}
            />
            
          </TouchableOpacity>
          <View style={{width: '100%', fontSize:'18',color:'#fff',flexDirection:'column'}}>
            
            <View style={{width: '100%', fontSize:'18',color:'#fff',flexDirection:'row'}}>
            <Text>character name:</Text>
            <Text>{username}</Text>
            </View>
          
            <View style={{width: '100%', fontSize:'18',color:'#fff',flexDirection:'row'}}>
            <Text>character Gender:</Text>
            <Text>{gender}</Text>
            </View>
            
            
           
            

            
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    padding: 10,
    backgroundColor: '#EAB72E',
    width: '100%',
    height: 200,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  inputStyle: {
    width: '88%',
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 50,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  inputStyle1: {
    width: '88%',
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAB72E',
    marginHorizontal: 25,
  },
});

export default Profile;
