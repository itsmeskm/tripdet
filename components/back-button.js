import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ICONS} from '../assets/assests';

const BackButton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image source={ICONS.backIcon} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backIcon: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
  },
});
