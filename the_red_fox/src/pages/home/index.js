import React,{ useEffect, useState} from 'react';
import { View, Text, ScrollView, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import BestSelling from '../common/BestSelling';
import RecentOrders from '../common/RecentlOrders';
import Fashion from '../common/Fasion';
import FoodAndDrinks from '../common/FoodAndDrinks';
import Toys from '../common/Toys';
import PersonalCare from '../common/PersonalCare';
import Groceries from '../common/Groceries';
import Electronics from '../common/Electronics';
import DrawerNavigators from '../common/DrawerNavigators';
import axios from 'axios';

const categoryData = [
    {
        id: 1,
        name: 'Food & Drinks',
        icon: require('../../assets/icons/food&drinks.png')
    },
    {
        id: 2,
        name: 'Grocery',
        icon: require('../../assets/icons/grocery.jpg')
    },
    {
        id: 3,
        name: 'Personal Care',
        icon: require('../../assets/icons/personalcare.png')
    },
    {
        id: 4,
        name: 'Electronics',
        icon: require('../../assets/icons/electronics.png')
    },
    {
        id: 5,
        name: 'Fashion',
        icon: require('../../assets/icons/fashion.jpg')
    },
    {
        id: 6,
        name: 'Toys',
        icon: require('../../assets/icons/toys.png')
    }
];


const HomeScreen = ({navigation}) => {
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
   
   
    const [categories, setCategories] = React.useState(categoryData);
  
    const renderHeader =() => {
        return(
            <View style={{flexDirection: 'row', height: 80, backgroundColor: '#FAFAFA'}}>
                <TouchableOpacity 
                    style={{
                        justifyContent: 'center',
                        width: 50,
                        paddingHorizontal: 20
                    }}
                    onPress={() => navigation.openDrawer()}
                    >
                        <Image source={require('../../assets/icons/list.png')} 
                            resizeMode='contain'
                            style={{width: 30, height: 30}}
                        />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width:50,
                        height: 50,
                        marginTop: 10,
                        borderRadius: 25,
                        backgroundColor: '#000',
                        paddingRight: 20,
                        justifyContent: 'center',
                        marginLeft: 250
                    }}
                >
                    <Image source={{uri: avatar}} resizeMode='cover'
                        style={{
                            width:50,
                            height: 50,
                            borderRadius: 25,
    
                        }}
                    />
    
                </TouchableOpacity>
                
            </View>
        )
    }
    const renderItem = ({item}) => {
            return(
                
                <TouchableOpacity style={{
                    padding: 10,
                    paddingBottom: 10,
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 10,
                    shadowColor:'#bbb'
                    
                    }}>
                    <View style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#fff',
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',

                    }}>
                        <Image source={item.icon} resizeMode='contain' style={{ width: 50, height: 50 }}/>

                    </View>
                        <Text style={{fontSize: 11}}>
                            {item.name}
                        </Text>
                </TouchableOpacity>
            )
    }
    return(
        
        
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                backgroundColor: '#FAFAFA',
                paddingHorizontal: 20,
                marginBottom: 60
            }}
        >{renderHeader()}
            <View style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center'
            }}>
                

            </View>
            <View 
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                    marginVertical: 30
                }}
            >
            <View 
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                    elevation: 5,
                    width: '95%',
                    backgroundColor: '#fff',
                    paddingHorizontal: 20,
                    height: 40,
                    borderRadius: 20,
                    marginLeft : 1
                }}
                >
                    <FontAwesomeIcon name='search' size={20} color= '#bbb' />
                    <TextInput 
                        placeholder='Search for items'
                        style={{
                            fontSize: 12,
                            paddingHorizontal: 10
                        }}
                    /> 
            </View>
                 
            </View>
            <View style={{
                padding: 10,

            }}>
            <FlatList
                testID='productList'
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item =>`${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{paddingVertical:10}}
            />

            

            </View>
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
                    fontSize: 20,
                    color: '#7D0707'
                }}
            >
                Recent Orders
            </Text>
                <View>

                </View>
            </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <RecentOrders />
                      
                </ScrollView>
                <View 
                    style={{
                        flexDirection: 'row',
                        marginTop: 30,
                        marginBottom: 10,
                        alignItems: 'center'
                    }}
                >

                </View>
                
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
                    fontSize: 20,
                    color: '#7D0707'
                }}
            >
                Food And Drinks
            </Text>
                <View>

                </View>
            </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <FoodAndDrinks 
                        src={require('../../assets/images/food4.jpg')}
                        name='Food'
                    />
                      <FoodAndDrinks 
                        src={require('../../assets/images/food1.jpg')}
                        name='Food'
                    />
                      <FoodAndDrinks 
                        src={require('../../assets/images/food5.jpg')}
                        name='Food'
                    />
                      <FoodAndDrinks 
                        src={require('../../assets/images/food6.jpg')}
                        name='Food'
                    />
                      <FoodAndDrinks 
                        src={require('../../assets/images/food7.jpeg')}
                        name='Food'
                    />
                </ScrollView>
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
                    fontSize: 20,
                    color: '#7D0707'
                }}
            >
                Groceries
            </Text>
                <View>

                </View>
            </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <Groceries 
                        src={require('../../assets/images/food4.jpg')}
                        name='Food'
                    />
                      <Groceries 
                        src={require('../../assets/images/food1.jpg')}
                        name='Food'
                    />
                      <Groceries 
                        src={require('../../assets/images/food5.jpg')}
                        name='Food'
                    />
                      <Groceries 
                        src={require('../../assets/images/food6.jpg')}
                        name='Food'
                    />
                      <Groceries 
                        src={require('../../assets/images/food7.jpeg')}
                        name='Food'
                    />
                </ScrollView>
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
                    fontSize: 20,
                    color: '#7D0707'
                }}
            >
                Electronics
            </Text>
                <View>

                </View>
            </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <Electronics 
                        src={require('../../assets/images/food4.jpg')}
                        name='Food'
                    />
                      <Electronics 
                        src={require('../../assets/images/food1.jpg')}
                        name='Food'
                    />
                      <Electronics 
                        src={require('../../assets/images/food5.jpg')}
                        name='Food'
                    />
                      <Electronics 
                        src={require('../../assets/images/food6.jpg')}
                        name='Food'
                    />
                      <Electronics 
                        src={require('../../assets/images/food7.jpeg')}
                        name='Food'
                    />
                </ScrollView>
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
                    fontSize: 20,
                    color: '#7D0707'
                }}
            >
               Fashion
            </Text>
                <View>

                </View>
            </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <Fashion 
                        src={require('../../assets/images/food4.jpg')}
                        name='Food'
                    />
                      <Fashion 
                        src={require('../../assets/images/food1.jpg')}
                        name='Food'
                    />
                      <Fashion 
                        src={require('../../assets/images/food5.jpg')}
                        name='Food'
                    />
                      <Fashion 
                        src={require('../../assets/images/food6.jpg')}
                        name='Food'
                    />
                      <Fashion 
                        src={require('../../assets/images/food7.jpeg')}
                        name='Food'
                    />
                </ScrollView>
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
                    fontSize: 20,
                    color: '#7D0707'
                }}
            >
                Personal Care
            </Text>
                <View>

                </View>
            </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <PersonalCare 
                        src={require('../../assets/images/food4.jpg')}
                        name='Food'
                    />
                      <PersonalCare 
                        src={require('../../assets/images/food1.jpg')}
                        name='Food'
                    />
                      <PersonalCare 
                        src={require('../../assets/images/food5.jpg')}
                        name='Food'
                    />
                      <PersonalCare 
                        src={require('../../assets/images/food6.jpg')}
                        name='Food'
                    />
                      <PersonalCare 
                        src={require('../../assets/images/food7.jpeg')}
                        name='Food'
                    />
                </ScrollView>
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
                    fontSize: 20,
                    color: '#7D0707'
                }}
            >
                Toys
            </Text>
                <View>

                </View>
            </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <Toys 
                        src={require('../../assets/images/toy.jpg')}
                        name='Food'
                    />
                      <Toys 
                        src={require('../../assets/images/toy1.jpg')}
                        name='Food'
                    />
                      <Toys 
                        src={require('../../assets/images/toy2.jpg')}
                        name='Food'
                    />
                      <Toys 
                        src={require('../../assets/images/toy3.jpg')}
                        name='Food'
                    />
                      <Toys 
                        src={require('../../assets/images/toy4.jpg')}
                        name='Food'
                    />
                </ScrollView>
               
        </ScrollView>
    )
}

export default HomeScreen;