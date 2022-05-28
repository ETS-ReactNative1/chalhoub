import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';

const SideBar = () => {
    return(
            <ScrollView>
                <ImageBackground style={styles.profileBG}>
            <Image style={styles.profile} source={require('../../assets/images/profile.jpg')} />
            <Text style={styles.profileName}>
                Profile Name
            </Text>

            

            </ImageBackground>

            </ScrollView>
            
        )
    
}
export default SideBar;
const styles = StyleSheet.create({
    profile:{
        flex:1,
        width:80,
        height:80,
        borderRadius:40,
        borderColor:'#fff',
        borderWidth:3
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
    }
})