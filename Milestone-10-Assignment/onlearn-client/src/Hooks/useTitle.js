import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = "onLearn |" + title;
  }, [title]);
};
export default useTitle;
