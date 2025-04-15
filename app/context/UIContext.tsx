"use client";

import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";

/**
 * Types for global UI state
 */
type UIState = {
  isScrolled: boolean; // Whether the user has scrolled vertically
  hamburgerOpened: boolean; // Whether the hamburger menu is open
};

/**
 * Supported UI actions for dispatching state updates
 */
type UIAction =
  | { type: "SET_SCROLLED"; payload: boolean }
  | { type: "TOGGLE_HAMBURGER" }
  | { type: "SET_HAMBURGER"; payload: boolean };

/**
 * Default initial state for UI context
 */
const initialState: UIState = {
  isScrolled: false,
  hamburgerOpened: false,
};

/**
 * Reducer function for managing UI-related state
 */
function uiReducer(state: UIState, action: UIAction): UIState {
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

/**
 * Extended context type combining state, dispatch, and ref
 */
type UIContextType = UIState & {
  scrollRef: RefObject<HTMLDivElement | null>; // Reference to the scrollable container
  dispatch: React.Dispatch<UIAction>; // Dispatch function for updating UI state
};

/**
 * React Context for global UI state
 */
const UIContext = createContext<UIContextType | null>(null);

/**
 * UIProvider wraps the application with UI context
 *
 * - Tracks scroll position of a container div - used only for nav for now
 * - Manages hamburger menu state
 */
export const UIProvider = ({ children }: { children: ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(uiReducer, initialState);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      dispatch({ type: "SET_SCROLLED", payload: container.scrollTop > 0 });
    };

    // Set scroll state immediately on mount - this will be false
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

/**
 * Custom hook for accessing UI context safely
 *
 * @throws Error if used outside UIProvider
 */
export const useUIContext = () => {
  const context = useContext(UIContext);
  if (!context)
    throw new Error("useUIContext must be used within a UIProvider");
  return context;
};
