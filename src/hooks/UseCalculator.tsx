import {useState, useRef} from 'react';

enum Operators {
  plus,
  rest,
  multiply,
  divide,
}

export const UseCalculator = () => {
  const [number, setNumber] = useState('0');
  const [total, setTotal] = useState('0');
  const arithmeticOperator = useRef<Operators>();
  const clearNumber = () => setNumber('0');
  const clearTotal = () => setTotal('0');

  const buildNumber = (textNumber: string) => {
    // Don't allow double quote
    if (number.includes('.') && textNumber === '.') {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      // Double point
      if (textNumber === '.') {
        setNumber(number + textNumber);
      } else if (textNumber === '0' && number.includes('.')) {
        // Another zero or exist a point
        setNumber(number + textNumber);
      } else if (textNumber !== '0' && !number.includes('.')) {
        // textNumber is different to zero and no point
        setNumber(textNumber);
      } else if (textNumber === '0' && !number.includes('.')) {
        // Avoid 0000.0
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const addReduceOperator = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
      return;
    }
    setNumber(`-${number}`);
  };

  const deleteLastDigit = () => {
    if (number.length === 1 && number !== '0') {
      clearNumber();
      return;
    }
    if (number.length === 2 && number.includes('-')) {
      clearNumber();
      return;
    }
    if (number.length > 1) {
      setNumber(number.slice(0, -1));
      return;
    }
  };

  const addNumberToTotalField = () => {
    if (number.endsWith('.')) {
      setTotal(number.slice(0, -1));
    } else {
      setTotal(number);
    }
    clearNumber();
  };

  const btnDivide = () => {
    addNumberToTotalField();
    arithmeticOperator.current = Operators.divide;
  };

  const btnMultiply = () => {
    addNumberToTotalField();
    arithmeticOperator.current = Operators.multiply;
  };

  const btnRest = () => {
    addNumberToTotalField();
    arithmeticOperator.current = Operators.rest;
  };

  const btnPlus = () => {
    addNumberToTotalField();
    arithmeticOperator.current = Operators.plus;
  };

  const calcOperationResult = () => {
    if (total === '0' || number === '0') {
      return;
    }
    const numberCalc = Number(number);
    const totalCalc = Number(total);

    switch (arithmeticOperator.current) {
      case Operators.plus:
        setNumber(`${numberCalc + totalCalc}`);
        break;
      case Operators.rest:
        setNumber(`${totalCalc - numberCalc}`);
        break;
      case Operators.multiply:
        setNumber(`${numberCalc * totalCalc}`);
        break;
      case Operators.divide:
        setNumber(`${totalCalc / numberCalc}`);
        break;
      default:
        break;
    }
    clearTotal();
  };

  return {
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
  };
};
