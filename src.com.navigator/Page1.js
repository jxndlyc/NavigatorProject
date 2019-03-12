import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    WebView,
} from 'react-native';


export default class Page1 extends Component<Props> {
    static navigationOptions = {    //上标题
        title: '第一页',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigate('Page2');
                    }}>
                    <Text>点我去第二页！</Text>
                </TouchableOpacity>


            </View>
        );
    }
}
