import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/screen-wrapper';
import BackButton from '../components/back-button';
import EmptyExpense from '../trips/empty-expense';
import ExpenseCard from '../trips/expense-card';
import {useSelector} from 'react-redux';

const TripExpense = ({navigation, route}) => {
  const selectedTrip = route.params;
  const {image, place} = selectedTrip;

  const expenses = useSelector(state => {
    const trips = state.trips.trips;
    const expensesToBeShown = trips.filter(trip => trip.id === selectedTrip.id);
    if (expensesToBeShown.length > 0) {
      return expensesToBeShown[0].expenses;
    }
    return [];
  });

  return (
    <ScreenWrapper>
      <View>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{place}</Text>
        </View>
      </View>
      <View style={styles.subHeadingContainer}>
        <Text style={styles.subHeadingText}>Expenses</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddExpense', selectedTrip)}>
          <Text style={styles.addExpenseText}>Add Expense</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={expenses}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyExpense />}
          renderItem={({item}) => <ExpenseCard item={item} />}
        />
      </View>
    </ScreenWrapper>
  );
};

export default TripExpense;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 12,
  },
  image: {
    height: 200,
    width: 340,
    backgroundColor: 'white',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    bottom: 20,
    backgroundColor: 'grey',
    padding: 8,
    borderRadius: 18,
    width: '30%',
    color: 'white',
    textAlign: 'center',
  },
  subHeadingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subHeadingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addExpenseText: {
    color: 'green',
    fontWeight: 'bold',
  },
});
