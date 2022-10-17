import { useCallback, useState } from "react";

const useRerender: () => [unknown, () => void] = () => {
  const [state, setState] = useState(0);
  const rerender = useCallback(() => setState((prev) => prev + 1), [setState]);
  return [state, rerender];
};

export default useRerender;
