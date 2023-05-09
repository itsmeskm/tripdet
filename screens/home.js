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
import {randomImage} from '../assets/assests';
import EmptyList from '../components/empty-list';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const tripList = useSelector(state => state.trips.trips);

  return (
    <ScreenWrapper>
      <View>
        <Text style={styles.headingText}>Tripdet</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={randomImage()} style={styles.bannerImage} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('AddTrip');
          }}>
          <Text style={styles.buttonText}>Add Trip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subHeading}>
        <Text style={styles.subHeadingText}>Recent Trips</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={tripList}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.tripList}
          ListEmptyComponent={<EmptyList />}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tripImageContainer}
              onPress={() => navigation.navigate('TripExpenses', item)}>
              <Image source={item.image} style={styles.tripImage} />
              <Text style={styles.tripImageText}>{item.place}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: '600',
  },
  bannerContainer: {
    backgroundColor: 'white',
    marginTop: 12,
    borderRadius: 16,
  },
  bannerImage: {
    height: 230,
    width: '100%',
  },
  button: {
    backgroundColor: 'grey',
    left: 190,
    marginHorizontal: 24,
    borderRadius: 16,
    top: 12,
    width: '30%',
  },
  buttonText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  subHeading: {
    marginTop: 24,
  },
  subHeadingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tripImageContainer: {
    backgroundColor: 'white',
    marginTop: 12,
    borderRadius: 16,
  },
  tripImage: {
    height: 150,
    width: 150,
  },
  list: {
    marginBottom: 12,
    height: 320,
  },
  tripList: {
    justifyContent: 'space-evenly',
  },
  tripImageText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingBottom: 4,
  },
});
