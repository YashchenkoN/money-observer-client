import React from 'react';
import { Dimensions, Image, Text, StyleSheet, View } from 'react-native';
import { DrawerItems } from 'react-navigation';
import colors from '../styles/Colors';

const cover = require('../images/pattern.jpg');

const coverSizes = {
    height: 200,
    width: Dimensions.get('window').width * 0.747,
};

const styles = StyleSheet.create({
    coverStyle: {
        ...coverSizes,
    },
    titleContainerStyle: {
        ...coverSizes,
        position: 'absolute',
        justifyContent: 'flex-end',
        padding: 10,
    },
    titleStyle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center'
    },
});

const Drawer = props => (
    <View>
        <Image
            style={styles.coverStyle}
            source={cover}
        />
        <View style={styles.titleContainerStyle}>
            <Text style={styles.titleStyle}>Money Observer</Text>
        </View>
        <DrawerItems {...props} />
    </View>
);

export default Drawer;
