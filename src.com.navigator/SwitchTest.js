import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Switch,
    StyleSheet,
    Picker,
    TouchableHighlight,
    TouchableNativeFeedback,
    Clipboard,
    ToastAndroid,
} from 'react-native';

export default class SwitchTest extends Component<Props> {
    static navigationOptions = {    //上标题
        title: 'SwitchTest',
    };

    constructor(props) {
        super(props);
        this.state = {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
            language: '',
            content:'需要保存的内容...',
        };
    }

    _appendEvent(type) {
        alert(type)
    }

    async _setClipboardContent(){
        Clipboard.setString('Hello World');
        try {
            var content = await Clipboard.getString();
            ToastAndroid.show('粘贴板的内容为:'+content,ToastAndroid.SHORT);
        } catch (e) {
            ToastAndroid.show(e.message,ToastAndroid.SHORT);
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>
                    Swtich实例
                </Text>
                <Switch
                    disabled={true}
                    onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                    style={{marginBottom: 10, marginTop: 10}}
                    value={this.state.falseSwitchIsOn}/>
                <Switch
                    onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
                    value={this.state.trueSwitchIsOn}/>

                <Text>
                    Picker选择器实例
                </Text>
                <Picker
                    style={{width: 200}}
                    selectedValue={this.state.language}
                    onValueChange={(value) => this.setState({language: value})}>
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="JavaScript" value="javaScript"/>
                </Picker>

                <Picker
                    prompt="请选择人物"
                    style={{width: 200}}
                    selectedValue={this.state.language}
                    onValueChange={(value) => this.setState({language: value})}>
                    <Picker.Item label="张三" value="张三"/>
                    <Picker.Item label="李四" value="李四"/>
                </Picker>

                <Picker
                    mode={'dropdown'}
                    style={{width: 200}}
                    selectedValue={this.state.language}
                    onValueChange={(value) => this.setState({language: value})}>
                    <Picker.Item label="IOS" value="ios"/>
                    <Picker.Item label="Android" value="android"/>
                </Picker>
                <Text>当前选择的是:{this.state.language}</Text>

                <Text style={{marginTop: 20}}>
                    TouchableHighlight实例
                </Text>
                <TouchableHighlight
                    underlayColor="#1FB579"
                    activeOpacity={0.5}
                    style={{borderRadius: 8, padding: 6, marginTop: 5}}
                    onPress={() => {
                    }}
                >
                    <Text style={{fontSize: 20}}>点击我</Text>
                </TouchableHighlight>

                <Text style={{marginTop: 20}}>
                    TouchableOpacity各种按压
                </Text>
                <TouchableOpacity
                    style={styles.wrapper}
                    onPress={() => this._appendEvent('press')}
                    onPressIn={() => this._appendEvent('pressIn')}
                    onPressOut={() => this._appendEvent('pressOut')}
                    onLongPress={() => this._appendEvent('longPress')}>
                    <Text style={styles.button}>
                        Press Me
                    </Text>
                </TouchableOpacity>

                <Text>
                    TouchableNativeFeedback实例
                </Text>
                <TouchableNativeFeedback style={{marginTop: 20}}
                                         background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{width: 150, height: 100,}}>
                        <Text style={{margin: 30}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>

                <Text style={styles.welcome}>
                    ClipBoard粘贴板演示setSting,getString方法
                </Text>
                <Text onPress={this._setClipboardContent} style={{color: 'blue', marginLeft: 10}}>
                    点击我把'Hello World'信息添加到粘贴板,并且弹出来内容.
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 10,
        margin: 10,
    },
});
