import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class FeedScreen extends Component {
    render(){
        return (
            <View style = {{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
             <Text> Feed </Text>
            </View>
        )
    }
}