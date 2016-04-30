import {AsyncStorage} from 'react-native';

export default {
  get(key) {
    return AsyncStorage.getItem(key)
      .then(JSON.parse)
      .catch(() => undefined);
  },
  multiGet(keys) {
    return AsyncStorage.multiGet(keys)
      .then((stores) => stores.reduce((keyValues, [key, value]) => {
        try {
          keyValues[key] = JSON.parse(value);
        } catch (e) {
          keyValues[key] = undefined;
        }
        return keyValues;
      }, {}));
  },
  set(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  },
  multiSet(keyValues) {
    return AsyncStorage.multiSet(
      Object.keys(keyValues).map((key) => [
        key,
        JSON.stringify(keyValues[key]),
      ])
    );
  },
  remove(key) {
    return AsyncStorage.removeItem(key);
  },
  multiRemove(keys) {
    return AsyncStorage.multiRemove(keys);
  },
  merge(key, value) {
    return AsyncStorage.mergeItem(key, JSON.stringify(value));
  },
  multiMerge(keyValues) {
    return AsyncStorage.multiMerge(
      Object.keys(keyValues).map((key) => [
        key,
        JSON.stringify(keyValues[key]),
      ])
    );
  },
};

