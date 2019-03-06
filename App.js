/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    Image,
} from 'react-native';
//import {StackNavigator} from 'react-navigation';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ThreeScreen from './src.com.navigator/Three.js';
import Page1Screen from './src.com.navigator/Page1.js';
import Page2Screen from './src.com.navigator/Page2.js';
import TextInputScreen from './src.com.navigator/TextInputTest.js';
import ScrollViewScreen from './src.com.navigator/ScrollViewTest.js';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
            //require:'./test_image.png'
        };
        return (
            <View>
                <Image source={pic} style={{width: 193, height: 110, marginTop: 20, marginLeft: 50}}/>

                <Text style={{marginTop: 20, marginLeft: 50}}>Hello, Chat App!</Text>
                <Button
                    style={{width:200, height:50, marginTop: 20, marginLeft: 50}}
                    onPress={() => navigate('Chat')}
                    title="Chat with Lucy"
                />
                <Text style={{height:50, marginTop: 20, marginLeft: 50}}></Text>
                <Button
                    style={{marginTop: 20, marginLeft: 50}}
                    onPress={() => navigate('Page1')}
                    title="Page1"
                />
                <Text style={{height:50, marginTop: 20, marginLeft: 50}}></Text>
                <Button
                    style={{marginTop: 20, marginLeft: 50}}
                    onPress={() => navigate('Page2')}
                    title="Page2"
                />
                <Text style={{height:50, marginTop: 20, marginLeft: 50}}></Text>
                <Button
                    style={{marginTop: 20, marginLeft: 50}}
                    onPress={() => navigate('TextInputTest')}
                    title="TextInputTest"
                />
                <Text style={{height:50, marginTop: 20, marginLeft: 50}}></Text>
                <Button
                    style={{marginTop: 20, marginLeft: 50}}
                    onPress={() => navigate('ScrollViewTest')}
                    title="ScrollViewTest"
                />
            </View>
        );
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Image source={require('./src.com.navigator/test_image.png')}
                       style={{width: 300, height: 300, marginTop: 20, marginLeft: 50}}/>
                <Text>Chat with Lucy</Text>
                <Button
                    onPress={() => navigate('Three')}
                    title="to to ThreeScreen"
                />
            </View>
        );
    }
}

const NavigatorProject = createStackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
    Three: {screen: ThreeScreen},
    Page1: {screen: Page1Screen},
    Page2: {screen: Page2Screen},
    TextInputTest: {screen: TextInputScreen},
    ScrollViewTest: {screen: ScrollViewScreen},
});

//AppRegistry.registerComponent('NavigatorProject', () => NavigatorProject);
export default createAppContainer(NavigatorProject);

