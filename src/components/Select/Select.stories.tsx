import React, {ChangeEvent, useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {Select, ValueType} from "./Select";


export default {
    title: 'Select',
    component: Select,
} as Meta;

export const ControlledSelect = () => {
    const [value, setValue] = useState<ValueType>(undefined)

    return (
        <Select
            value={value}
            items={[
                {title: "About Us", value: 1},
                {title: "Contacts", value: 2},
                {title: "Our Clients", value: 3}
            ]}
            onItemClick={setValue}/>
    )
}


