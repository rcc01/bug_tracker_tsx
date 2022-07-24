import { createContext } from "react";

import StoreRoot from "./stores/StoreRoot";

const StoreContext = createContext<StoreRoot>({} as StoreRoot);

export default StoreContext;