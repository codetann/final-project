import { useState } from "react";

export function useInput(initial) {
  const [value, setValue] = useState(initial);

  const onValueChange = (value) => setValue(value);

  return [value, onValueChange];
}
