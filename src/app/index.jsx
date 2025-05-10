import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import '../global.css';

const App = () => {
	return (
		<>
			<View className = "flex-1 items-center justify-center bg-white">
				<Text className = "text-3xl font-pblack">Aora!</Text>
				<Link href={"/profile"} className='text-purple-700'>Go to profile</Link>
			</View>
		</>
	);
}

export default App;
