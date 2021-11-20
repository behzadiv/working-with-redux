import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

const UserContainer = () => {
  const userData = useSelector((state) => state.users);
  console.log(userData);
  const { loading, error, users } = userData;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>users list</h2>
      {loading ? (
        <p>fetch data is loading ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        users.map((user) => <p key={user.id}>{user.name}</p>)
      )}
    </div>
  );
};

export default UserContainer;
