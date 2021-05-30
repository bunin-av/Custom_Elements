import React from 'react';
import {Meta} from '@storybook/react';
import OnOff from "./OnOff";


export default {
    title: 'OnOff',
    component: OnOff,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;


export const OnMode = () => <OnOff values={true}/>
export const OffMode = () => <OnOff values={true}/>







