import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppStoreProps {
  draggedFirst: boolean;
  introCompleted: boolean;
  hasHydrated: boolean;
  setDraggedFirst: () => void;
  setIntroCompleted: () => void;
  setHasHydrated: (value: boolean) => void;
}

const useAppStore = create<AppStoreProps>()(
  persist(
    (set) => ({
      draggedFirst: false,
      introCompleted: false,
      hasHydrated: false,
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

export default useAppStore;
