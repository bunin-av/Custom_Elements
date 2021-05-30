import React, {Dispatch, SetStateAction, useState} from "react";


function UncontrolledRating() {
    let [values, setValues] = useState(0)

    console.log("Rating rendering")

    return (
      <div>
          <Star selected={values > 0} setValue={() => setValues(1)}/>
          <Star selected={values > 1} setValue={() => setValues(2)}/>
          <Star selected={values > 2} setValue={() => setValues(3)}/>
          <Star selected={values > 3} setValue={() => setValues(4)}/>
          <Star selected={values > 4} setValue={() => setValues(5)}/>
      </div>
    );
    /*if (props.values === 1) {
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
    if (props.values === 2) {
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
    if (props.values === 3) {
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
    if (props.values === 4) {
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
    if (props.values === 5) {
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
    setValue: () => void
}

function Star(props: StarRatingType) {
    console.log("Star rendering")
    return (
      <span style={{margin: '10px'}} onClick={() => props.setValue}>
          {(props.selected) ? <b>star</b> : 'star'}
      </span>
    )
}

export default UncontrolledRating
