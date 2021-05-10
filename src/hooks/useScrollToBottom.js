import { useEffect } from "react";

export const useScrollToBottom = (trigger, className) => {
  // Scrolls to the bottom of a container with a
  // given className when active is flipped to true

  useEffect(() => {
    if (trigger) {
      Promise.resolve().then(() => {
        document.getElementsByClassName(
          className
        )[0].scrollTop = document.getElementsByClassName(
          className
        )[0].scrollHeight;
      });
    }
  }, [trigger, className]);
};
