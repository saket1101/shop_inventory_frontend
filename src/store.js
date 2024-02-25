import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "./redux/Api/mainApi";
import authSlice, { setCredentials } from "./redux/reducers/authSlice";

const customMiddleware = (store) => (next) => (action) => {
  if (action.error && action.payload?.status !== 401) {
    if (
      action.payload?.data?.message &&
      Array.isArray(action.payload?.data?.message)
    ) {
      action.payload?.data?.message.forEach((element) => {
        console.log(element)
        alert(element);
      });
    } else {
      alert(action.payload?.data?.error);
    }
  } else if (action.error && action.payload?.status === 401) {
    alert("Unathorized connection plz login again!");
    store.dispatch(setCredentials());
  }
  return next(action);
};

const store = configureStore({
  reducer: {
    auth: authSlice,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware).concat(customMiddleware),
  devTools: true,
});

export default store;
