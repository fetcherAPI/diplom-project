import { ReactNode } from "react";
import { Provider } from "react-redux";
import { persisitedStore, store } from "../config/StoreConfig";
import { PersistGate } from "redux-persist/integration/react";

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persisitedStore}>
        {children}
      </PersistGate>
    </Provider>
  );
};
