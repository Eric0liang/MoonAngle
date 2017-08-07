'use strict';

import React, {
    Component,
    PropTypes,
} from 'react';

import {
    StyleSheet,
    PixelRatio,
    Text,
    View,
    TouchableHighlight,
    Platform,
} from 'react-native';

class RadiusBtn extends Component {

    static propTypes = {
        btnName: PropTypes.string,
        textStyle: Text.propTypes.style,
        btnStyle: TouchableHighlight.propTypes.style,
        underlayColor: TouchableHighlight.propTypes.underlayColor,
    };

    static defaultProps = {
        btnName: 'Button',
        underlayColor: '#e56140',
    };


    render() {
        return (
            <View style = {{
                justifyContent: 'center',
                alignItems: 'stretch',}}>
                <TouchableHighlight
                    underlayColor={this.props.underlayColor}
                    activeOpacity={0.5}
                    style={[styles.center, styles.btnDefaultStyle, this.props.btnStyle]}
                    onPress={this.props.onPress}>
                    <Text style={[styles.textDefaultStyle, this.props.textStyle]}>{this.props.btnName}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    center: {
        justifyContent:'center',
        alignItems: 'center',
    },
    btnDefaultStyle: {
        height: 40,
        backgroundColor: '#ff6c47',
        borderColor: '#ff6c47',
        borderRadius: 20,
        marginLeft:50,
        marginRight:50,
        marginTop:10,
        borderWidth: (Platform.OS==='ios' ? 1.0 : 1.5) / PixelRatio.get(),
    },
    textDefaultStyle: {
        fontSize: 16,
        color: '#fff',
    },
});

module.exports = RadiusBtn;