import React, { useEffect, useState } from "react";
import Card from "./Card";

import { fetchUsersWithPosts } from "../api";
import ErrorMessage from "../common/ErrorMessage";

export const CardList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(undefined);
  
  // Fetch users from API
  useEffect(() => {
    const abortController = new AbortController();

    fetchUsersWithPosts(abortController.signal).then(setUsers).catch(setError);

    return () => abortController.abort();
  }, []);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  // Create a "card" for each user in the user list
  const list = users.map((user) => <Card key={user.id} user={user} />);

  // Display cards
  return (
    <main className="container">
      <section className="row">{list}</section>
    </main>
  );
};

export default CardList;
