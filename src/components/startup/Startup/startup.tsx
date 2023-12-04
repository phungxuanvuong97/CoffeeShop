import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
	container: {
		alignItems: 'stretch',
		backgroundColor: '#F7931A',
		display: 'flex',
		flexDirection: 'column',
		padding: 17,
		paddingBottom: 50,
	},
	header: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		gap: 20,
	},
	timeContainer: {
		color: '#FFF',
		textAlign: 'center',
		flex: 1,
		whiteSpace: 'nowrap',
		fontWeight: '500',
		fontSize: 15,
		fontFamily: 'SF Pro Text, sans-serif',
	},
	logo: {
		overflow: 'hidden',
		alignSelf: 'stretch',
		position: 'relative',
		display: 'flex',
		width: 68,
		flexShrink: 0,
		maxWidth: '100%',
		flexDirection: 'column',
		aspectRatio: 5.67,
	},
	banner: {
		overflow: 'hidden',
		alignSelf: 'center',
		position: 'relative',
		display: 'flex',
		marginTop: 276,
		width: 121,
		maxWidth: '100%',
		flexDirection: 'column',
		aspectRatio: 0.52,
	},
	titleContainer: {
		color: '#FFF',
		textAlign: 'center',
		alignSelf: 'center',
		whiteSpace: 'nowrap',
		marginVertical: 36,
		fontSize: 40,
		fontWeight: '700',
		fontFamily: 'Poppins, sans-serif',
	},
});

function StartupScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text>BTCPAY</Text>
			</View>
		</View>
	);
}

export default StartupScreen;
