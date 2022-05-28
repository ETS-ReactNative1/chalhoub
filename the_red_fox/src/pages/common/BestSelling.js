import React, {useEffect, useState} from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Items } from './Data';
import { useNavigation } from '@react-navigation/native';
const BestSelling = () => {
  
    const [categories, setCategories] = React.useState(Items);
    const renderItem = ({item}) => {
      return(
          
          <TouchableOpacity style={{
            marginTop: 30,
            backgroundColor: '#fff',
            height: 170,
            width: 200,
            elevation: 5,
            borderRadius: 10,
            padding: 10,
            
            marginRight: 30,
            marginLeft: 2
        }}
       
    >
              <View>
              <Image
                  
                  source={item.productImage}
                  style={{
                    width: 170,
                    height: 150,
                    borderRadius: 10
                  }}
              />
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
export default BestSelling;