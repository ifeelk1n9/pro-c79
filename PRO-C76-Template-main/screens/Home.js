import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Home Screen!</Text>
            </View>
        )
    }
}
<TouchableOpacity style={styles.routeCard} onPress={() =>
    this.props.navigation.navigate("TonightSky")
}>
    <text style={styles.routeText}>Tonight Sky</text>
    <image source={require("../assets/night-sky.png")} style={{ width: 80, height: 80}}></image>
</TouchableOpacity>