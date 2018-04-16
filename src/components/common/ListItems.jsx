import React from 'react';

const ListItems = (props) => {
    const options = props.results.map(r => (
      <li key={r.value}>
        {r.text}
      </li>
    ))
    return <ul>{options}</ul>
  }
  
  export default ListItems;