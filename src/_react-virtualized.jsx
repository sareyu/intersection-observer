import { List } from "react-virtualized";

const list = ["Lorem", "Ipsum", "Dolor"];

const Item = ({ key, index, style }) => (
  <div key={key} style={style}>
    {list[index]}
  </div>
);

export default () => (
  <List
    width={300}
    height={300}
    rowCount={list.length}
    rowHeight={20}
    rowRenderer={Item}
  />
);
