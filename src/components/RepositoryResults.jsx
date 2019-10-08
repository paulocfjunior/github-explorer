import "../styles/components/RepositoryItem.scss";
import { DateTime } from "luxon";
import React from "react";

import { limitWords } from "../util/string";
import Loader from "./Loader";

function RepositoryResults({ data }) {
  const { pageInfo, repositoryCount = 0 } = data.search;
  const repos = data.search.edges
    .filter(({ node }) => node.__typename === "Repository")
    .map(edge => edge.node);

  return (
    <section className="RepositoryResults">
      <div className="section-title">
        <h2>Repositories</h2>
        <span className="total-count">
          {repositoryCount} {repositoryCount === 1 ? "result" : "results"}
        </span>
      </div>
      <main className="section-results">
        {repos.map((repo, index) => (
          <RepositoryItem key={repo.nameWithOwner} repo={repo} index={index} />
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

function RepositoryItem({ repo, index }) {
  return (
    <div
      className="RepositoryItem"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <a href={repo.url} className="picture">
        <img src={repo.openGraphImageUrl} alt={repo.nameWithOwner} />
      </a>
      <div className="personal-info">
        <a href="/repository" className="name">
          {repo.name}
        </a>
        <span className="nameWithOwner">{repo.nameWithOwner}</span>
        <span className="description">{limitWords(repo.description)}</span>
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
