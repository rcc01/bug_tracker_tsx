import { PropsWithChildren, ReactElement } from 'react';

import StoreContext from '../StoreContext';
import StoreRoot from '../stores/StoreRoot';

export type StoreComponent = {
  store?: StoreRoot;
};

const StoreContextProvider = ({
  store,
  children,
}: PropsWithChildren<StoreComponent>): ReactElement => {
  const value = store || new StoreRoot();

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
