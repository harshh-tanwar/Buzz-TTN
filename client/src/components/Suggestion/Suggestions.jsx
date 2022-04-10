import React, { useState } from "react";
import { Paper, Avatar, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import UserSuggestion from "./UserSuggestion";

const Suggestions = ({ users }) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState("");

  const toggleSearch = () => {
    setOpenSearch((p) => !p);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Paper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 15px",
          }}
        >
          <p>Suggestions</p>
          <IconButton onClick={() => toggleSearch()}>
            <Avatar style={{ height: 35, width: 35 }}>
              <Search style={{ color: "black", width: 20 }} />
            </Avatar>
          </IconButton>
          {openSearch ? (
            <>
              <input
                type="text"
                name="search"
                placeholder="Search"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  minWidth: "100px",
                  width: "60%",
                  backgroundColor: "lightgrey",
                  border: "none",
                  borderRadius: "10px",
                  outline: "none",
                  padding: 5,
                }}
              />
            </>
          ) : (
            <></>
          )}
        </div>
        <div style={{ height: "32vh", overflowX: "hidden", overflowY: "auto" }}>
          {filteredUsers.map((user) => (
            <UserSuggestion key={user.id} id={user.id} name={user.name} />
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default Suggestions;