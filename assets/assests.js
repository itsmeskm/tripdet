export const IMAGES = {
  tripBanner: require('./images/tripBanner.png'),
  emptyTripImage: require('./images/6.png'),
  randomTripImage: require('./images/2.png'),
};

export const ICONS = {
  backIcon: require('./icons/back.png'),
};

export const THUMBNAILS = {
  0: require('./images/1.png'),
  1: require('./images/1.png'),
  2: require('./images/2.png'),
  3: require('./images/3.png'),
  4: require('./images/4.png'),
  5: require('./images/5.png'),
  6: require('./images/6.png'),
  7: require('./images/3.png'),
  8: require('./images/4.png'),
  9: require('./images/5.png'),
  10: require('./images/6.png'),
};

export const randomImage = () => {
  const id = Math.floor(Math.random() * 9);
  return THUMBNAILS[id];
};
