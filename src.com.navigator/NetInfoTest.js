import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ToastAndroid,
    NetInfo,
} from 'react-native';


export default class NetInfoTest extends Component<Props> {
    static navigationOptions = {    //上标题
        title: 'NetInfoTest',
    };

    constructor(props) {
        super(props);
        this.state = {
            isConnected: null,
            connectionInfo: null,
        };
    }

    componentDidMount() {
        NetInfo.isConnected.addEventListener(
            'change',
            this._handleConnectivityChange
        );
        //检测网络是否连接
        NetInfo.isConnected.fetch().done(
            (isConnected) => {
                this.setState({isConnected});
            }
        );
        //检测网络连接信息
        NetInfo.fetch().done(
            (connectionInfo) => {
                this.setState({connectionInfo});
            }
        );
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener(
            'change',
            this._handleConnectivityChange
        );
    }

    _handleConnectivityChange(isConnected) {
        ToastAndroid.show((isConnected ? 'online' : 'offline'), ToastAndroid.SHORT);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text style={styles.welcome}>
                    当前的网络状态
                </Text>
                <Text style={styles.welcome}>
                    {this.state.isConnected ? '网络在线' : '离线'}
                </Text>
                <Text style={styles.welcome}>
                    当前网络连接类型
                </Text>
                <Text style={styles.welcome}>
                    {this.state.connectionInfo}
                </Text>
                <Text style={styles.welcome}>
                    当前连接网络是否计费
                </Text>
                <Text style={styles.welcome}>
                    {NetInfo.isConnectionExpensive === true ? '需要计费' : '不要'}
                </Text>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 16,
        textAlign: 'left',
        margin: 10,
    },
});