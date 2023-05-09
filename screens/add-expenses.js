import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/screen-wrapper';
import BackButton from '../components/back-button';
import {IMAGES} from '../assets/assests';
import AddButton from '../components/add-button';
import {COLORS} from '../theme/theme';
import {useDispatch} from 'react-redux';
import {addExpense} from '../redux/slice/trips';

const AddExpense = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const selectedTrip = route.params;
  console.log(selectedTrip);

  const categories = ['Shopping', 'Food', 'Commute', 'Entertainment', 'Others'];

  const dispatch = useDispatch();

  const handleExpenseAdded = () => {
    const expense = {
      id: Date.now(),
      title,
      amount,
      category,
    };
    const data = {
      tripId: selectedTrip.id,
      expense,
    };
    dispatch(addExpense(data));
    navigation.navigate('TripExpenses', selectedTrip);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View>
          <View>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <View>
            <Image
              source={IMAGES.randomTripImage}
              style={styles.randomTripImage}
            />
            <View style={styles.expenseText}>
              <Text style={styles.text}>
                Add New Expense for {selectedTrip.place}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.subHeading}>What did you Purchase?</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={e => setTitle(e)}
              value={title}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.subHeading}>What the price?</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={e => setAmount(e)}
              value={amount}
            />
          </View>
          <View>
            <Text style={styles.subHeading}>Category</Text>
            <View style={styles.category}>
              {categories.map(cat => {
                return (
                  <TouchableOpacity
                    style={{
                      ...styles.listCategory,
                      backgroundColor:
                        category === cat ? COLORS.shadeGreen : COLORS.white,
                    }}
                    onPress={() => setCategory(cat)}
                    key={cat}>
                    <Text style={styles.subHeading}>{cat}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View>
          <AddButton onPress={handleExpenseAdded} title="Add Expense" />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  randomTripImage: {
    height: 200,
    width: '100%',
    marginTop: 12,
  },
  expenseText: {
    backgroundColor: 'grey',
    padding: 8,
    borderRadius: 16,
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: 55,
    bottom: 15,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputText: {
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 20,
    marginTop: 6,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 6,
  },
  form: {
    marginVertical: 18,
  },
  category: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 6,
  },
  listCategory: {
    margin: 6,
    backgroundColor: 'white',
    borderRadius: 18,
  },
});
