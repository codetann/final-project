import { useState } from "react";

export function useForm() {
  const [isDisabled, setIsDisabled] = useState(false);

  const validateValues = (values) => {
    setIsDisabled(true);
    if (Object.values(values).every((v) => v.length >= 1)) setIsDisabled(false);
  };

  const validatePassword = (password, confirm) => {
    setIsDisabled(true);
    if (password === confirm && password.length >= 1) setIsDisabled(false);
  };

  const validateSwitch = (toggle) => {
    setIsDisabled(true);
    if (toggle) setIsDisabled(false);
  };

  return { validateValues, validatePassword, validateSwitch, isDisabled };
}
