import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/theme';

const ScreenWrapper = ({children}) => {
  return <View style={styles.screenWrapper}>{children}</View>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  screenWrapper: {
    paddingTop: 8,
    paddingHorizontal: 12,
    paddingBottom: 32,
    backgroundColor: COLORS.backgroundColor,
    minHeight: '100%',
  },
});
