// import axios, { AxiosError } from "axios"
import useUsers from "../hooks/useUsers";
import userService, { User } from "../services/user-Service";

export const Intro = () => {
    const { users, error, loader, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id)
      .then(() => console.log("User deleted"))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: users.length + 1, name: "New User" };
    setUsers([...users, newUser]);

    userService.add(newUser)
      .then(({ data: savedUser }) => setUsers([...users, savedUser]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + " Updated" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser)
      .then(() => console.log("User updated"))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  // done with async await
  // useEffect(() => {
  //     const fetchUsers = async () => {
  //         try {
  //             const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
  //             setUsers(res.data)
  //         } catch (err) {
  //             setError((err as AxiosError).message)
  //         }
  //     }
  //     fetchUsers()
  // }, [])

  return (
    <>
      <h2>Users</h2>
      {loader && <div className="spinner-border"></div>}
      <p className="text-danger">{error}</p>
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
              <button
                className="btn btn-outline-secondary mx-4"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
