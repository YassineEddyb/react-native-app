import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

import Welcome from './app/screen/Welcome';
import ViewImage from './app/screen/ViewImage';

export default function App() {
  return (
      <ViewImage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
