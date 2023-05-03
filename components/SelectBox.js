import React from 'react';
import {View, Text, StyleSheet, } from 'react-native';

function SelectBox ({input1, input2}){
	const msg = "hello";
	return(
		<View>
			<Text style = {styles.textColor} >{msg}</Text>
			<Text>{input1}</Text>
			<Text>{input2}</Text>
		</View>
	);
}

export default SelectBox;

const styles = StyleSheet.create(
{	textColor: {
		color: 'blue'
    }}
);
