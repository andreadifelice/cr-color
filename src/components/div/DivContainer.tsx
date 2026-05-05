import type React from "react"

type DivContainerProps = {
    children?: React.ReactNode;
    id?: string,
    className?: string
}

const DivContainer = ({children, id, className}: DivContainerProps) => {
    return (
        <div className={`flex h-screen items-center ${className}`} id={id}>
            {children}
        </div>
    )
}

export default DivContainer