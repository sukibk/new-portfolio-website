// stores/useAppStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AppStoreProps {
  draggedFirst: boolean;
  introCompleted: boolean;
  hasHydrated: boolean;
  setDraggedFirst: () => void;
  setIntroCompleted: () => void;
  setHasHydrated: (value: boolean) => void;
}

const initialAppState: Omit<
  AppStoreProps,
  "setDraggedFirst" | "setIntroCompleted" | "setHasHydrated"
> = {
  draggedFirst: false,
  introCompleted: false,
  hasHydrated: false,
};

const useAppStore = create<AppStoreProps>()(
  persist(
    (set) => ({
      ...initialAppState,
      setIntroCompleted: () => set({ introCompleted: true }),
      setDraggedFirst: () => set({ draggedFirst: true }),
      setHasHydrated: (value: boolean) => set({ hasHydrated: value }),
    }),
    {
      name: "my-app-store",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);

export { initialAppState, useAppStore };
