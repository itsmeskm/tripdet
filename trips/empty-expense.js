import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets/assests';

const EmptyExpense = () => {
  return (
    <View style={styles.emptyTripImageContainer}>
      <Image source={IMAGES.emptyTripImage} style={styles.emptyTripImage} />
      <Text style={styles.emptyTripImageText}>
        You haven't recorded any Expense yet
      </Text>
    </View>
  );
};

export default EmptyExpense;

const styles = StyleSheet.create({
  emptyTripImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 12,
    borderRadius: 12,
  },
  emptyTripImage: {
    height: 200,
    width: 220,
  },
  emptyTripImageText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 12,
  },
});
