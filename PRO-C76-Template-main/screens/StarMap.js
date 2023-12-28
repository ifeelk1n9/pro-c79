import React, { Component } from 'react';
import { Text, View } from 'react-native';


<TextInput style={{height:40, borderColor: 'gray', borderWidth: 1}}
placeholder="Enter your latitude"
placeholderTextColor = "#ffff#000000"
onChangeText={(text)=>{
    this.setState({
        latitude: text
    })
}}
>
<TextInput
style={{height:40, borderColor: 'gray', borderWidth: 1}}
placeholder="Enter your longitude"
placeholderTextColor = "#ffff#000000"
onChangeText={(text)=>{
    this.setState({
        longitude: text
    })
}}
>
const {longitude, latitude} = this.state;
const path = 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'

export default class StarMapScreen extends Component {
        render() {
            return (
                <View
                    style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>StarMap Screen!</Text>
            </View>
        )
    }
}