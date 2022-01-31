//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

// create a component
export const ImageInputList = ({imageUris, onAddImage, onRemoveImage}) => {
    const renderItem = ({item}) =>(<Image source={{uri: item}} style={{width: 100, height: 100}} />)

    return (
        <FlatList data={imageUris} renderItem={renderItem} horizontal/>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});


