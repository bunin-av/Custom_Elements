import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react';
import Accordion, {AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
} as Meta;

const callback = action('accordion mode changed')
const onItemClick = action('accordion item was clicked')

export const MenuCollapsedMode = () => <Accordion
    titleValue={'Menu'}
    collapsed={true}
    onClickCB={callback}
    items={[]}
    onItemClick={onItemClick}
/>
export const UsersUncollapsedMode = () => <Accordion
    titleValue={'Users'}
    collapsed={true}
    onClickCB={callback}
    items={[
        {title:"About Us", value:1},
        {title: "Contacts", value:2},
        {title:"Our Clients", value:3}]}
    onItemClick={onItemClick}/>

export const ModeChanging = () => {
    const [value, setValue] = useState(true)
    return <Accordion
        titleValue={'Books'}
        collapsed={value}
        onClickCB={() => setValue(!value)}
        items={[
            {title:"About Us", value:1},
            {title: "Contacts", value:2},
            {title:"Our Clients", value:3}]}
        onItemClick={(value) => alert(`Item ${value} was clicked`)}
    />
}

/*const Template: Story<AccordionPropsType> = (args)=> <Accordion {...args}/>

export const MenuCollapsedMode2 = Template.bind({})

MenuCollapsedMode2.args = {
    titleValue: 'Menu',
    collapsed: true,
    /!**
     * Callback that are called when component is clicked + (to show tip in WebStorm CTRL+Q)
     *!/
    onClickCB: callback,
    items: ["About Us", "Contacts", "Our Clients"]
}*/










