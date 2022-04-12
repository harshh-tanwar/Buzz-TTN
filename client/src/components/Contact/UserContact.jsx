import React from "react";
import { Paper, Avatar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const UserContact = ({ id, name, userImage }) => {
  return (
    <div>
      <Paper
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingRight: "20%",
        }}
      >
        <Avatar
          style={{ width: 35, height: 35, margin: "10px 15px" }}
          src={userImage}
        />
        <Link
          to={`/userprofile/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <p>{name}</p>
        </Link>
      </Paper>
    </div>
  );
};

export default UserContact;
