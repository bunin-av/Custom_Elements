import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


type RatingPropsType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering")

    return (
      <div>
          <Star selected={props.value > 0} value={1} setRatingValue={props.setRatingValue}/>
          <Star selected={props.value > 1} value={2} setRatingValue={props.setRatingValue}/>
          <Star selected={props.value > 2} value={3} setRatingValue={props.setRatingValue}/>
          <Star selected={props.value > 3} value={4} setRatingValue={props.setRatingValue}/>
          <Star selected={props.value > 4} value={5} setRatingValue={props.setRatingValue}/>
      </div>
    );
    /*if (props.value === 1) {
        return (
          <div>
              <Star selected={true}/>
              <Star selected={true}/>
              <Star selected={false}/>
              <Star selected={false}/>
              <Star selected={false}/>
          </div>
        );
    }
    if (props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );

    }
    if (props.value === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );

    }
    if (props.value === 4) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 5) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        );
    }

    return (
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    );*/
}

type StarRatingType = {
    selected: boolean
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

function Star(props: StarRatingType) {
    console.log("Star rendering")
    return (
      <span onClick={()=> props.setRatingValue(props.value)}>
        {(props.selected)
          ? <b>star </b>
          : 'star '}
      </span>
    )
}

