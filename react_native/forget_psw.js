import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    ART,
} from 'react-native';

const {Surface, Shape, Path} = ART;
import RadiusButton from "./radius_btn.js";
import styles from "./styles";
export default class Login extends React.Component {
    static navigationOptions = {
        title: '密码找回',
    };
    onButtonPress = () => {

    };

    render() {
        var Dimensions = require('Dimensions');
        var screenWidth = Dimensions.get('window').width;
        const path = new Path()
            .moveTo(screenWidth / 2, 0)
            .arc(0, screenWidth * 6, 1)
            .close();
        return (
            <View style={styles.container}>
                <Text style={styles.text333}>人员编号</Text>
                <TextInput style={[styles.input, styles.input_border]} maxLength={40} multiline={false}
                           placeholder={'请输入人员账号'} placeholderTextColor={'#999'}
                           underlineColorAndroid={'transparent'}
                           clearButtonMode={'while-editing'}
                           keyboardType={'numeric'}/>
                <Text style={styles.text333}>手机验证</Text>
                <View style={[styles.input, styles.input_border,styles.input_border_wrap]}>
                    <TextInput style={styles.input} maxLength={40} multiline={false}
                               placeholder={'请输入人员账号'} placeholderTextColor={'#999'}
                               underlineColorAndroid={'transparent'}
                               clearButtonMode={'while-editing'}
                               keyboardType={'numeric'}/>
                    <TextInput style={styles.input} maxLength={40} multiline={false}
                               placeholder={'请输入人员账号'} placeholderTextColor={'#999'}
                               underlineColorAndroid={'transparent'}
                               clearButtonMode={'while-editing'}
                               keyboardType={'numeric'}/>
                </View>
                <TextInput style={styles.input} maxLength={40} multiline={false}
                           placeholder={'请输入密码'} placeholderTextColor={'#999'}
                           underlineColorAndroid={'transparent'}
                           clearButtonMode={'while-editing'}
                           secureTextEntry={true}/>
                <View style={{alignItems: 'flex-end', flex: 1}}>
                    <Text style={styles.text666}>忘记密码？</Text>
                </View>
                <RadiusButton
                    btnName='提  交'
                    textStyle={{
                        fontSize: 14,
                        color: '#ffffff',
                    }}
                    btnStyle={{marginBottom: 20}}
                    onPress={this.onButtonPress}>
                </RadiusButton>
            </View>

        )
    }
}
