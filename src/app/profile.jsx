import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
	return (
		<>
			<View style={styles.container}>
				<Text>My Profile</Text>
			</View>
		</>
	);
}

export default Profile;

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
