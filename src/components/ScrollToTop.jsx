import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Källa: https://medium.com/@aptia.rahgozar/implementing-a-scroll-to-top-feature-with-react-d6994913c597

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
