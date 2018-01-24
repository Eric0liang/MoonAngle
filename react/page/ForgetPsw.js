import React from 'react';
import {
    View,
    Text,
    TextInput,
} from 'react-native';

import RadiusButton from "../view/RadiusBtn";
import styles from "../css/Styles";
import Loading from '../view/Loading';
import Toast from '../view/Toast';
import BasePage from '../base/BasePage';
export default class Login extends BasePage {
    static navigationOptions = {
        title: '密码找回',
    };

    constructor(props) {
        super(props);
        this.state = {queryCode: false, id: 0, count: 120};
    }

    onButtonPress = () => {
        if (!this.state.queryCode && this.queryCodeParamter()) {
            this.setState({
                    queryCode: true,
                    id: setInterval(() => {
                        if (this.state.count == 0) {
                            clearInterval(this.state.id);
                            this.setState({ queryCode: false, count: 120, id : 0, visible : false});
                        }
                        this.setState({count : this.state.count - 1});
                    }, 1000)
                }
            );
            let params = {account:this.state.employerNo,mobileNo:this.state.mobile};
            this.post('bluemoon-control/user/getVerifyCode', params,function (set) {
                Toast.show(set.responseMsg);
            });

        }
    };
    onSubmitPress = () => {
        if (this.submitParamter()) {
            var CryptoJS = require("crypto-js");
            var newPasswordEncrypt = CryptoJS.AES.encrypt(this.state.psw,'19490101');
            let params = {mobileNo:this.state.mobile,newPassword:newPasswordEncrypt, verifyCode : this.state.code};
            this.post('bluemoon-control/user/resetPassword', params,function (set) {
                Toast.show(set.responseMsg);
            });
        }
    };
    queryCodeParamter = () => {
        let employerNo = this.state.employerNo;
        let mobile = this.state.mobile;
        if (employerNo == null || employerNo.trim().length == 0) {
            Toast.show('请输入人员编码');
            return false;
        } else if (mobile == null || mobile.trim().length == 0) {
            Toast.show('请输入手机号码');
            return false;
        }
        return true;
    }

    submitParamter = () => {
        if (this.queryCodeParamter()) {
            let code = this.state.code;
            let psw = this.state.psw;
            let pswAgain = this.state.psw_again;
            if (code == null || code.trim().length == 0) {
                Toast.show('请输入验证码');
                return false;
            } else if (psw == null || psw.trim().length == 0) {
                Toast.show('请输入新密码');
                return false;
            } else if (pswAgain == null || pswAgain.trim().length == 0) {
                Toast.show('请再次输入新密码');
                return false;
            } else if (psw != pswAgain) {
                Toast.show('两次输入的密码不一致');
                return false;
            }
        }
        return true;
    }



    componentWillUnmount() {
        if (this.state.id != 0) {
            clearInterval(this.state.id);
        }
    }

    render() {
        let display = !this.state.queryCode ? '获取验证码' : '重新获取('+this.state.count+')秒';
        let underlayColor = !this.state.queryCode ? '#1ca6e5' : '#d7d7d7';
        let backgroundColor = !this.state.queryCode ? '#1fb8ff' : '#d7d7d7';
        return (
            <View style={styles.container}>
                <Text style={styles.text333}>人员编号</Text>
                <TextInput style={[styles.edit_margin, styles.edit_border]} maxLength={40} multiline={false}
                           placeholder={'请输入人员账号'} placeholderTextColor={'#999'}
                           underlineColorAndroid={'transparent'}
                           clearButtonMode={'while-editing'}
                           onChangeText={(text) => {
                              this.state.employerNo = text
                           }}
                           keyboardType={'numeric'}/>
                <Text style={styles.text333}>手机验证</Text>
                <View style={[styles.edit_margin, styles.edit_border, styles.edit_border_wrap]}>
                    <TextInput style={styles.edit} maxLength={40} multiline={false}
                               placeholder={'请输入手机号码'} placeholderTextColor={'#999'}
                               underlineColorAndroid={'transparent'}
                               clearButtonMode={'while-editing'}
                               onChangeText={(text) => {
                                   this.state.mobile = text
                               }}
                               keyboardType={'numeric'}/>
                    <View style={{
                        backgroundColor: '#d7d7d7',
                        alignItems: 'stretch',
                        height: 0.5,
                        marginRight: 5,
                        marginLeft: 5
                    }}/>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput style={{
                            backgroundColor: '#fff',
                            flex: 1,
                            height: 45,
                            paddingLeft: 5,
                            paddingRight: 5, borderRadius: 4,
                        }}
                                   maxLength={40} multiline={false}
                                   placeholder={'请输入验证码'} placeholderTextColor={'#999'}
                                   underlineColorAndroid={'transparent'}
                                   clearButtonMode={'while-editing'}
                                   onChangeText={(text) => {
                                       this.state.code = text
                                   }}
                                   keyboardType={'numeric'}/>
                        <RadiusButton
                            btnName={display}
                            textStyle={{
                                fontSize: 12,
                                color: '#fff',
                                paddingLeft: 5,
                                paddingRight: 5,
                            }}
                            underlayColor={underlayColor}
                            btnStyle={{
                                height: 30, backgroundColor, borderWidth: 0, borderRadius: 4, marginLeft: 0,
                                marginRight: 0,
                                marginTop: 0
                            }}
                            onPress={this.onButtonPress}>
                        </RadiusButton>
                    </View>
                </View>
                <Text style={styles.text333}>新密码</Text>
                <View style={[styles.edit_margin, styles.edit_border, styles.edit_border_wrap]}>
                    <TextInput style={styles.edit} maxLength={40} multiline={false}
                               placeholder={'请输入新密码'} placeholderTextColor={'#999'}
                               underlineColorAndroid={'transparent'}
                               clearButtonMode={'while-editing'}
                               onChangeText={(text) => {
                                   this.state.psw = text
                               }}
                               secureTextEntry={true}/>
                    <View style={{
                        backgroundColor: '#d7d7d7',
                        alignItems: 'stretch',
                        height: 0.5,
                        marginRight: 5,
                        marginLeft: 5
                    }}/>
                    <TextInput style={styles.edit} maxLength={40} multiline={false}
                               placeholder={'请再次输入新密码'} placeholderTextColor={'#999'}
                               underlineColorAndroid={'transparent'}
                               clearButtonMode={'while-editing'}
                               onChangeText={(text) => {
                                   this.state.psw_again= text
                               }}
                               secureTextEntry={true}/>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <RadiusButton
                        btnName='提  交'
                        textStyle={{
                            fontSize: 14,
                            color: '#ffffff',
                        }}
                        btnStyle={{marginBottom: 20}}
                        onPress={this.onSubmitPress}>
                    </RadiusButton>
                </View>
                <Loading ref={'loading'} />
            </View>

        )
    }
}
