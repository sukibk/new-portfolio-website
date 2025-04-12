"use client";

import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

type UIState = {
  isScrolled: boolean;
  hamburgerOpened: boolean;
};

type UIAction =
  | { type: "SET_SCROLLED"; payload: boolean }
  | { type: "TOGGLE_HAMBURGER" }
  | { type: "SET_HAMBURGER"; payload: boolean };

const initialState = {
  isScrolled: false,
  hamburgerOpened: false,
};

function uiReducer(state: UIState, action: UIAction) {
  switch (action.type) {
    case "SET_SCROLLED":
      return { ...state, isScrolled: action.payload };
    case "TOGGLE_HAMBURGER":
      return { ...state, hamburgerOpened: !state.hamburgerOpened };
    case "SET_HAMBURGER":
      return { ...state, hamburgerOpened: action.payload };
    default:
      return state;
  }
}

type UIContextType = UIState & {
  scrollRef: RefObject<HTMLDivElement | null>;
  dispatch: React.Dispatch<UIAction>;
};

const UIContext = createContext<UIContextType | null>(null);

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(uiReducer, initialState);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      dispatch({ type: "SET_SCROLLED", payload: container.scrollTop > 0 });
    };

    handleScroll();

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <UIContext.Provider value={{ ...state, scrollRef, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => {
  const context = useContext(UIContext);
  if (!context)
    throw new Error("useUIContext must be used within a UIProvider");
  return context;
};
