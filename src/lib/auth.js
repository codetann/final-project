import {
  loginWithEmailPassword,
  registerWithEmailPassword,
} from "../features/auth/api";
import { storage } from "../utils/storage";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../context/ContextProvider";

export const useAuth = () => {
  // global app context
  const { user, setUser } = useAppContext();
  const history = useHistory();

  const login = async (email, password) => {
    // validate values
    if (!email || !password) return;
    // send user details to server for details via axios post
    const { data, tokens, error } = await loginWithEmailPassword(
      email,
      password
    );
    // set users information
    setUser(data);
    // set auth tokens
    storage.setTokens(tokens);
    if (!error) history.push("/dashboard");
  };

  const register = async (formData) => {
    // validate values
    if (!formData) return;
    // send user details to server for details via axios post
    const { data, tokens, error } = await registerWithEmailPassword(formData);
    // set users information
    setUser(data);
    // set auth tokens
    storage.setTokens(tokens);
    if (!error) history.push("/dashboard");
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
