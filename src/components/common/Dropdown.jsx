import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownComponent = (props) => (
    <Dropdown placeholder={props.placeholder} fluid selection options={props.options} search={props.search}/>
  )

export default DropdownComponent;