import React from 'react'

function ButtonLink({href, className, children}) {
    return(
        <a className={className} href={href}>
            {children}
        </a>
    )
}

export default ButtonLink