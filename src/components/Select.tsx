import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { Icon } from 'react-native-elements'

interface InputProps{
    label: string
    iconType?: string

}

export const Select: React.FC<InputProps> = ({label, iconType}) => {
    return (
        <View style={styles.inputField}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input}/>
            {
                iconType === 'error'
                ?   <View style={styles.iconWrapper}>
                        <Icon name='exclamation-circle' type='font-awesome-5' color='#99A2AD' size={18}/>
                    </View>
                : iconType === 'dropDown'
                    ?   <View style={styles.iconWrapper}>
                            <Icon name='chevron-down' type='font-awesome-5' color='#99A2AD' size={18}/>
                        </View>
                    : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 44,
        marginTop: 8,
        padding: 12,
        paddingRight: 40,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    inputField: {
        padding: 12,
    },
    label: {
        fontSize: 14,
        lineHeight: 18,
        color: '#6D7885'
    },
    iconWrapper: {
        position: 'absolute',
        right: 25,
        top: 51,
    }
});