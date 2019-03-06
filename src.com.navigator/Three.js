import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    Image,
} from 'react-native';

export default class Three extends React.Component {
    static navigationOptions = {
        title: 'Three Sceen',
    };

    render() {
        const {goBack} = this.props.navigation;
        //var icon = true ? require('./src.com.navigator/test_image.png') : require('./src.com.navigator/test_image.png');
        return (
            //justifyContent: 'space-between' flex-start,center,flex-end,space-around,space-between
            //flexDirection: cloumn
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',}}>

                {/*<Image source={icon}/>

                <Button
                    title="Go back"
                    onPress={() => goBack()}
                />*/}

                {/*<View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
                <View style={{flex: 3, backgroundColor: 'steelblue'}}/>*/}
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
            </View>

        );
    }
}
