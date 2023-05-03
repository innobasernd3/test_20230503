import React, {useState} from "react";
import {SafeAreaView, StyleSheet, Button, View, Text} from 'react-native';
import Greeting1 from './components/Greeting'
import Box from './components/Box'
import Counter from './components/Counter'

const App = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
})

// import React from 'react';
// import {SafeAreaView, } from 'react-native';
// import SelectBox from './components/SelectBox';

// function App (){
// 	const a = '나는 30살';
// 	return(
// 		<SafeAreaView>
// 			<SelectBox input1 = '나는 박소희' input2 = {a}/>
// 		</SafeAreaView>
// 	);
// };

export default App;