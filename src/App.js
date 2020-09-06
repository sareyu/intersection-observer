import React, { useState, useCallback } from "react";

import useObserver from "./useObserver";
import { Item } from "./Item";

const data = [...Array(2000).keys()];

function App() {
  const [visible, setVisible] = useState({});

  const onIntersecting = useCallback((entries) => {
    const res = entries.reduce((res, entry) => {
      res[entry.target.dataset.id] = entry.isIntersecting;
      return res;
    }, {});

    setVisible((prev) => Object.assign({}, prev, res));
  }, []);

  const [observer] = useObserver(onIntersecting);

  return (
    <>
      {data.map((id) => (
        <Item id={id} key={id} visible={visible[id]} observer={observer} />
      ))}
    </>
  );
}

export default App;
