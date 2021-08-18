import { useState } from "react";

export default function useButton(initial) {
  const [isToggled, setIsToggled] = useState(initial);
  const [isDisabled, setIsDisabled] = useState(false);

  const onClick = () => setIsToggled(!isToggled);

  const validateValues = (values) => {
    setIsDisabled(true);
    if (Object.values(values).every((v) => v.length >= 1)) setIsDisabled(false);
  };

  return { isToggled, isDisabled, onClick, validateValues };
}
