import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // চাইলে remove করতে পারেন
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
