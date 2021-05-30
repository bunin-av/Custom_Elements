import {ItemsType} from "../Accordion/Accordion";
import React, {useState} from "react";
import styles from './Select.module.scss'

export type ValueType = string | number | undefined

export type SelectPropsType = {
    value: ValueType
    items: ItemsType[]
    onItemClick: (value: ValueType) => void
}

export function Select(props: SelectPropsType) {
    const [collapsedMode, setCollapsedMode] = useState(true)
    const [hoverItem, setHoverItem] = useState(props.value)

    const selectMenuItem = (value: ValueType) => {
        props.onItemClick(value)
        setCollapsedMode(true)
    }

    const onKeyPress = (e: string) => {
        if (e === 'Enter') {
            selectMenuItem(hoverItem)
            return
        } else if (e === 'Escape') {
            setCollapsedMode(true)
            return
        } else {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoverItem) {
                    if (e === 'ArrowDown') {
                        if (props.items[i + 1]) {
                            setHoverItem(props.items[i + 1].value)
                            break
                        }
                    } else if (e === 'ArrowUp') {
                        if (props.items[i - 1]) {
                            setHoverItem(props.items[i - 1].value)
                            break
                        }
                    }
                }
            }
        }
    }


    const titleElement = props.items.find(it => it.value === props.value)?.title
    const bodyElements = props.items.map(it => {
        const menuItemClassSetter = `${styles.menu__item} ${hoverItem === it.value ? styles.menu__item_hovered : ''} ${it.value === props.value ? styles.menu__item_selected : ''}`

        return (
            <div onClick={() => selectMenuItem(it.value)}
                 className={menuItemClassSetter}
                 key={it.value}
                 onMouseEnter={() => setHoverItem(it.value)}
            >{it.title}
            </div>
        )
    })

    const toggleMenuItems = () => setCollapsedMode(!collapsedMode)
    const onBlur = () => setCollapsedMode(true)
    const menuTitleClassSetter = `${styles.dropdown} ${styles.menu__title} ${!collapsedMode ? styles.menuOpened : ''}`

    return (
        <div onKeyDown={(e) => {
            onKeyPress(e.key)
        }}
            // onKeyUp={onKeyUp}
             tabIndex={0}>
            <div
                onClick={toggleMenuItems}
                onBlur={onBlur}
                className={menuTitleClassSetter}
            >{(props.value)
                ? titleElement
                : `Menu`
            }
            </div>
            {!collapsedMode &&
            <div className={styles.menu}>
                {bodyElements}
            </div>
            }
        </div>
    )
}