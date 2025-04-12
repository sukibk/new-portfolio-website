import { useEffect, useState } from "react";

interface UseDelayShowElementProps {
  initialState: boolean;
  delay: number;
}

/**
 * useDelayShowElement
 *
 * A custom React hook that sets a boolean value to `true` after a specified delay.
 * Useful for delayed rendering or UI transitions.
 *
 * @example
 * const show = useDelayShowElement({ initialState: false, delay: 5000 });
 * if (show) {
 *   // Render something after 5 seconds
 * }
 */
const useDelayShowElement = ({
  initialState = false,
  delay = 19000,
}: UseDelayShowElementProps): boolean => {
  const [showElement, setShowElement] = useState<boolean>(initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElement(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return showElement;
};

export default useDelayShowElement;
