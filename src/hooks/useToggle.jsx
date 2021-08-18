import { useState } from "react";

export function useToggle() {
  const [isToggle, setIsToggle] = useState(false);

  const onToggle = () => setIsToggle(!isToggle);

  return [isToggle, onToggle];
}
