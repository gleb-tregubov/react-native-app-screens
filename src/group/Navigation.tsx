import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import {NavigationLink} from '../components/NavigationLink'

export const Navigation: React.FC = () => {
    return (
        <View style={styles.wrapper}>
            <NavigationLink title="Общая информация" iconName='bars' iconSolid={true}/>
            <NavigationLink title="Профессия и образование" iconName='user-graduate' iconSolid={true}/>
            <NavigationLink title="Контактные данные" iconName='user' iconSolid={true}/>
            <NavigationLink title="Теги профиля" iconName='thumbtack' iconSolid={true}/>
            <NavigationLink title="Приватность" iconName='hand-paper' iconSolid={true}/>
            <NavigationLink title="Календарь" iconName='calendar-week' iconSolid={true}/>
            <NavigationLink title="Архив шотов" iconName='circle' iconSolid={false}/>
            <NavigationLink title="История мероприятий" iconName='clock' iconSolid={false}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 12
    }
})