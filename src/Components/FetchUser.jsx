import DisplayUsers from "./DisplayUsers";
import { useState, useEffect } from "react";

function FetchUser() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(
      "https://random-data-api.com/api/users/random_user?size=10"
    );
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="relative">
      <button
        onClick={getUsers}
        className="w-fit flex mx-auto my-11 text-2xl font-bold bg-red-700 text-white py-2 px-6 rounded-xl text-center"
      >
        Fetch Random
      </button>
      <div className="flex flex-wrap gap-3 place-content-center align-middle">
        {users &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <DisplayUsers data={user} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default FetchUser;
