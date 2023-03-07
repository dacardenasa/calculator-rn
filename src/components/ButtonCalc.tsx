/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  color?: 'Orange' | 'LightGray' | 'DarkGray';
  large?: boolean;
  action: (textNumber: string) => void;
}

export const ButtonCalc = ({
  text,
  color = 'Orange' || 'LightGray' || 'DarkGray',
  large = false,
  action = () => {},
}: Props) => {
  const backgroundColorBtn = {
    Orange: '#FF9427',
    LightGray: '#9B9B9B',
    DarkGray: '#2D2D2D',
  };
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: backgroundColorBtn[color],
          width: large ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.textButton,
            color: color === 'LightGray' ? '#000' : '#FFF',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    height: 80,
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 80,
  },
  textButton: {
    fontSize: 30,
    fontWeight: '300',
    padding: 10,
    textAlign: 'center',
  },
});
