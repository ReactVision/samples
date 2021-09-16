'use strict';
import React from 'react';
import {
    ActivityIndicator,
    View,
} from 'react-native';
import renderIf from '../utilities/renderIf';
import styles from '../styles/styles';
import colors from '../styles/colors';

const LoadingIndicator = (props) => {
    return <View >
        {renderIf(props.isLoading,
            <View >
                <ActivityIndicator size='large' animating={props.isLoading} color={colors.white} />
            </View >)}
    </View>
};

export default LoadingIndicator;
