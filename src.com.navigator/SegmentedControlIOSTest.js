import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SegmentedControlIOS,
} from 'react-native';

var DEFAULT_URL = 'http://baidu.com/';

export default class SegmentedControlIOSTest extends Component<Props> {
    static navigationOptions = {    //上标题
        title: 'SegmentedControlIOSTest',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text style={styles.welcome}>
                    SegmentedControlIOS使用实例
                </Text>
                <View>
                    <SegmentedControlIOS
                        values={['全国', '南通']}
                        tintColor='red'
                        style={{margin: 10, height: 30, width: 200, alignSelf: 'center'}}/>

                    <SegmentedControlIOS
                        values={['Android', 'iOS', 'Java', 'React']}
                        tintColor='green'
                        selectedIndex={1}
                        onValueChange={(value) => console.log('选中了' + value)}
                        style={{marginTop: 20, margin: 10, height: 30, width: 300, alignSelf: 'center'}}/>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
});
