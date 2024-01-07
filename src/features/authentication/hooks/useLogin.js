import { useState } from "react";

export const useLogin = () => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const login = (data) => {
    setError(null);
    setIsPending(true);

    try {
      setIsPending(false);
      const { name } = data;
      if (name === "Oybek") {
        console.log("ok");
      } else {
        console.log("error");
      }
    } catch (error) {
      setError("Error!");
      setIsPending(false);
    }
  };

  return { login, error, isPending };
};
