import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

// 持久化配置
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'settings'] // 只持久化这些reducer
};

// 根reducer（暂时为空，后续添加具体的slice）
const rootReducer = combineReducers({
  // 这里将添加各种slice
  // auth: authSlice.reducer,
  // servers: serversSlice.reducer,
  // monitoring: monitoringSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
