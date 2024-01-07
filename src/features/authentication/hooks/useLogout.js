import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const useLogout = () => {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  return { logout };
};
