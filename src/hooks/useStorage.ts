import { useEffect, useState } from "react";
import { UserAuth } from "../context/UserContext";

const useStorage = () => {
  const [savedUser, setSavedUser] = useState<UserAuth | null>(null);
  const savedToken = localStorage.getItem("token");
  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");

    if (userFromStorage) {
      const user = JSON.parse(userFromStorage);
      setSavedUser(user);
    }
  }, []);

  return { savedUser, savedToken };
};

export default useStorage;
