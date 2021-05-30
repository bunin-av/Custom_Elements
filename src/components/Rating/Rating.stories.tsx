import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {Rating, RatingValueType} from "./Rating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Rating',
    component: Rating,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;


export const EmptyRating = () => <Rating value={0} setRatingValue={x => x}/>
export const Rating1 = () => <Rating value={1} setRatingValue={x => x}/>
export const Rating2 = () => <Rating value={2} setRatingValue={x => x}/>
export const Rating3 = () => <Rating value={3} setRatingValue={x => x}/>
export const Rating4 = () => <Rating value={4} setRatingValue={x => x}/>
export const Rating5 = () => <Rating value={5} setRatingValue={x => x}/>

export const RatingWithAction = () => <Rating value={5} setRatingValue={action('clicked')}/>

export const ChangingRating = () => {
    const [rating, setRating] = useState<RatingValueType>(0)

    return <Rating value={rating} setRatingValue={setRating}/>
}

