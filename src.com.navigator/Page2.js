import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ListView
} from 'react-native';

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

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />

            </View>

        );
    }
}
