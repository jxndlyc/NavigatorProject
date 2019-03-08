import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    WebView,
} from 'react-native';

var DEFAULT_URL = 'http://baidu.com/';

export default class WebViewTest extends Component<Props> {
    static navigationOptions = {    //上标题
        title: '简单的网页显示',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>


                <WebView style={{backgroundColor:'#ffffff', marginTop:20, width: 100, height:500, }}
                         source={{uri:DEFAULT_URL}}
                         startInLoadingState={true}
                         domStorageEnabled={true}
                         javaScriptEnabled={true}
                >
                </WebView>
            </View>
        );
    }
}
