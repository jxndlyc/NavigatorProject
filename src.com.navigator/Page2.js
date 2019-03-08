import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ListView,
    Image,
    StyleSheet,
} from 'react-native';

var THUMB_URLS = [
    require('./img/one.png'),
    require('./img/two.png'),
    require('./img/three.png'),
    require('./img/four.png'),
    require('./img/five.png'),
    require('./img/six.png'),
    require('./img/seven.png'),
    require('./img/eight.png'),
    require('./img/nine.png'),
    require('./img/ten.png'),
];

export default class Page2 extends Component<Props> {

    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    _renderRow(rowData: string, sectionID: number, rowID: number) {
        var imgSource = THUMB_URLS[rowID];
        return (
            <TouchableOpacity>
                <View>
                    <View style={styles.row}>
                        <Image style={styles.thumb} source={imgSource}/>
                        <Text style={{flex: 1, fontSize: 16, color: 'blue'}}>
                            {rowData + '我是测试行号哦~'}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    static navigationOptions = {    //上标题
        title: '第二页',
    };

    render() {
        return (
            <View>
                <Text>欢迎来到第二页！</Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.goBack()
                }}
                >
                    <Text>
                        点我返回
                    </Text>
                </TouchableOpacity>

                <View style={{marginLeft: 5, marginTop: 10, marginRight: 5}}>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: 70}}>
                            <Image source={require('./img/one.png')}
                                   style={{alignSelf: 'center', width: 45, height: 45}}/>
                            <Text style={{marginTop: 5, textAlign: 'center', fontSize: 11, color: '#555555'}}>美食</Text>
                        </View>
                        <View style={{width: 70}}>
                            <Image source={require('./img/two.png')}
                                   style={{alignSelf: 'center', width: 45, height: 45}}/>
                            <Text style={{
                                marginTop: 5,
                                alignSelf: 'center',
                                fontSize: 11,
                                color: '#555555',
                                textAlign: 'center'
                            }}>电影</Text>
                        </View>
                        <View style={{width: 70}}>
                            <Image source={require('./img/three.png')}
                                   style={{alignSelf: 'center', width: 45, height: 45}}/>
                            <Text style={{
                                marginTop: 5,
                                alignSelf: 'center',
                                fontSize: 11,
                                color: '#555555',
                                textAlign: 'center'
                            }}>酒店</Text>
                        </View>
                        <View style={{width: 70}}>
                            <Image source={require('./img/four.png')}
                                   style={{alignSelf: 'center', width: 45, height: 45}}/>
                            <Text style={{
                                marginTop: 5,
                                alignSelf: 'center',
                                fontSize: 11,
                                color: '#555555',
                                textAlign: 'center'
                            }}>KTV</Text>
                        </View>
                        <View style={{width: 70}}>
                            <Image source={require('./img/five.png')}
                                   style={{alignSelf: 'center', width: 45, height: 45}}/>
                            <Text style={{
                                marginTop: 5,
                                alignSelf: 'center',
                                fontSize: 11,
                                color: '#555555',
                                textAlign: 'center'
                            }}>外卖</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <View style={{width: 70}}>
                            <Image source={require('./img/six.png')}
                                   style={{alignSelf: 'center', width: 45, height: 45}}/>
                            <Text
                                style={{marginTop: 5, textAlign: 'center', fontSize: 11, color: '#555555'}}>优惠买单</Text>
                        </View>
                        <View style={{width: 70}}>
                            <Image source={require('./img/seven.png')}
                                   style={{alignSelf: 'center', width: 45, height: 45}}/>
                            <Text style={{
                                marginTop: 5,
                                alignSelf: 'center',
                                fontSize: 11,
                                color: '#555555',
                                textAlign: 'center'
                            }}>周边游</Text>
                        </View>
                        <View style={{width: 70}}>
                            <Image source={require('./img/eight.png')}
                                   style={{alignSelf: 'center', width: 45, height: 45}}/>
                            <Text style={{
                                marginTop: 5,
                                alignSelf: 'center',
                                fontSize: 11,
                                color: '#555555',
                                textAlign: 'center'
                            }}>休闲娱乐</Text>
                        </View>
                        <View style={{width: 70}}>
                            <Image source={require('./img/nine.png')}
                                   style={{alignSelf: 'center', width: 45, height: 45}}/>
                            <Text style={{
                                marginTop: 5,
                                alignSelf: 'center',
                                fontSize: 11,
                                color: '#555555',
                                textAlign: 'center'
                            }}>今日新单</Text>
                        </View>
                        <View style={{width: 70}}>
                            <Image source={require('./img/ten.png')}
                                   style={{alignSelf: 'center', width: 45, height: 45}}/>
                            <Text style={{
                                marginTop: 5,
                                alignSelf: 'center',
                                fontSize: 11,
                                color: '#555555',
                                textAlign: 'center'
                            }}>丽人</Text>
                        </View>
                    </View>
                </View>

                <ListView
                    dataSource={this.state.dataSource}
                    //renderRow={(rowData) => <Text>{rowData}</Text>}
                    renderRow={this._renderRow}
                />

            </View>

        );
    }
}

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    thumb: {
        width: 50,
        height: 50,
    },
});
