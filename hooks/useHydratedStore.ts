import { useState, useEffect } from 'react';

// This hook safely accesses persisted state from a Zustand store,
// ensuring it's only used after client-side hydration is complete
// to prevent server-client mismatches.
function useHydratedStore<TState, TValue>(
  store: (selector: (state: TState) => TValue) => TValue,
  selector: (state: TState) => TValue
): TValue | undefined {
  // `store(selector)` is the actual hook call that subscribes to updates.
  const result = store(selector);
  
  // State to hold the value after hydration.
  const [data, setData] = useState<TValue | undefined>();

  useEffect(() => {
    // When the component mounts or `result` from the store changes,
    // update the state. This ensures the component has the latest value
    // after hydration.
    setData(result);
  }, [result]);

  return data;
}


export default useHydratedStore;