import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import '../global.css';

const App = () => {
	return (
		<>
			<View>
				<Text className = "">Aora!</Text>
				<Link href={"/profile"}>Go to profile</Link>
			</View>
		</>
	);
}

export default App;
