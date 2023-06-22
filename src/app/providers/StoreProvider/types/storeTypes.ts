import { store } from "../config/StoreConfig";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
