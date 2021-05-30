import styles from './OnOff.module.scss'
import {useState} from "react";


function OnOff(props: { values: boolean }) {
    const [value, setValue] = useState<boolean>(false)
    const changeButtonValue = (value: boolean) => setValue(value)

    return (
      /*      <div className={styles.buttonsWrapper}>
                {/!*<div className={`${(props.value)? styles.onButton: styles.button}`}>*!/}
                <div className={`${styles.button} ${props.value && styles.onButton}`}>
                    On
                </div>
                {/!*<div className={`${(!props.value)? styles.offButton: styles.button}`}>*!/}
                <div className={`${styles.button} ${!props.value && styles.offButton}`}>
                    Off
                </div>
                {props.value && <div className={styles.indicator_on}></div>}
                {!props.value && <div className={styles.indicator_off}></div>}
            </div>*/
      <div className={styles.buttonsWrapper}>
          <div className={`${styles.button} ${value && styles.onButton}`} onClick={() => changeButtonValue(true)}>
              On
          </div>
          <div className={`${styles.button} ${!value && styles.offButton}`} onClick={() => changeButtonValue(false)}>
              Off
          </div>
          {value && <div className={styles.indicator_on}></div>}
          {!value && <div className={styles.indicator_off}></div>}
      </div>
    )
}

export default OnOff