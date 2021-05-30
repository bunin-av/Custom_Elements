import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    const [value, setValue] = useState(props.collapsed)
    console.log("Accordion rendering")
    return (
      <div>
          <AccordionTitle title={props.titleValue} onClick={() => setValue(!value)}/>
          {!value && <AccordionBody/>}
      </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => props.onClick()}>---{props.title}---</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
      <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
      </ul>
    );
}
