import React from "react";
import useUser from "./../../Hooks/useUser";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { users, GetUserPosts } = useUser();

  const userHandler = (id) => {
    GetUserPosts(id)
  }

  return (
    <>
      <div className="home_container">
        <h2>User List:</h2>
        <br />
        <div className="user_container">
          {users.map((user) => (
            <Link key={user.id} to={`/user/${user.id}`}>
            <div  onClick={() => userHandler(user.id)} className="user_content">
              <h4>
                {user.firstName} {user.lastName}
              </h4>
              <p> Email: {user.email}</p>
              <p>Company: {user.company.name}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
