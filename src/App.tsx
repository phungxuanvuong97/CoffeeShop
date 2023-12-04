import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider } from '@/theme';
import AppNavigator from './navigators/AppNavigator';
import './translations';
import { ClothesProvider } from './context';
import { LogBox } from 'react-native';


const queryClient = new QueryClient();

export const storage = new MMKV();

function App() {
	LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  	LogBox.ignoreAllLogs(); //Ignore all log notifications
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider storage={storage}>
			<ClothesProvider>
				<AppNavigator />
			</ClothesProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
