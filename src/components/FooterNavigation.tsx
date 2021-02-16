import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const FooterNavigation: React.FC = () => {
    return (
        <View style={styles.footerNavigation}>
            <Text style={styles.text} >Выйти</Text>
            <Text style={styles.text} >Удалить аккаунт</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footerNavigation: {
        width: 345,
        alignSelf: 'center',
        marginHorizontal: 12,
        marginTop: 24
    },
    text: {
        fontSize: 17,
        fontStyle: 'normal',
        color: 'red',
        marginBottom: 24,
    }
})