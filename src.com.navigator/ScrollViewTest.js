import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';

export default class ScrollViewTest extends Component<Props> {
    static navigationOptions = {    //上标题
        title: 'ScrollView',
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

                <ScrollView horizontal={true}>
                    <Text style={{fontSize: 20}}>Scroll me plz</Text>
                    <Image source={require('./test_icon_01.png')}
                           style={{height: 500,}}/>
                    <Image source={require('./test_icon_01.png')}
                           style={{width: 300, height: 300, }}/>
                    <Image source={require('./test_icon_01.png')}/>
                    <Text style={{fontSize: 20}}>If you like</Text>
                    <Image source={require('./test_icon_02.png')}/>
                    <Image source={require('./test_icon_02.png')}/>
                    <Image source={require('./test_icon_02.png')}/>
                    <Image source={require('./test_icon_02.png')}/>
                    <Text style={{fontSize: 96}}>Scrolling down</Text>
                    <Image source={require('./test_icon_03.png')}/>
                    <Image source={require('./test_icon_03.png')}/>
                    <Image source={require('./test_icon_03.png')}/>
                    <Image source={require('./test_icon_03.png')}/>
                    <Image source={require('./test_icon_03.png')}/>
                    <Text style={{fontSize: 96}}>What's the best</Text>
                    <Image source={require('./test_icon_04.png')}/>
                    <Image source={require('./test_icon_04.png')}/>
                    <Image source={require('./test_icon_04.png')}/>
                    <Image source={require('./test_icon_04.png')}/>
                    <Text style={{fontSize: 96}}>Framework around?</Text>
                    <Image source={require('./test_image.png')}/>
                    <Image source={require('./test_image.png')}/>
                    <Image source={require('./test_image.png')}/>
                    <Image source={require('./test_image.png')}/>
                    <Image source={require('./test_image.png')}/>
                    <Text style={{fontSize: 80}}>React Native</Text>
                </ScrollView>
            </View>
        );
    }
}
