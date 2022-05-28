import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default class Categories extends React.Component {
    render(){
    return(
        <TouchableOpacity 
            style={{
                marginTop: 30,
                backgroundColor: '#fff',
                height: 50,
                width: 50,
                elevation: 5,
                borderRadius: 25,
                padding: 10,
                marginBottom: 5,
                marginRight: 30,
                marginLeft: 2
            }}
        >
        <Image
            source={this.props.src}
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
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#4f4a4a'
                }}
            >
                {this.props.name}
            </Text>

        </TouchableOpacity>
    );
        }
} 

