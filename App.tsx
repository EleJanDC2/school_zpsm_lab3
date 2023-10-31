import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';

function App(): JSX.Element {
  const [visible, setVisible] = useState(false);

  const _onPressButton = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Zadanie 2</Text>
        <View>
          <TouchableOpacity onPress={_onPressButton} style={styles.opacity}>
            <Text>PRESS ME!</Text>
          </TouchableOpacity>
        </View>
        {visible && (
          <View>
            <Text>Nazywam się</Text>
            <Text>Jan Czaja</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
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
  opacity: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default App;
