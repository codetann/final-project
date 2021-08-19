import { updateUserDetails } from "../features/user/api";
import { useAppContext } from "../context/ContextProvider";
import { useNotification } from "../hooks";

export const useUpdate = () => {
  const { setUser } = useAppContext();
  const { notify } = useNotification();

  const update = async (data) => {
    try {
      // send updates to server
      //const user = await updateUserDetails(data);
      // set users new info
      //setUser(user.data);
      console.log(data);
      // notify of success
      notify({
        title: "Success",
        description: "Changes saved",
        status: "success",
      });
    } catch (error) {
      // notify if error
      notify({
        title: "Error",
        description: "Could not save changes",
        status: "error",
      });
    }
  };

  return update;
};
