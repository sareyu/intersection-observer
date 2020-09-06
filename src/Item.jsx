import React, { useRef, useEffect } from "react";

import "./Item.css";

export const Item = ({ id, observer, visible }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    observer && observer.observe(el);

    return () => {
      observer && observer.unobserve(el);
    };
  }, [observer]);

  return (
    <div className="item" ref={ref} data-id={id}>
      {visible && (
        <>
          <div className="col">{id}</div>
          <div className="col">
            <div className="avatar" />
          </div>
          <div className="col fluid">
            <div className="stub" />
          </div>
          <div className="col fluid">
            <div className="stub" />
          </div>
          <div className="col fluid">
            <div className="stub" />
          </div>
          <div className="col">
            <div className="stub" />
          </div>
        </>
      )}
    </div>
  );
};
