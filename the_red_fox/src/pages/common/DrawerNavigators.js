import React, {useEffect, useState} from 'react';
import  Login  from '../login';
import  SignUp  from '../signup';
import  Detail  from '../detail';
import SuccessPage from '../success';
import { DrawerView, DrawerItem } from '@react-navigation/drawer';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import {createDrawerNavigator} from 'react-navigation-drawer';
import  { createAppContainer } from 'react-navigation';
import { Text, View, Image, ImageBackground,TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const DrawerNavigators =({navigation})=>{
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
 
 
        return(
            <ScrollView>
                <ImageBackground style={styles.profileBG}>
            <Image style={styles.profile} source={{uri: avatar}} />
            <Text style={styles.profileName}>
               {username}
            </Text>

            

            </ImageBackground>
            
            <TouchableOpacity style={styles.lists} onPress={()=> navigation.navigate('')}>
            <FontAwesomeIcon style={{paddingHorizontal:10}} color={'#707070'} name={'sliders'} size={25}/>

                <Text style={styles.optionTexts}>
                    Categories
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lists} onPress={()=> navigation.navigate('Login')}>
            <Entypo style={{paddingHorizontal:10}} name={'network'} color={'#707070'} size={25}/>
                <Text style={styles.optionTexts}>
                    Language
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lists} onPress={()=> navigation.navigate('Login')}>
            <Entypo style={{paddingHorizontal:10}} name={'info'} color={'#707070'} size={25}/>
                <Text style={styles.optionTexts}>
                    About
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lists} onPress={()=> navigation.navigate('Login')}>
            <FontAwesomeIcon style={{paddingHorizontal:10}} name={'gear'} color={'#707070'} size={25}/>
                <Text style={styles.optionTexts}>
                    Settings
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lists} onPress={()=> navigation.navigate('HomeScreen')}>
            <FontAwesomeIcon style={{paddingHorizontal:10}} name={'power-off'} color={'#707070'} size={25}/>
                <Text style={styles.optionTexts}>
                    Logout
                </Text>
            </TouchableOpacity>
            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            
            <Text style={styles.profileName1}>
                Copy Right &copy; 2022 Chalhoub shopping
            </Text>
            <Text style={styles.profileName1}>
                chalhoub shopping v1.1
            </Text>
            <Text style={styles.profileName1}>
                All Rights Reserved.
            </Text>
            </View>
            </ScrollView>
            
        )
    
} 
export default DrawerNavigators;
const styles = StyleSheet.create({
    profile:{
        flex:1,
        width:80,
        height:80,
        borderRadius:40,
        borderColor:'#fff',
        borderWidth:3
    }, 
    icon:{
        flex:1,
        width:100,
        height:100,
        borderRadius:50,
       
    },
    profileBG:{
        backgroundColor: '#EAB72E', 
        padding: 16, 
        paddingTop: 48, 
        justifyContent:'center', 
        alignItems:'center'
    },
    profileName:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    profileName1:{
        color: '#7D0707',
        fontSize: 14,
        fontWeight: 'bold',
    },
    lists: {
        height: 70,
        flexDirection: 'row',
        padding: 10,
    
    },
    optionTexts:{
        fontSize: 15,
        fontWeight: '800',
        color: '#7D0707'
    }
})