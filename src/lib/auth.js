import {
  loginWithEmailPassword,
  registerWithEmailPassword,
} from "../features/auth/api";

import { storage } from "../utils/storage";
import { useHistory } from "react-router-dom";
import { useNotification } from "../hooks";
import { useAppContext } from "../context/ContextProvider";

export const useAuth = () => {
  // global app context
  const { notify } = useNotification();
  const { user, setUser } = useAppContext();
  const history = useHistory();

  const login = async (email, password) => {
    // validate values
    if (!email || !password) return;
    // send user details to server for details via axios post
    try {
      const { data, tokens } = await loginWithEmailPassword(email, password);
      // set users information
      setUser(data);
      // set auth tokens
      storage.setTokens(tokens);
      // send user to dashboard
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      notify({
        title: "Error",
        description: "Email or Password are incorrect",
        status: "error",
      });
    }
  };

  const register = async (formData) => {
    // validate values
    if (!formData) return;
    try {
      // send user details to server for details via axios post
      const { data, tokens } = await registerWithEmailPassword(formData);
      // set users information
      setUser(data);
      // set auth tokens
      storage.setTokens(tokens);
      // send user to dashboard
      history.push("/dashboard");
    } catch (error) {
      notify({
        title: "Error",
        description: "Email already in use",
        status: "error",
      });
    }
  };

  const logout = () => {
    // remove user details
    setUser(null);
    // remove auth tokens
    storage.clearTokens();
    // send user to login page
  };

  return { login, register, user, setUser, logout };
};
