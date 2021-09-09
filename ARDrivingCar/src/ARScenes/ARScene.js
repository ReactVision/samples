/**
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect, useRef } from 'react'
 import {
    ViroQuad,
    ViroARScene,
    ViroConstants,
    ViroAmbientLight,
    ViroDirectionalLight,
    ViroText,
    ViroNode,
    Viro3DObject,
    ViroBox,
    ViroMaterials,
} from '@viro-community/react-viro';

import distanceBetween from '../utilities/distanceBetween';
import colors from '../styles/colors';
import styles from '../styles/styles'



const ARScene = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.textStyle}
      />
    </ViroARScene>
  );
    
}

export default ARScene;