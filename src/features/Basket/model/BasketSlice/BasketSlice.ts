import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBasketShema, IOrderInBasket } from "../../types/BasketSliceShema";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState: IBasketShema = {
  OrdersInBasket: [],
};

const persistConfig = {
  key: "basket",
  storage,
};

export const BasketSlice = createSlice({
  name: "Basket",
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<IOrderInBasket>) {
      state.OrdersInBasket = [...state.OrdersInBasket, action.payload];
    },
    removeFromBasket(state, action: PayloadAction<string>) {
      state.OrdersInBasket = state.OrdersInBasket.filter(
        (el) => el.id !== action.payload
      );
    },
    clearBasket(state, action: PayloadAction<[]>) {
      state.OrdersInBasket = action.payload;
    },
  },
});

export const { addToBasket, removeFromBasket, clearBasket } =
  BasketSlice.actions;
export const persistedBasketReducer = persistReducer(
  persistConfig,
  BasketSlice.reducer
);
