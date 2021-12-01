import React from 'react'

type typeWirteLeft = 'left'|'right'|'center'
type typeWirteRight = 'top'|'center'|'bottom'
type Position = {
    position : Exclude<`${typeWirteLeft}-${typeWirteRight}`,'center-center'> | 'center'
    // ghep cac kieu thanh tung cap voi nhau, ngoai tru cap center-center
}
const TypeWrite = (props:Position) => {
    return (
        <div>
            
        </div>
    )
}

export default TypeWrite
