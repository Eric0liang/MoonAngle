import React from 'react';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './login.js';
import ChatScreen from './forget_psw.js';
import {View, Image, TouchableOpacity} from 'react-native';
export default SimpleApp = StackNavigator({
    Home: {screen: HomeScreen,},
    Psw: {screen: ChatScreen},
}, {
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: '#1fb8ff',
            elevation: 0
        },
        headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 15,
            color: '#fff',
            paddingRight: 41
        },
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.goBack()}
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                }}>
                <Image source={require('./image/icon_back.png')} style={{width: 11, height: 20}}/>
            </TouchableOpacity>
        )
    }),
    mode: 'card',
});
HomeScreen.navigationOptions = {
    header: null,
}
