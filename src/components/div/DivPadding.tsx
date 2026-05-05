import type React from "react"

type DivPaddingProps = {
    children?: React.ReactNode;
}

export const DivPadding = ({children}: DivPaddingProps) => {
    return(
        <>
            <div className='flex flex-col px-3 lg:px-30 gap-30'>
                {children}
            </div>
        </>
    )
}