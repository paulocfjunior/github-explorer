import "../styles/components/PageSwitcher.scss";
import React from "react";

function PageSwitcher({ label, active, icon, handleClick }) {
  const activeClass = active ? "active" : "";
  return (
    <button
      className={["PageSwitcher", activeClass].join(" ")}
      type="button"
      onClick={handleClick}
    >
      <i className={icon} />
      <span>{label}</span>
    </button>
  );
}

export default PageSwitcher;
