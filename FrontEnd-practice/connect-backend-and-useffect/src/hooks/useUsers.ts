import { useEffect, useState } from "react";
import userService, { User } from "../services/user-Service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  // done with promise with abort code, get all users
  useEffect(() => {
    setLoader(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoader(false);
      })

      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoader(false);
      });
    return () => cancel();
  }, []);

  return { users, error, loader, setUsers, setError };
};

export default useUsers;
