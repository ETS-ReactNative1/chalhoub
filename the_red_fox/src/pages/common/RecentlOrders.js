import React,{ useEffect, useState} from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {Items} from './Data'

const RecentOrders=({props})=>  {
   
    let navigation = useNavigation();
    
    const [categories, setCategories] = React.useState(Items);
    const renderItem = ({item}) => {
      return(
          
          <TouchableOpacity style={{
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
        onPress={() => navigation.navigate('Detail', {productID:item.id})}
    >
              <View>
              <Image
                  
                  source={item.productImage}
                  style={{
                    width: 170,
                    height: 150,
                    borderRadius: 10
                  }}
              /><View 
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
                  {item.productName}
              </Text>
              <View 
                  style={{
                      flexDirection: 'row',
                      left: '10%',
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
                      color: '#4f4a4a',
                      fontWeight: 'bold'
                  }}
          >
              {item.productPrice}
          </Text>
              
                      </View>
                  
          </TouchableOpacity>
      )
}
    return(
        <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item =>`${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{paddingVertical:1}}
            />
       
    );
        
} 
export default RecentOrders;

