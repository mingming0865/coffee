import React from 'react'
import { View, Text } from 'react-native'
import AppNavigation from './src/appNavigation/routes'

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import AllReducer from "./src/reducers";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk'
import HomeStackScreen from './src/appNavigation/routes';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, AllReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store)

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>

  )
}
