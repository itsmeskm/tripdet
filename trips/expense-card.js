import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CATEGORY_BG} from '../theme/theme';

const ExpenseCard = ({item}) => {
  const {title, category, amount} = item;
  return (
    <View
      style={{
        ...styles.expenseContainer,
        backgroundColor: CATEGORY_BG[category],
      }}>
      <View>
        <Text>{title}</Text>
        <Text>{category}</Text>
      </View>
      <View>
        <Text>₹{amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({
  expenseContainer: {
    marginTop: 8,
    borderRadius: 16,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
