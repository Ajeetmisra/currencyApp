import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Snackbar from "react-native-snackbar";

const currencyPerrupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004
}
const App = () => {
  const [inputValue, setinputValue] = useState(0)
  const [reasultValue, setresultValue] = useState(0)

  const btnPressed = (currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'please enter a value',
        textColor: "#000000",
        backgroundColor: "#EA7773",
        duration: Snackbar.LENGTH_SHORT,
      });
    }
    const result = parseFloat(inputValue) * currencyPerrupee[currency];
    setresultValue(result.toFixed(2))
  }


  return (
    <>
      <ScrollView backgroundColor="#1b262c"
        keyboardShouldPersistTaps="handled" // this props for android for diasabling the keybord on tap to the screen on anywhere
        contentInsetAdjustmentBehavior="automatic" // this is the same props for android
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.rusultConatainer}>
            <Text style={styles.reasultvalue}>
              {reasultValue}
            </Text>
          </View>
          <View style={styles.inputConatainer}>
            <TextInput
              style={styles.inputvalue}
              keyboardType="numeric"
              placeholder="Enter a value in rupee"
              placeholderTextColor="#FFF"
              value={inputValue}
              onChangeText={(inputnumber) => setinputValue(inputnumber)}

            >

            </TextInput>
          </View>
          <View style={styles.convertBtnContainer}>
            {Object.keys(currencyPerrupee).map((currency) => (
              <TouchableOpacity
                onPress={() => { btnPressed(currency) }}
                key={currency}
                style={styles.converterBtn}
              >
                <Text style={styles.btnText}>{currency}</Text>
              </TouchableOpacity>
            ))}

          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rusultConatainer: {

    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#c1c1c1",
    borderWidth: 2

  },
  reasultvalue: {

    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",

  },
  inputConatainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#bbe1fa",
    borderWidth: 2
  },
  inputvalue: {
    fontSize: 30,
    textAlign: "center",
    color: "#FFF"

  },
  convertBtnContainer: {

    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,



  },
  btnText: {
    color: "#FFF",
    fontSize: 15
  },
  converterBtn: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    width: "33.3%",
    borderWidth: 2,
    borderColor: "#bbe1fa",
    marginTop: 10,
    backgroundColor: "#0f4c75"


  }


})