import "../styles/components/PageSwitcher.scss";
import React from "react";

function PageSwitcher({ label, active, handleClick }) {
  const activeClass = active ? "active" : "";
  return (
    <button
      className={["PageSwitcher", activeClass].join(" ")}
      type="button"
      onClick={handleClick}
    >
      <i className="fas fa-user-friends" />
      <span>{label}</span>
    </button>
  );
}

export default PageSwitcher;
