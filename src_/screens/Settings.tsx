import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';
import { Header } from '../components/Header'
import { HorizontalLine } from '../components/HorizontalLine';
import { Navigation } from '../group/Navigation';
import { FooterNavigation } from '../components/FooterNavigation'


export const Settings: React.FC = () => {
    return (
        <>
        <Header title="Настройки" iconSave={false}/>
        <ScrollView contentContainerStyle={styles.container}>

            <Navigation/>

            <HorizontalLine/>

            <FooterNavigation/>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});
