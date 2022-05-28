import React from 'react';
import { Text,View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

export default class Swipers extends React.Component{
    render(){
        return(
           <Swiper 
                style={styles.wipper}
                dotStyle={{
                    backgroundColor: '#fff',
                    borderColor: '#000',
                    borderWidth: 1,
                    width: 10,
                    height: 10,
                    borderRadius:10
                }}
                activeDotColor='#fff'
                activeDotStyle={{
                    borderColor: '#000',
                    borderWidth: 1,
                    width: 10,
                    height: 10,
                    borderRadius: 10
                }}

           >
                <View style={styles.slide1}>
                        <Image source={require('../../assets/images/task.png')} style={{width: 300,height: 300}}/>

                </View>
                <View style={styles.slide1}>
                        <Image source={require('../../assets/images/task.png')} style={{width: 300,height: 300}}/>

                </View>
                <View style={styles.slide1}>
                        <Image source={require('../../assets/images/task.png')} style={{width: 300,height: 300}}/>

                </View>

           </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    wipper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa'
    }
})