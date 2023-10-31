import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class App extends Component {
  componentDidMount() {
    // Kod, który zostanie wykonany po zamontowaniu komponentu w DOM
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Zadanie 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
