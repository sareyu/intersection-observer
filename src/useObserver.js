import { useState, useEffect } from "react";

function useObserver(onIntersecting) {
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    setObserver(
      new IntersectionObserver(onIntersecting, {
        rootMargin: "100% 0px"
      })
    );

    return () => setObserver(null);
  }, [onIntersecting]);

  return [observer];
}

export default useObserver;
