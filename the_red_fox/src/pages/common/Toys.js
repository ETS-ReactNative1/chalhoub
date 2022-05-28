import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Toys=(props)=>  {

    let navigation = useNavigation();
    
    
    return(
        <TouchableOpacity 
            style={{
                marginTop: 30,
                backgroundColor: '#fff',
                height: 250,
                width: 200,
                elevation: 5,
                borderRadius: 10,
                padding: 10,
                marginBottom: 5,
                marginRight: 30,
                marginLeft: 2
            }}
            onPress={() => navigation.navigate('Detail')}
        >
        <Image
            source={props.src}
            style={{
                width: 170,
                height: 150,
                borderRadius: 10
            }}
        />
        <View 
            style={{
                flexDirection:'row',
                alignItems: 'center',
                marginVertical: 10
            }}
        >
            <Text
                style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#4f4a4a'
                }}
            >
                {props.name}
            </Text>
            <View 
                style={{
                    flexDirection: 'row',
                    left: '50%',
                    alignItems: 'flex-end'
                }}
            >
            <Text style={{fontSize: 12, paddingRight: 3}}>
                2
            </Text>
            <FontAwesomeIcon name='eye' size={15} color='#4f4a4a'/>

            </View>
        </View>
        <Text
            style={{
                    fontSize: 12,
                    color: '#4f4a4a',
                    fontWeight: 'bold'
                }}
        >
            Minimum Order 2pkg
        </Text>
        <Text
            style={{
                    fontSize: 14,
                    color: '#4f4a4a',
                    fontWeight: 'bold'
                }}
        >
            AED 599
        </Text>

        </TouchableOpacity>
    );
        
} 
export default Toys;

