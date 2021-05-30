import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * Callback that are called when component is clicked + (to show tip in WebStorm CTRL+Q)
     */
    onClickCB: () => void
    items: ItemsType[]
    onItemClick: (value: string | number) => void
}

export type ItemsType = {
    title: string
    value: string | number
}


function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClick={props.onClickCB}
            />
            {!props.collapsed &&
            <AccordionBody
                items={props.items}
                onItemClick={props.onItemClick}
            />}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    /**
     * Callback that are called when component is clicked + (to show tip in WebStorm CTRL+Q)
     */
    onClick: () => void
}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={(e) => props.onClick()}>---{props.title}---</h3>
}

type AccordionBodyType = {
    items: ItemsType[]
    onItemClick: (value: string | number) => void
}


function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            {props.items.map((it) => <li
                key={it.value}
                onClick={() => props.onItemClick(it.value)}
            >{it.title}</li>)}
        </ul>
    )
}

export default Accordion
