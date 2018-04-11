import React from 'react';
import { Input } from 'semantic-ui-react';

const InputComponent = () => (
    <div>
    <Input icon='search' list='languages' placeholder='Search the HPE store' />
    <datalist id='languages'>
      <option value='English' />
      <option value='Chinese' />
      <option value='Dutch' />
    </datalist>
    </div>
)

export default InputComponent