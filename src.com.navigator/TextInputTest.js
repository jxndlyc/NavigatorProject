import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
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
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text}
                </Text>
            </View>

        );
    }
}
