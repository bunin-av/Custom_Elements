import React, {useState} from 'react';
import './App.scss';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import Accordion from "./components/Accordion/Accordion";
import {Select, ValueType} from "./components/Select/Select";

type PageTitlePropsType = {
    title: string
}

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionValue, setAccordionValue] = useState<boolean>(true)
    const [accordionItems, setAccordionItems] = useState(
        [
            {title:"About Us", value:1},
            {title: "Contacts", value:2},
            {title:"Our Clients", value:3},
        ])


    return (
        <div>
            Article 1
            <Accordion
                titleValue={"Users"}
                collapsed={accordionValue}
                onClickCB={() => setAccordionValue(!accordionValue)}
                items={accordionItems}
                onItemClick={x=>x}
            />
            Article 2
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>

            <OnOff values={true}/>


        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;
