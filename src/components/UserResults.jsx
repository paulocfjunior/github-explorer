import "../styles/components/UserItem.scss";
import { DateTime } from "luxon";
import React from "react";

import { limitWords } from "../util/string";
import Loader from "./Loader";

function UserResults({ data }) {
  const { pageInfo, userCount = 0 } = data.search;
  const users = data.search.edges.map(edge => edge.node);

  return (
    <section className="UserResults">
      <div className="section-title">
        <h2>Users</h2>
        <span className="total-count">
          {userCount} {userCount === 1 ? "result" : "results"}
        </span>
      </div>
      <main className="section-results">
        {users.map((user, index) => (
          <UserItem key={user.login} user={user} index={index} />
        ))}
        {pageInfo.hasNextPage && (
          <button className="show-more-button" type="button">
            <Loader />
          </button>
        )}
      </main>
    </section>
  );
}

function UserItem({ user, index }) {
  return (
    <div className="UserItem" style={{ animationDelay: `${index * 50}ms` }}>
      <a href={user.url} className="picture">
        <img src={user.avatarUrl} alt={user.login} />
      </a>
      <div className="personal-info">
        <a href={user.url} className="name">
          @{user.login}
          {user.name && ` - ${user.name}`}
        </a>
        {user.bio && <span className="bio">{limitWords(user.bio)}</span>}
        {user.description && (
          <span className="bio">{limitWords(user.description)}</span>
        )}
        {user.location && (
          <a
            className="location"
            href={`https://maps.google.com/?q=${encodeURIComponent(
              user.location
            )}`}
            target="_blank"
          >
            <i className="fas fa-map-marker-alt" />
            {user.location}
          </a>
        )}
      </div>
      <div className="details">
        <span className="account-age">
          {DateTime.fromISO(user.createdAt).toRelative()}
        </span>
        {user.followers && (
          <span className="count">Followers: {user.followers.totalCount}</span>
        )}
        {user.following && (
          <span className="count">Following: {user.following.totalCount}</span>
        )}
      </div>
    </div>
  );
}

export default UserResults;
