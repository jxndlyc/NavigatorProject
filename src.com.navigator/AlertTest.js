import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    ToastAndroid,
    TouchableHighlight,
} from 'react-native';


export default class AlertTest extends Component<Props> {
    static navigationOptions = {    //上标题
        title: 'AlertTest',
    };

    render() {
        return (
            <View>
                <Text style={{height: 30, color: 'black', margin: 8}}>
                    弹出框实例
                </Text>
                <CustomButton text='点击弹出默认Alert'
                              onPress={() => Alert.alert('温馨提醒', '确定退出吗?')}
                />
                <CustomButton text='点击弹出两个按钮的Alert'
                              onPress={() => Alert.alert('温馨提醒', '确定退出吗?', [
                                  {text: '取消', onPress: () => ToastAndroid.show('你点击了取消~', ToastAndroid.SHORT)},
                                  {text: '确定', onPress: () => ToastAndroid.show('你点击了确定~', ToastAndroid.SHORT)}
                              ])}
                />
                <CustomButton text='点击弹出三个按钮的Alert'
                              onPress={() => Alert.alert('温馨提醒', '确定退出吗?', [
                                  {text: 'One', onPress: () => ToastAndroid.show('你点击了One~', ToastAndroid.SHORT)},
                                  {text: 'Two', onPress: () => ToastAndroid.show('你点击了Two~', ToastAndroid.SHORT)},
                                  {text: 'Three', onPress: () => ToastAndroid.show('你点击了Three~', ToastAndroid.SHORT)}
                              ])}
                />


            </View>
        );
    }
}


class CustomButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    }
});