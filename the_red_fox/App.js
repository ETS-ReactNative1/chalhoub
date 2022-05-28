import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/appnavigator';
import  HomeScreen  from './src/pages/home';
import  Login  from './src/pages/login';
import  SignUp  from './src/pages/signup';
import  Detail  from './src/pages/detail';
import  Categories  from './src/pages/categories';
import Profile from './src/pages/common/Profile';
import DrawerNavigators from './src/pages/common/DrawerNavigators';
import SuccessPage from './src/pages/success';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const { Navigator, Screen } = createDrawerNavigator();

const Stack = createStackNavigator();


const App = () => {
   
    
    return(
        <>
        <NavigationContainer>
        
            <Navigator 
                screenOptions = {{
                    headerShown : false
                }}
                initialRouteName = {"HomeScreen"}
                drawerContent ={props => <DrawerNavigators {...props}/>}
            >
                <Screen name="HomeScreen" component={Tabs}/>
                <Screen name="Detail" component={Detail}/>
                <Screen name="Login" component={Login}/>
                <Screen name="Categories" component={Categories}/>
                <Screen name="SignUp" component={SignUp}/>
                <Screen name="Success" component={SuccessPage}/>
                <Screen name="Profile" component={Profile}/>
            </Navigator>
           
        </NavigationContainer>
       
       </>
        
    )
}

export default App;