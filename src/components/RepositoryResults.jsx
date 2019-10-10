import "../styles/components/RepositoryItem.scss";
import { DateTime } from "luxon";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import { calculateAnimationDelay } from "../util/animation";
import { limitWords } from "../util/string";
import AnimatedNumber from "./AnimatedNumber";
import Loader from "./Loader";

function RepositoryResults({ data, showMoreItems }) {
  const { pageInfo, repositoryCount = 0 } = data.search;
  const repos = data.search.edges.map(edge => edge.node);

  const showMoreIfVisible = isVisible => isVisible && showMoreItems();

  return (
    <section className="RepositoryResults">
      <div className="section-title">
        <h2>Repositories</h2>
        <AnimatedNumber value={repositoryCount} className="total-count" />
      </div>
      <main className="section-results">
        {!repos.length && <span className="empty-results">No results</span>}
        {repos.map((repo, index) => (
          <RepositoryItem
            key={repo.nameWithOwner}
            repo={repo}
            animationDelay={calculateAnimationDelay(index, repos.length)}
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

function RepositoryItem({ repo, animationDelay }) {
  return (
    <div className="RepositoryItem" style={{ animationDelay }}>
      <a
        href={repo.url}
        className="picture"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={repo.openGraphImageUrl} alt={repo.nameWithOwner} />
      </a>
      <div className="personal-info">
        <a
          href={repo.url}
          className="name"
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
        <span className="nameWithOwner">{repo.nameWithOwner}</span>
        {repo.description && (
          <span className="description">{limitWords(repo.description)}</span>
        )}
        {repo.primaryLanguage && (
          <span
            className="primary-language"
            style={{ color: repo.primaryLanguage.color }}
          >
            {repo.primaryLanguage.name}
          </span>
        )}
      </div>
      <div className="details">
        <span className="account-age">
          {DateTime.fromISO(repo.createdAt).toRelative()}
        </span>
        <span className="count">Issues: {repo.issues.totalCount}</span>
        <span className="count">
          Pull Requests: {repo.pullRequests.totalCount}
        </span>
      </div>
    </div>
  );
}

export default RepositoryResults;
