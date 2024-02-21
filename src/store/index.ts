import  { usersSlice } from '@/features/users'
import { baseApi } from '@/query/base'
import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
// ...

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    users: usersSlice.reducer,

    // Base API Reducers
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
  .concat(baseApi.middleware, thunk)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch