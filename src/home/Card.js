import React from "react";
import { Link } from "react-router-dom";

// Creates a "card" for each user. User's name displays their profile, #posts directly displays their posts instead
export const Card = ({ user = { posts: [] } }) => {
  return (
    <article className="col-12 col-md-6 col-xl-3 my-2 align-self-stretch">
      <div className="border p-4 h-100 d-flex flex-column">
        <h2 className="font-weight-lighter flex-fill">
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </h2>
        <Link to={`/users/${user.id}/posts`} className="mt-2">
          {user.posts.length} Posts »
        </Link>
      </div>
    </article>
  );
};

export default Card;
