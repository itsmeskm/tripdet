import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/home';
import AddExpense from '../screens/add-expenses';
import AddTrip from '../screens/add-trip';
import TripExpense from '../screens/trip-expenses';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddExpense"
        component={AddExpense}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddTrip"
        component={AddTrip}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TripExpenses"
        component={TripExpense}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
