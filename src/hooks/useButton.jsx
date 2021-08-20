import { useState } from "react";

export default function useButton(initial) {
  const [isToggled, setIsToggled] = useState(initial);

  const onToggle = () => setIsToggled(!isToggled);

  return { isToggled, onToggle };
}
