import React, { useContext } from "react";
import { UserContext } from "..";

function UserInfo(props) {
  const user = useContext(UserContext);

  return <div>{user && <h5>Hello : {user.username}</h5>}</div>;
}

export default UserInfo;
