import { createContext, useContext } from "react";

export type Screen = "home" | "core" | "data-display" | "forms" | "feedback" | "overlays" | "layout" | "navigation" | "charts";

type NavContextType = { navigate: (s: Screen) => void; goBack: () => void };

export const NavContext = createContext<NavContextType>({ navigate: () => {}, goBack: () => {} });
export const useNav = () => useContext(NavContext);
