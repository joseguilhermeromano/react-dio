import React from 'react'

const  ComponentA = (props) => {

    const { children } = props

    return (
       <div>Componente A =)
           <div>{children}</div>
       </div>
    )
}

export default ComponentA