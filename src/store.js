import { configureStore } from '@reduxjs/toolkit';
import { mainApi } from './redux/Api/mainApi';
import authSlice from "./redux/reducers/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
  devTools: true,
});

export default store;