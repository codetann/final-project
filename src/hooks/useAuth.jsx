import { loginWithEmailPassword } from "../features/auth/api";
import { useAppContext } from "../context/ContextProvider";

export const useAuth = () => {
  const { user, setUser } = useAppContext();

  const login = async (data) => {
    const { email, password } = data;
    const user = await loginWithEmailPassword(email, password);
    setUser(user.data);
  };

  return { login, user, setUser };
};
