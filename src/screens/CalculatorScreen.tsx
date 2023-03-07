import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {UseCalculator} from '../hooks/UseCalculator';
import {styles} from '../theme/darkTheme';

export const CalculatorScreen = () => {
  const {
    total,
    number,
    clearNumber,
    clearTotal,
    addReduceOperator,
    deleteLastDigit,
    buildNumber,
    btnDivide,
    btnPlus,
    btnMultiply,
    btnRest,
    calcOperationResult,
  } = UseCalculator();
  return (
    <View style={styles.calculatorContainer}>
      {total !== '0' && <Text style={styles.smallResult}>{total}</Text>}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonCalc
          text="C"
          color="LightGray"
          action={() => {
            clearNumber();
            clearTotal();
          }}
        />
        <ButtonCalc text="+/-" color="LightGray" action={addReduceOperator} />
        <ButtonCalc text="del" color="LightGray" action={deleteLastDigit} />
        <ButtonCalc text="/" color="Orange" action={btnDivide} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" color="DarkGray" action={buildNumber} />
        <ButtonCalc text="8" color="DarkGray" action={buildNumber} />
        <ButtonCalc text="9" color="DarkGray" action={buildNumber} />
        <ButtonCalc text="X" color="Orange" action={btnMultiply} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" color="DarkGray" action={buildNumber} />
        <ButtonCalc text="5" color="DarkGray" action={buildNumber} />
        <ButtonCalc text="6" color="DarkGray" action={buildNumber} />
        <ButtonCalc text="-" color="Orange" action={btnRest} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" color="DarkGray" action={buildNumber} />
        <ButtonCalc text="2" color="DarkGray" action={buildNumber} />
        <ButtonCalc text="3" color="DarkGray" action={buildNumber} />
        <ButtonCalc text="+" color="Orange" action={btnPlus} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" color="DarkGray" large action={buildNumber} />
        <ButtonCalc text="." color="DarkGray" action={buildNumber} />
        <ButtonCalc text="=" color="Orange" action={calcOperationResult} />
      </View>
    </View>
  );
};
