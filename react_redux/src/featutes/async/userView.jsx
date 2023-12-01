import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch } from "./asyncSlice";
export const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch());
  }, []);
  return (
    <div>
      <h1>List of Users</h1>
      {user.loading && <div> loading ....</div>}
      {!user.loading && user.error ? <div>Error is : {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {
          user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
