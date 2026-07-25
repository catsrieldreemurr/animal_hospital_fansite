import { ReactNode } from "react"

interface setProps{
    children: ReactNode
    variant?: "h1" | "h2" | "h3" | "h4" | "p" | "sub"

    isBold?: boolean
    isUnderline?: boolean
    isSpacer?: boolean
    style?: string
}

export default function Typograpy({children, variant, isBold, isUnderline, isSpacer, style}:setProps){
    let variatedStyles = `${style} ${isBold && "font-bold"} ${isUnderline && "underline"} ${isSpacer && "pb-5"}`

    if (variant === "h1"){
        return <h1 className={`${variatedStyles} text-3xl sm:text-4xl`}>{children}</h1>
    }
    else if(variant == "h2"){
        return <h2 className={`${variatedStyles} text-2xl sm:text-3xl`}>{children}</h2>
    }
    else if(variant == "h3") {
        return <h3 className={`${variatedStyles} text-xl sm:text-2xl`}>{children}</h3>
    }
    else if(variant == "h4"){
        return <h4 className={`${variatedStyles} text-lg sm:text-xl`}>{children}</h4>
    }

    else if(variant == "sub"){
        return <p className={`${variatedStyles} text-sm text-gray-600`}>{children}</p>
    }

    else{
        return <p className={`${variatedStyles}`}>{children}</p>
    }
}