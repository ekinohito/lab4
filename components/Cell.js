import React, {useState} from 'react'

export default function Cell({children}) {
    const [hover, setHover] = useState(false)
    return <td style={{transition: "all ease 200ms"}} className={hover?"bg-primary text-light":""} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {children}
    </td>
}