import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { HorizontalLine } from '../components/HorizontalLine'

interface HeaderProps{
    title: string
    // iconBack?: boolean
    iconSave: boolean
}

export const Header: React.FC<HeaderProps> = ({title, iconSave}) => {
    return (
        <>
        <View style={styles.header}>
            <TouchableOpacity>
            <View>
                <Icon style={styles.iconBack} name='chevron-left' type='font-awesome-5' color='#5563DF'/>
            </View>
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
            {
                iconSave
                ? <TouchableOpacity>
                    <View>
                    <Icon style={styles.iconSave} name='check' type='font-awesome-5' color='#5563DF'/>
                </View>
                </TouchableOpacity>
                : <TouchableOpacity>
                <View style={{width: 22, height: 16}}>

                </View>
                </TouchableOpacity>
            }
        </View>
        <HorizontalLine/>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 52,
        width: 375,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignSelf: 'center'
    },
    text: {
        color: '#000',
        fontSize: 21,
        fontWeight: '500',
        // marginRight: 'auto',
        // marginLeft: 110

    },
    iconBack: {
        marginLeft: 12
    },
    iconSave: {
        marginRight: 12
    }
})
