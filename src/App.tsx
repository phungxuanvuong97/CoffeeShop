import "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MMKV } from "react-native-mmkv";

import { ThemeProvider } from "@/theme";
import AppNavigator from "./navigators/AppNavigator";
import "./translations";
import { ClothesProvider } from "./context";
import { LogBox } from "react-native";
import { GluestackUIProvider, Text, createConfig } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { AppDataProvider } from "./context/AppDataContext";
import { Provider } from "react-redux";
import { persistor, store } from "./reduxs/stores/Store";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

export const storage = new MMKV();

function App() {
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <GluestackUIProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider storage={storage}>
          <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppDataProvider>
              <AppNavigator />
            </AppDataProvider>
           </PersistGate>
          </Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </GluestackUIProvider>
  );
}

export default App;
