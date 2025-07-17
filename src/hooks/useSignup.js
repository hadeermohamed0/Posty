import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { signupSchema } from "../schemas/signupSchema";
import toast from "react-hot-toast";

export const useSignup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
     
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(userCredential.user, {
        displayName: data.name,
      });

  
      toast.success("Account created successfully!");
      navigate("/");
    } catch (error) {
   
      toast.error("Signup failed " + error.message);
    }
  };
  return { register, handleSubmit, errors, onSubmit };
};
