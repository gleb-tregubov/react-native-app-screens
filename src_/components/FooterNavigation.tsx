import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const FooterNavigation: React.FC = () => {
    return (
        <View style={styles.footerNavigation}>
            <TouchableOpacity>
                <Text style={styles.text} >Выйти</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.text} >Удалить аккаунт</Text>
            </TouchableOpacity>
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
