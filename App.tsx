import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const click = (value: string) => {
    if (value === '') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Invalid Input');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{input === '' ? '0' : input}</Text>
        <Text style={styles.displayText}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => click('')}>
            <Text style={styles.clearButtonText}>AC</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => click('%')}>
            <Text>%</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => click('7')}>
            <Text>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => click('8')}>
            <Text>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => click('9')}>
            <Text>9</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => click('*')}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => click('4')}>
            <Text>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => click('5')}>
            <Text>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => click('6')}>
            <Text>6</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => click('-')}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => click('1')}>
            <Text>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => click('2')}>
            <Text>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => click('3')}>
            <Text>3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => click('+')}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.zeroButton}
            onPress={() => click('0')}>
            <Text style={styles.zeroButtonText}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => click('.')}>
            <Text>,</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => click('=')}>
            <Text style={styles.equalButtonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393535',
    alignItems: 'center',
    justifyContent: 'center',
  },

  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  displayText: {
    fontSize: 48,
    color: '#ffae29',
  },

  buttonContainer: {
    flex: 3,
    width: '100%',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#818181',
    elevation: 3,
    margin: 2,
    padding: 20,
  },

  zeroButton: {
    alignSelf: 'center',
    margin: 2,
    flex: 2.3,
    backgroundColor: '#818181',
    padding: 35,
  },

  zeroButtonText: {
    flex: 2.3,
    alignSelf: 'center',
  },

  operatorButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffae29',
    elevation: 3,
    margin: 2,
    padding: 20,
  },

  equalButtonText: {
    fontSize: 24,
  },

  clearButton: {
    flex: 2.3,
    margin: 2,
    alignSelf: 'center',
    backgroundColor: '#818181',
    elevation: 3,
    padding: 35,
  },

  clearButtonText: {
    alignSelf: 'center',
  },
});

export default App;
