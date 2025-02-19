import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Slot} from 'expo-router';

const RootLayout = () => {
	return (
		<>
			{/* <View style={styles.container}>
				<Text>Root Layout</Text>
			</View> */}
			<Slot />
		</>
	);
}

export default RootLayout;

// const styles = StyleSheet.create({
// 	container: {
// 		display: 'flex',
// 		flex: 1,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// });
