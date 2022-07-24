import { createContext } from "react";

interface LayoutContextContent {
    menuOpen: boolean;
    isDesktop: boolean;
}

const LayoutContext = createContext<LayoutContextContent>({
    menuOpen: false,
    isDesktop: false
} as LayoutContextContent);

export default LayoutContext;