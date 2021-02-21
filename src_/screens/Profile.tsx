import React from 'react'
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native'
import { Header } from '../components/Header'
import { HorizontalLine } from '../components/HorizontalLine'
import { Input } from '../components/Input'
import { Select } from '../components/Select'

export const Profile: React.FC = () => {
    return (
        <>
        <Header title="Общая информация" iconSave={true}/>
        <ScrollView contentContainerStyle={styles.container}>

            <Input label="Имя" />
            <Input label="Фамилия" />
            <Input label="Никнейм" iconType={'error'} />

            <Select label="Пол" iconType={'dropDown'} />
            <Select label="Ориентация" iconType={'dropDown'} />
            
            <Input label="Дата рождения" iconType={'dropDown'} />

            <Select label="Страна" iconType={'dropDown'} />
            <Select label="Город" iconType={'dropDown'} />
            <Select label="Язык" iconType={'dropDown'} />
            <View style={{height: 400}} />

        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
});
