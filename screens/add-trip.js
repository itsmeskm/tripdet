import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenWrapper from '../components/screen-wrapper';
import {IMAGES, randomImage} from '../assets/assests';
import AddButton from '../components/add-button';
import BackButton from '../components/back-button';
import {useDispatch} from 'react-redux';
import {addTrip} from '../redux/slice/trips';

const AddTrip = ({navigation}) => {
  const [place, setPlace] = useState('');
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(randomImage());
  }, []);

  const dispatch = useDispatch();

  const handleAddTrip = () => {
    const tripData = {
      id: Date.now(),
      place,
      image,
      expenses: [],
    };
    dispatch(addTrip(tripData));
    navigation.navigate('Home');
  };

  return (
    <ScreenWrapper>
      <View>
        <View>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.image}>
          <Image
            source={image ? image : IMAGES.emptyTripImage}
            style={styles.randomTripImage}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.subHeading}>Visited Place</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={e => setPlace(e)}
            value={place}
          />
        </View>
      </View>
      <View style={styles.addTripButton}>
        <AddButton onPress={handleAddTrip} />
      </View>
    </ScreenWrapper>
  );
};

export default AddTrip;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  randomTripImage: {
    height: 200,
    width: '100%',
  },
  image: {
    marginTop: 12,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputText: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 20,
    marginTop: 8,
  },
  form: {
    marginVertical: 48,
  },
  addTripButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'blue',
    width: '100%',
    marginHorizontal: 12,
    borderRadius: 20,
  },
});
