import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    username,
    fullName,
    password,
    conformPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      username,
      fullName,
      password,
      conformPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          fullName,
          password,
          conformPassword,
          gender,
        }),
      });

      const data = await res.json();
      if(data.error){
        throw new Error(data.error);
      }
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup,loading }
};

export default useSignup;

function handleInputErrors({
  username,
  fullName,
  password,
  conformPassword,
  gender,
}) {
  if (!fullName || !username || !password || !conformPassword || !gender) {
    toast.error("All fields  are required");
    return false;
  }

  if (password !== conformPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 5) {
    toast.error("password should be 5 characters long");
    return false;
  }

  return true;
}
