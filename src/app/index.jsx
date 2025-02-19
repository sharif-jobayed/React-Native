import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const App = () => {
	return (
		<>
			<View style={styles.container}>
				<Text>Aora!</Text>
				<Link href={"/profile"}  style={styles.link}>Go to profile</Link>
			</View>
		</>
	);
}

export default App;

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	link: {
		marginTop: 20,
		color: 'blue',
	}
});