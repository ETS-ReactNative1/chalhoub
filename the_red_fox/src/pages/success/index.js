import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';



const SuccessPage = ({navigation}) => {
    function renderHeader () {
        return(
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity 
                    style={{
                        justifyContent: 'center',
                        width: 50,
                        height: 100,
                        paddingHorizontal: 20
                    }}
                    onPress={() => navigation.goBack()}
                    >
                        <Image source={require('../../assets/icons/back.png')} 
                            resizeMode='contain'
                            style={{width: 30, height: 30}}
                        />
                </TouchableOpacity>
                
            </View>
        )
    }
 
        return(
            <View>
                {renderHeader()}
                <View style ={styles.container}>
                    <Image source={require('../../assets/images/success-icon.png')} resizeMode='contain'/>
                    
                </View>
                <Text style={{color:'#7D0707',top:250, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Your order will be delivered soon. 
Thank you for choosing The Red Fox. </Text>
            </View>
            
        )
    
}
export default SuccessPage;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        top: 100,
        left: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})