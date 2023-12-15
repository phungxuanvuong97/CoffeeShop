import { applicationDataReducer } from "@/reduxs/reducers/ApplicationDataReducer";
import { AppData } from "@/types/ApplicationData/AppData";
import { createContext, useContext, useReducer } from "react";

const AppDataContext = createContext<AppData | null>(null);

const ApDataDispatchContext = createContext(null);

export function AppDataProvider({ children }: any) {

  const [appData, dispatch] = useReducer(applicationDataReducer, initialAppData);

  return (
    <AppDataContext.Provider value={appData}>
      <ApDataDispatchContext.Provider value={dispatch}>
        {children}
      </ApDataDispatchContext.Provider>
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  return useContext(AppDataContext);
}

export function useAppDataDispatch() {
  return useContext(ApDataDispatchContext);
}


const initialAppData: AppData = {
  userInfo: {
    name: 'Phung Xuan Vuong',
    phoneNumber: '0888033286',
    email: 'vuogndingo@gmail.com',
    avatar: 'https://',
    address: 'S402'
  },
  carts:  [],
  orders: [],
  trackingOrders: []
};
