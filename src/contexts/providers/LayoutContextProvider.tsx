import { PropsWithChildren, ReactElement } from "react";

import LayoutContext from "../LayoutContext";

export interface LayoutContextProviderProps {
    menuOpen: boolean;
    isDesktop: boolean;
}

const LayoutContextProvider = ({
    menuOpen,
    isDesktop,
    children
}: PropsWithChildren<LayoutContextProviderProps>): ReactElement => {
    return (
        <LayoutContext.Provider
            value={{ menuOpen, isDesktop }}
        >
            {children}
        </LayoutContext.Provider>
    )
}