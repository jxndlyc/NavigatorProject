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
    ScrollView,
    Platform,
} from 'react-native';
//import {StackNavigator} from 'react-navigation';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ThreeScreen from './src.com.navigator/Three.js';
import Page1Screen from './src.com.navigator/Page1.js';
import Page2Screen from './src.com.navigator/Page2.js';
import TextInputScreen from './src.com.navigator/TextInputTest.js';
import ScrollViewScreen from './src.com.navigator/ScrollViewTest.js';
import SwitchScreen from './src.com.navigator/SwitchTest.js';
import ViewPageScreen from './src.com.navigator/ViewPageTest.js';
import PullToRefreshAndroidViewScreen from './src.com.navigator/PullToRefreshAndroidView.js';
import DatePickerScreen from './src.com.navigator/DatePickerTest.js';
import WebViewScreen from './src.com.navigator/WebViewTest.js';
import StatusBarScreen from './src.com.navigator/StatusBarTest.js';
import PickerIOSScreen from './src.com.navigator/PickerIOSTest.js';
import SegmentedControlIOSScreen from './src.com.navigator/SegmentedControlIOSTest.js';
import TimePickerAndroidScreen from './src.com.navigator/TimePickerAndroidTest.js';
import ModalScreen from './src.com.navigator/ModalTest.js';
import ProgressBarAndroidScreen from './src.com.navigator/ProgressBarAndroidTest.js';

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
            <View style={{flex:1}}>
                <Image source={pic}
                       style={{width: 193, height: 110, alignItems: 'center', marginTop: 20}}/>
                <ScrollView
                    horizontal={false}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={true}
                   >
                    <Button
                        style={{width: 200, height: 50, marginTop: 20, marginLeft: 50}}
                        onPress={() => navigate('Chat')}
                        title="Chat with Lucy"
                    />
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10,}}>
                        <Button
                            onPress={() => navigate('Page1')}
                            title="Page1"
                        />
                        <Text style={{width: 50}}></Text>
                        <Button
                            onPress={() => navigate('Page2')}
                            title="Page2"
                        />
                    </View>
                    <Text style={{height: 10, marginTop: 20, marginLeft: 50}}></Text>
                    <Button
                        style={{marginTop: 20, marginLeft: 50}}
                        onPress={() => navigate('TextInputTest')}
                        title="TextInputTest"
                    />
                    <Text style={{height: 10, marginTop: 20, marginLeft: 50}}></Text>
                    <Button
                        style={{marginTop: 20, marginLeft: 50}}
                        onPress={() => navigate('ProgressBarAndroidTest')}
                        title="ProgressBarAndroidTest"
                    />
                    <Text style={{height: 10, marginTop: 20, marginLeft: 50}}></Text>
                    <Button
                        style={{marginTop: 10, marginLeft: 50}}
                        onPress={() => navigate('ScrollViewTest')}
                        title="ScrollViewTest"
                    />
                    <Text style={{height: 10, marginTop: 20, marginLeft: 50}}></Text>
                    <Button
                        style={{marginTop: 10, marginLeft: 50}}
                        onPress={() => navigate('SwitchTest')}
                        title="SwitchTest"
                    />

                    <Text style={{height: 10, marginTop: 20, marginLeft: 50}}></Text>
                    <Button
                        style={{marginTop: 10, marginLeft: 50}}
                        onPress={() => navigate('PullToRefreshAndroidView')}
                        title="PullToRefreshAndroidView"
                    />
                    <Text style={{height: 10, marginTop: 20, marginLeft: 50}}></Text>
                    <Button
                        style={{marginTop: 10, marginLeft: 50}}
                        onPress={() => navigate('DatePickerTest')}
                        title="DatePickerTest"
                    />
                    <Text style={{height: 10, marginTop: 20, marginLeft: 50}}></Text>
                    <Button
                        style={{marginTop: 10, marginLeft: 50}}
                        onPress={() => navigate('WebViewTest')}
                        title="WebViewTest"
                    />

                    <Text style={{height: 10, marginTop: 20, marginLeft: 50}}></Text>
                    <Button
                        style={{marginTop: 10, marginLeft: 50}}
                        onPress={() => navigate('StatusBarTest')}
                        title="StatusBarTest"
                    />

                    <Text style={{height: 10, marginTop: 20, marginLeft: 50}}></Text>
                    <Button
                        style={{marginTop: 10, marginLeft: 50}}
                        onPress={() => navigate('PickerIOSTest')}
                        title="PickerIOSTest"
                    />
                    <Text style={{height: 10, marginTop: 20, marginLeft: 50}}></Text>
                    <Button
                        style={{marginTop: 10, marginLeft: 50}}
                        onPress={() => navigate('SegmentedControlIOSTest')}
                        title="SegmentedControlIOSTest"
                    />

                    <Text style={{height: 10, marginTop: 20, marginLeft: 50}}></Text>
                    <Button
                        style={{marginTop: 10, marginLeft: 50}}
                        onPress={() => navigate('TimePickerAndroidTest')}
                        title="TimePickerAndroidTest"
                    />

                    <Text style={{height: 10, marginTop: 20, marginLeft: 50}}></Text>
                    <Button
                        style={{marginTop: 10, marginLeft: 50}}
                        onPress={() => navigate('ModalTest')}
                        title="ModalTest"
                    />


                    <View style={{height:Platform.OS == 'ios' ? 0:30,}}></View>
                </ScrollView>

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
            <View style={{justifyContent: 'center', alignItems: 'center',}}>
                <Image source={require('./src.com.navigator/test_image.png')}
                       style={{width: 300, height: 300, marginTop: 20, marginLeft: 50}}/>

                <Text>Chat with Lucy</Text>
                <Button
                    onPress={() => navigate('Three')}
                    title="to to ThreeScreen"
                />
                <Image source={{uri: 'ic_launcher'}} style={{width: 50, height: 50}}/>
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
    SwitchTest: {screen: SwitchScreen},
    ViewPageTest: {screen: ViewPageScreen},
    PullToRefreshAndroidView: {screen: PullToRefreshAndroidViewScreen},
    DatePickerTest: {screen: DatePickerScreen},
    WebViewTest: {screen: WebViewScreen},
    StatusBarTest: {screen: StatusBarScreen},
    PickerIOSTest: {screen: PickerIOSScreen},
    SegmentedControlIOSTest: {screen: SegmentedControlIOSScreen},
    TimePickerAndroidTest: {screen: TimePickerAndroidScreen},
    ModalTest: {screen: ModalScreen},
    ProgressBarAndroidTest: {screen: ProgressBarAndroidScreen},
});

//AppRegistry.registerComponent('NavigatorProject', () => NavigatorProject);
export default createAppContainer(NavigatorProject);

