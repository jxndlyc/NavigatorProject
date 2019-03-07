import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';

export default class TextInputTest extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    static navigationOptions = {    //上标题
        title: 'TextInput',
    };

    render() {
        return (
            <View>
                <Text>欢迎来到TextInput！</Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.goBack()
                }}
                >
                    <Text>
                        点我返回
                    </Text>
                </TouchableOpacity>

                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
                <Text style={styles.titleBase}>
                    {this.state.text}
                </Text>
                <Text style={{flexDirection:'column'}}>
                    <Text>One Test </Text>
                    <Text>Second Test</Text>
                </Text>
            </View>

        );
    }


}

const styles = StyleSheet.create({
    titleBase: {
        margin: 10,
        textAlign: 'center',
        color: 'red',
        fontSize: 28,
        fontFamily: 'Cochin',
        fontStyle:'italic',
        fontWeight:'bold',
        //textShadowOffset: {width: 30, height: 30},
        //textShadowColor: 'green',
        //textShadowRadius: 10,
        //letterSpacing: 100,
        //lineHeight: 50,
        //textDecorationLine: 'underline',
        //textDecorationStyle: 'dashed',
        //textDecorationColor: 'blue',
        //writingDirection: 'rtl',
        flexDirection:'column',

    },
    title: {
        color: 'green',
        fontWeight: 'bold',
    },
});
