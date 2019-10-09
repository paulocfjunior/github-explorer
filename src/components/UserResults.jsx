import "../styles/components/UserItem.scss";
import { DateTime } from "luxon";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import { calculateAnimationDelay } from "../util/animation";
import { limitWords, makeMapsLink } from "../util/string";
import AnimatedNumber from "./AnimatedNumber";
import Loader from "./Loader";

function UserResults({ data, showMoreItems }) {
  const { pageInfo, userCount = 0 } = data.search;
  const users = data.search.edges.map(edge => edge.node);

  const showMoreIfVisible = isVisible => isVisible && showMoreItems();

  return (
    <section className="UserResults">
      <div className="section-title">
        <h2>Users</h2>
        <AnimatedNumber value={userCount} className="total-count" />
      </div>
      <main className="section-results">
        {!users.length && <span className="empty-results">No results</span>}
        {users.map((user, index) => (
          <UserItem
            key={user.login}
            user={user}
            animationDelay={calculateAnimationDelay(index, users.length)}
          />
        ))}
        {pageInfo.hasNextPage && (
          <VisibilitySensor onChange={showMoreIfVisible}>
            <button
              className="show-more-button"
              onClick={showMoreIfVisible}
              type="button"
            >
              <Loader />
            </button>
          </VisibilitySensor>
        )}
      </main>
    </section>
  );
}

function UserItem({ user, animationDelay }) {
  return (
    <div className="UserItem" style={{ animationDelay }}>
      <a href={user.url} className="picture">
        <img decoding="async" src={user.avatarUrl} alt={user.login} />
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
            href={makeMapsLink(user.location)}
            target="_blank"
            rel="noopener noreferrer"
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
