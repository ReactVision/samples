/**
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Button,
    Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/styles'

const CautionScreen = () => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('ARScreen')
    }

    return (
        <SafeAreaView style={styles.outerContainer}>
            <Text style={styles.buttonText}>Parental supervision required. Pay attention to dangers in your physical surroundings.</Text>
            <Button title="Okay" onPress={onPress} />
        </SafeAreaView>
    );

}

export default CautionScreen;
