import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import toast from "react-hot-toast";
export const useLogin = () => {
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Welcome back!");
      navigate("/");
      return null;
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        return "Email or password is incorrect.";
      } else {
        toast.error("Oops! Login failed." + error);
        return "Oops! Login failed." + error;
      }
    }
  };

  return { login };
};
