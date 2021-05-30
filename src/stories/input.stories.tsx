import React, {ChangeEvent, useState} from 'react';
import { Story, Meta } from '@storybook/react';

import { Header, HeaderProps } from './Header';

export default {
  title: 'input',
  // component: Header,
} as Meta;

export const ControlledSelect= ()=> {
  const [value, setValue] = useState<string | undefined>(undefined)
  const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
      <select value={value} onChange={onChange}>
        <option>none</option>
        <option value={1}>Minsk</option>
        <option value={2}>Moscow</option>
        <option value={3}>Kiev</option>
      </select>
  )
}


