import React from "react";

export const Item = ({ path, commitMessage, author, date }) => (
  <tr key={path}>
    <td>
      <Icon />
    </td>
    <td>
      <a href={path}>{path}</a>
    </td>
    <td>{markdownIt(commitMessage)}</td>
    <td>
      <StaffCard login={author}></StaffCard>
    </td>
    <td>{moment.format(date)}</td>
  </tr>
);
