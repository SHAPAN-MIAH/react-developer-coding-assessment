import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  // Get User List............
  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then((res) => setUsers(res.data.users));
  }, []);

  // Get User Posts...........
  const GetUserPosts = (id) => {
    axios.get(`https://dummyjson.com/users/${id}/posts`)
      .then((res) => setUserPosts(res.data.posts));
  };

  return { users, GetUserPosts, userPosts };
};

export default User;
