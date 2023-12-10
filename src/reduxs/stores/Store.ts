import { configureStore } from '@reduxjs/toolkit'
import cartsReducer from '../reducers/CartsReducer'
import ordersReducer from '../reducers/ordersReducers'
import usersReducer from '../reducers/usersReducer'
import { NavigationReducer } from '../reducers/NavigationReducer'
import CartsReducer from '../reducers/CartsReducer'
// ...

export const store = configureStore({
  reducer: {
    carts: CartsReducer,
    //orders: ordersReducer,
    //users: usersReducer,
    //navigations: NavigationReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch