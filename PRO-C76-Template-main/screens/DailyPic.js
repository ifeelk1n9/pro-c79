import React, { Component } from 'react';
import { Text, View } from 'react-native';

getAPOD = () => {
    axios
    .get("GET https://api.nasa.gov/planetary/apod?api_key=b2KooZnQr4TizMEkvjfAE6LJDzE7YSqq8i0rxfaF")
    .then(response => {
        this.setState({ apod: response.data })
    
    }   )
    .catch(error => {
        Alert.alert(error.message)
    })
}
export default class DailyPicScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>DailyPic Screen!</Text>
            </View>
        )
    }
}