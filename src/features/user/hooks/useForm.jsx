import { useState } from "react";
import { updateUserDetails } from "../api";
import { useAppContext } from "../../../context/ContextProvider";
import { useNotification } from "../../../hooks";
import { useHistory } from "react-router-dom";

/**
 * This hook is only used in the profile route.
 * No need to change the parameters, they will always stay the same.
 */
export function useForm() {
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();
  const { setUser } = useAppContext();
  const { notify } = useNotification();

  const validateValues = (name, email, photo, user) => {
    if (name === user.name && email === user.email && photo === user.photo) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const submit = async (data, u) => {
    if (data.name === u.name) delete data.name;
    if (data.email === u.email) delete data.email;
    if (data.photo === u.photo) delete data.photo;

    try {
      const user = await updateUserDetails(data);
      setUser(user.data);
      notify({
        title: "Success",
        description: "Changes saved",
        status: "success",
      });
      history.push("/dashboard");
    } catch {
      notify({
        title: "Error",
        description: "Could not save changes",
        status: "error",
      });
    }
  };

  return { isDisabled, validateValues, submit };
}
