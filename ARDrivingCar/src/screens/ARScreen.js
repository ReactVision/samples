/**
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { ViroARSceneNavigator } from '@viro-community/react-viro';

import ARScene from '../ARScenes/ARScene'
import LoadingIndicator from '../components/LoadingIndicator';
import styles from '../styles/styles'

const ARScreen = () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: ARScene,
      }}
      style={styles.outer}
    />
  );

}

export default ARScreen;
