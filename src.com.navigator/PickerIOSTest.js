import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    PickerIOS,
    Picker,
} from 'react-native';

var PickerItemIOS = PickerIOS.Item;

export default class PickerIOSTest extends Component<Props> {

    constructor(props){
        super(props);
        this.state={
            selectedCourse:'Java',
            selectedIndex:1,
        };
    }

    static navigationOptions = {    //上标题
        title: 'PickerIOS',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>

                <Text style={styles.welcome}>
                    PickerIOS使用实例
                </Text>
                <PickerIOS
                    itemStyle={{fontSize: 25, color: 'red', textAlign: 'center', fontWeight: 'bold'}}
                    selectedValue={this.state.selectedCourse}
                    onValueChange={(selectedCourse,selectedIndex)=> this.setState({selectedCourse,selectedIndex})}>
                    <Picker.ItemIOS
                        key='0'
                        value='C++'
                        label='C++'
                    />
                    <Picker.ItemIOS
                        key='1'
                        value='Java'
                        label='Java'
                    />
                    <Picker.ItemIOS
                        key='2'
                        value='Android'
                        label='Android'
                    />
                    <Picker.ItemIOS
                        key='3'
                        value='iOS'
                        label='iOS'
                    />
                    <Picker.ItemIOS
                        key='4'
                        value='React Native'
                        label='React Native'
                    />
                    <Picker.ItemIOS
                        key='5'
                        value='Swift'
                        label='Swift'
                    />
                    <Picker.ItemIOS
                        key='5'
                        value='.Net'
                        label='.Net'
                    />
                </PickerIOS>

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