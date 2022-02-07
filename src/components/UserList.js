import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useState } from "react/cjs/react.development";
import UserCart from "./UserCart";

const UserList = () => {
  const [users, setUsers] = useState([]);
  console.log(users)
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) =>setUsers(res) )
      .catch((err) => console.log(err));
  }, []);

  //  if (loding)
  //  return <Spinner animation="border" />
  return (
    <div>
      <div>
        {users.map((user, index) => (
          <UserCart user={user} key={index} />
        ))}
      </div>
    </div>
  );
};
export default UserList;
