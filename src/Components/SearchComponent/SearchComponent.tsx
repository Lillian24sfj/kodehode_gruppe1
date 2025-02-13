// @ts-expect-error cssmodules
import style from "./SearchComponent.module.css"

export function SearchComponent() {
    return (
        <div >
            <input className={style.search_input_field}type="text"/>
        </div>
    )
}