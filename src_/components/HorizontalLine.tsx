import React from 'react'
import {View, StyleSheet} from 'react-native'

export const HorizontalLine: React.FC = () => {
    return (
        <View style={styles.horizontalLine}/>
    )
}

const styles = StyleSheet.create({
    horizontalLine: {
        height: 1,
        width: 345,
        backgroundColor: '#ccc',
        alignSelf: 'center'
    },
})
