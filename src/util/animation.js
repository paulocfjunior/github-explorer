import { Events, animateScroll } from "react-scroll";
import { useReducer } from "react";

/**
 * @param {number} index
 * @param {number} total
 * @return {string}
 */
export function calculateAnimationDelay(index, total) {
  return `${(index - total + 10) * 50}ms`;
}

function scrollTopAsync() {
  return new Promise(resolve => {
    Events.scrollEvent.register("end", () => {
      Events.scrollEvent.remove("end");
      resolve();
    });
    animateScroll.scrollToTop();
  });
}

export function useSearchPageToggler() {
  function mobileVisibilityReducer(state, action) {
    switch (action.type) {
      case "SHOW_REPOS":
        return { users: false, repos: true };
      case "SHOW_USERS":
      default:
        return { users: true, repos: false };
    }
  }

  const [isVisible, dispatch] = useReducer(mobileVisibilityReducer, {
    users: true,
    repos: false
  });

  function scrollAndToggle(action) {
    scrollTopAsync().then(() => dispatch(action));
  }

  return { isVisible, scrollAndToggle };
}
