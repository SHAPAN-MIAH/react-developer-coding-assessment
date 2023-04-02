import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import "./UserProfile.css";
import axios from "axios";

const UserProfile = () => {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState([]);
  const { userPosts } = useUser();


  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((res) => setUserProfile(res?.data));
  }, []);
  

  return (
    <>
      <div className="userProfile_container">
        <div>
          <h2>
            Details Information of {userProfile?.firstName}{" "}
            {userProfile?.lastName}.
          </h2>
          <img width={200} src={userProfile?.image} alt="" />
          <h4>
            <strong>Name:</strong> {userProfile?.firstName}{" "}
            {userProfile?.lastName}
          </h4>
          <p>
            <strong>Email:</strong> {userProfile?.email}
          </p>
          <p>
            <strong>Phone:</strong> {userProfile?.phone}
          </p>
          <p>
            <strong>Blood Group:</strong> {userProfile?.bloodGroup}
          </p>
          <p>
            <strong>Address:</strong> {userProfile?.address?.address},{" "}
            {userProfile?.address?.city}, {userProfile?.address?.postalCode},{" "}
            {userProfile?.address?.state}
          </p>
          <br />

          <p>
            <strong>Company:</strong> {userProfile?.company?.name}
          </p>
          <p>
            <strong>Title:</strong> {userProfile?.company?.title}
          </p>
          <p>
            <strong>Department:</strong> {userProfile?.company?.department}
          </p>
          <p>
            <strong>Company Address:</strong>{" "}
            {userProfile?.company?.address?.address}, Address:{" "}
            {userProfile?.company?.address?.city},{" "}
            {userProfile?.company?.address?.postalCode}
          </p>
        </div>


        <div className="post_container">
          <h2>Posts List of {userProfile?.firstName}{" "}
            {userProfile?.lastName}:</h2>
          <br />
          <div className="post">
            {userPosts?.map((post) => (
              <div key={post.id} className="post_content">
                <h3>Id: {post.id}</h3>
                <h3>User Id: {post.userId}</h3>
                <br />
                <h4>{post.title}</h4>
                <br />
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
