import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AddButton = props => {
  const {onPress, title} = props;
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title ? title : 'Add Trip'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    width: '95%',
    marginHorizontal: 12,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 12,
    color: 'white',
  },
});
