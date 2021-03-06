import React from 'react'

const  ComponentB = (props) => {

    const { children } = props

    return (
       <div>Componente B =)
           <div>{children}</div>
       </div>
    )
}

export default ComponentB