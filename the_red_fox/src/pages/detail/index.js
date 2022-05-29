import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';
import BestSelling from '../common/BestSelling';
import Swipers from '../common/Swipers';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Stars from 'react-native-stars';
import { NavigationActions } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { transform } from '@babel/core';
import {Items} from '../common/Data';
const product = [
  {
    id: 1,
    name: 'Food & Drinks',
    icon: require('../../assets/images/task.png'),
  },
  {
    id: 2,
    name: 'Grocery',
    icon: require('../../assets/images/task.png'),
  },
  {
    id: 3,
    name: 'Personal Care',
    icon: require('../../assets/images/task.png'),
  },
  {
    id: 4,
    name: 'Electronics',
    icon: require('../../assets/images/task.png'),
  },
  {
    id: 5,
    name: 'Fashion',
    icon: require('../../assets/images/task.png'),
  },
  {
    id: 6,
    name: 'Toys',
    icon: require('../../assets/images/task.png'),
  },
];
const categoryData = [
  {
      id: 1,
      name: 'MEN',
     
  },
  {
      id: 2,
      name: 'WOMEN',
      
  },
  {
      id: 3,
      name: 'KIDS',
      
  },
  {
    id: 4,
    name: 'FTW',
    
},
  {
      id: 5,
      name: 'ACCESSORIES',
      
  },
 
];
const Detail = ({route,navigation}) => {
 
  const { productID } = route.params;
  const [productDetail, setproductDetail] = useState({});

  useEffect(()=>{
      getProductDetail();
  },[])
 const getProductDetail= async () =>{
   for (let index = 0; index < Items.length; index++) {
     if (Items[index].id == productID) {
        await setproductDetail(Items[index])
        return;
     }
     
   }

 }
 
 
  const renderItemDetail = () => {
    
   console.log(productDetail);
    return (
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        
        <View>
          <View
            
            style={{
              flexDirection: 'row',
              height: 280,
              width: '100%',
            }}>
            <Swipers />
            
            
            <View></View>
          </View>
          <View></View>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-end',
              paddingRight: 30,
            }}>
            <FontAwesome name={'bookmark'} size={25} color={'#bbb'} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 10,
              
              width: '100%',
            }}>
            <View
              style={{
                width: '65%',
                height: 150,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#bbb',
              }}>
              <Text>{productDetail.productName}</Text>
              <Text
            style={{
              fontSize: 15,
              
              color: '#707070',
            }}>
           {productDetail.productPrice}
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 5,
              paddingBottom: 5,
              color: '#707070',
            }}>
           Available Sizes:{productDetail.availableSizes}
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 5,
              color: '#707070',
            }}>
           Colours:
          </Text>
          <View style={{marginTop: 110,position: 'absolute',
                width: '100%',
                height: 50,
                justifyContent:'flex-start',
                flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: '#3f3a42',
                  height: 25,
                  width: 25,
                  borderRadius: 5,
                  borderWidth: 2,
                  borderColor: '#fff',
                  elevation: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#707070',
                  height: 25,
                  width: 25,
                  borderRadius: 5,
                  borderWidth: 2,
                  borderColor: '#fff',
                  elevation: 10,
                }}></View>
              <View
                style={{
                  backgroundColor: '#fff',
                  height: 25,
                  width: 25,
                  borderRadius: 5,
                  borderWidth: 2,
                  borderColor: '#b3b4b9',
                  elevation: 5,
                }}></View>
                <View
                style={{
                  backgroundColor: '#007500',
                  height: 25,
                  width: 25,
                  borderRadius: 5,
                  borderWidth: 2,
                  borderColor: '#fff',
                  elevation: 5,
                }}></View>
            </View>
            </View>
            <View
              style={{
                width: '35%',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#bbb',
              }}>
              
            </View>
          </View>
          <Text style={{
              
              paddingLeft: 10,
              color: '#707070',
            }}>Description</Text>
          <Text style={{
              paddingTop: 5,
              paddingLeft: 10,
              color: '#707070',
            }}>{productDetail.description}</Text>
          <Text style={{
              paddingTop: 5,
              paddingLeft: 10,
              color: '#707070',
            }}>short-sleeved T-shirt</Text>
          <Text style={{
              paddingTop: 5,
              paddingLeft: 10,
              color: '#707070',
            }}>Round neck</Text>
          <Text style={{
              paddingTop: 5,
              paddingLeft: 10,
              color: '#707070',
            }}>Tiger embroadered onthe chest</Text>
           
            {/* Related products */}
          <View
            style={{
              backgroundColor: '#fff',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center'
                }}
            >
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 13,
                    color: '#707070',
                    paddingTop: 10,
                    paddingLeft:10
                }}
                
            >
                SEE MORE PRODUCTS
            </Text>
                <View>

                </View>
            </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <BestSelling/>
                        
                        
                </ScrollView>

            

            
            
          </View>
        </View>
      </ScrollView>
    );
  };
  
    
  const renderHeader = () => {
    const [categories, setCategories] = React.useState(categoryData);
    
    const renderItem = ({item}) => {
      return(
          
          <TouchableOpacity style={{
              
              width: 75,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              
              shadowColor:'#bbb'
              
              }}>
              
                  <Text style={{fontSize: 10,}}>
                      {item.name}
                  </Text>
          </TouchableOpacity>
      )
}
   return(
     <>
         <View style={{
      width: '100%',
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
      
      borderRadius: 25,
      backgroundColor: '#fafafa',
    }}>
      <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    height: 80,
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                    borderRadius: 25,
                    backgroundColor: '#fafafa',
                  }}>
                  <Text style={{fontSize: 25, fontWeight:'bold', color: '#000'}}>LOGO</Text>
                </View>
                
                </View>
               
    </View>
    <View>
            <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item =>`${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{paddingVertical:1}}
            />

            

            </View>
    <View 
                      style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          width: '100%',
                          
                      }}
                  >
                    
                  <View 
                      style={{
                          flexDirection:'row',
                          alignItems:'center',
                          elevation: 5,
                          width: '100%',
                          backgroundColor: '#fff',
                          height: 40,
                          borderRadius: 10,
                          marginLeft: 1
                      }}
                      >
                          <FontAwesomeIcon style={{paddingLeft:10}} name='search' size={20} color= '#bbb' />
                          <TextInput 
                              placeholder='Search for items'
                              style={{
                                  fontSize: 12,
                                  paddingHorizontal: 10
                              }}
                          /> 
                  </View>
                       
                  </View>
                  
    </>
    
   );
  };
  return (
    <ScrollView
            testID='related'
            showsVerticalScrollIndicator={false}
            style={{
                backgroundColor: '#FAFAFA',
                paddingHorizontal: 10,
                marginBottom: 60
            }}
        >
    <View >
      {renderHeader()}
      {renderItemDetail()}
    </View>
    </ScrollView>
  );
};
export default Detail;

