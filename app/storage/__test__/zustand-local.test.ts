import { act } from "@testing-library/react";

import { useAppStore } from "@/app/storage/zustandLocal";

describe("Zustand", () => {
  it("should set introCompleted to true", () => {
    const { introCompleted, setIntroCompleted } = useAppStore.getState();
    expect(introCompleted).toBeFalsy();

    act(() => {
      setIntroCompleted();
    });

    expect(useAppStore.getState().introCompleted).toBeTruthy();
  });
});
