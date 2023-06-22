import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "entity/loginForm";
import { BasketReducer } from "features/Basket";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: {
    Basket: BasketReducer,
    Auth: AuthSlice.reducer,
  },
});

export const persisitedStore = persistStore(store);
