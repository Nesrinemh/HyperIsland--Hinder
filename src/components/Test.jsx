import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../context/context";
import { useAuth } from "../context/AuthenticationContext";

function Test() {
  const { allUsers } = useAuth();
  const { handleCarouselClick } = useContext(ContextProvider);

  if (!allUsers) return null;
  return (
    <div className="flex gap-5">
      {allUsers.map((user, index) => (
        <img
          onClick={() => handleCarouselClick(user)}
          src={user.image}
          key={index}
        ></img>
      ))}
    </div>
  );
}

export default Test;
