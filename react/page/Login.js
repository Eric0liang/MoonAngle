import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    ART,
} from 'react-native';

const {Surface, Shape, Path} = ART;
import RadiusButton from "../view/RadiusBtn";
import styles from "../css/Styles";
import Loading from '../view/Loading';
import BasePage from '../base/BasePage';
export default class LoginScreen extends BasePage {
    onButtonPress = () => {
        let params = {platform:'android',appType:'moonAngel'};
        this.post('bluemoon-control/version/getLastVersion', params, function (set) {
            console.warn(set.itemList.buildVersion)
        }, true)
    }
    render() {
        const {navigate} = this.props.navigation;
        var Dimensions = require('Dimensions');
        var screenWidth = Dimensions.get('window').width;
        const path = new Path()
            .moveTo(screenWidth / 2, 0)
            .arc(0, screenWidth * 6, 1)
            .close();
        return (
            <View style={styles.container}>
                <View style={{height: 180, backgroundColor: "#1fb8ff"}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../image/logo.png')} style={{width: 120, height: 44}}/>
                    </View>
                    <Surface width={screenWidth} height={30}>
                        <Shape d={path} fill="#fff"/>
                    </Surface>
                </View>
                <Text style={styles.text333}>账号</Text>
                <TextInput style={styles.edit_margin} maxLength={40} multiline={false}
                           placeholder={'请输入人员账号'} placeholderTextColor={'#999'}
                           underlineColorAndroid={'transparent'}
                           clearButtonMode={'while-editing'}
                           keyboardType={'numeric'}/>
                <Text style={styles.text333}>密码</Text>
                <TextInput style={styles.edit_margin} maxLength={40} multiline={false}
                           placeholder={'请输入密码'} placeholderTextColor={'#999'}
                           underlineColorAndroid={'transparent'}
                           clearButtonMode={'while-editing'}
                           secureTextEntry={true}/>
                <View style={{alignItems: 'flex-end'}}>
                    <Text style={styles.text666} onPress={() => navigate('Psw')}>忘记密码？</Text>
                </View>
                <RadiusButton
                    btnName='登  录'
                    textStyle={{
                        fontSize: 14,
                        color: '#ffffff',
                    }}
                    onPress={this.onButtonPress}>
                </RadiusButton>
                <Loading ref={'loading'} />
            </View>
        )
    }
}

