const {configureStore} = require('@reduxjs/toolkit');
const { default: authSlice } = require('./redux/reducers/authSlice');

const store = configureStore({
    reducer: {
        // [api.reducerPath]: api.reducer,
        auth:authSlice.reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})
