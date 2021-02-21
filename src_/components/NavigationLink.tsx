import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

interface NavigationLinkProps{
    title: string
    iconName: string
    iconSolid: boolean
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({title, iconName, iconSolid}) => {
    return (
        <TouchableOpacity>
        <View style={styles.naviagionLink}>
            <Icon name={iconName} type='font-awesome-5' solid={iconSolid} color='#99A2AD'/>
            <Text style={styles.title}>{title}</Text>
            <Icon name='chevron-right' type='font-awesome-5' color='#99A2AD' size={18}/>
        </View>
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({
    naviagionLink: {
        flexDirection: 'row',
        height: 48,
        width: 345,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        
    },
    title: {
        fontSize: 17,
        fontStyle: 'normal',
        marginRight: 'auto',
        marginLeft: 18
    },
    icon: {
        width: 20,
        height: 20,
        backgroundColor: '#ccc',
    },
    arrow: {
        width: 8,
        height: 12,
        backgroundColor: '#ccc',
    }
})