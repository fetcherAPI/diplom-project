import { configureStore } from "@reduxjs/toolkit";
import { BasketReducer } from "features/Basket";
import { persistStore } from "redux-persist";
export const store = configureStore({
  reducer: {
    Basket: BasketReducer,
  },
});

export const persisitedStore = persistStore(store);
