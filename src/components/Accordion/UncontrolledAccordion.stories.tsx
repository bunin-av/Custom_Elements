import React, {useState} from 'react';
import {Meta} from '@storybook/react';
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
} as Meta;

const callback = action('accordion mode changed')

export const MenuCollapsedMode = () => <UncontrolledAccordion titleValue={'Menu'} collapsed={true}/>
export const UsersUncollapsedMode = () => <UncontrolledAccordion titleValue={'Users'} collapsed={false}/>

export const ModeChanging = () => {
    const [value, setValue] = useState(true)
    return <UncontrolledAccordion titleValue={'Users'} collapsed={value}/>
}


