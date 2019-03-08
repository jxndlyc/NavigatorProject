import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableHighlight,
} from 'react-native';


export default class StatusBarTest extends Component<Props> {
    constructor(props){
        super(props);
        this.state={
        };
    }
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor='#ff0000'
                    translucent={false}
                    hidden={false}
                    animated={true}
                />
                <CustomButton text='状态栏隐藏透明效果'/>
            </View>
        );
    }
}

//简单封装一个组件
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
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    }
});