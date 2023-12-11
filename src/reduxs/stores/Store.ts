import { Tuple, combineReducers, configureStore } from '@reduxjs/toolkit'
import cartsReducer from '../reducers/CartsReducer'
import ordersReducer from '../reducers/ordersReducers'
import usersReducer from '../reducers/usersReducer'
import { NavigationReducer } from '../reducers/NavigationReducer'
import CartsReducer from '../reducers/CartsReducer'
import thunk from 'redux-thunk';

import { MMKVLoader } from "react-native-mmkv-storage";
import { persistReducer, persistStore } from 'redux-persist'

const storage = new MMKVLoader().initialize();

const persistConfig = {
  key: 'root',
  storage,
}

const combinReducer = combineReducers({
  carts: CartsReducer,
  //orders: ordersReducer,
  //users: usersReducer,
  //navigations: NavigationReducer
});

const persistedReducer = persistReducer(persistConfig, combinReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch