import { ComponentPropsWithoutRef } from "react";

export const TypescriptLogo = (
    props: ComponentPropsWithoutRef<"svg"> & {size?: number }
) => {
    return (
        <>
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 256 256" 
            preserveAspectRatio="xMidYMid"
            {...props}
         >
        <title>Typescript</title>
        <g>
        <path d="M20,0 L236,0 C247.045695,0 256,8.954305 256,20 L256,236 C256,247.045695 247.045695,256 236,256 L20,256 C8.954305,256 0,247.045695 0,236 L0,20 C0,8.954305 8.954305,0 20,0 Z" fill="currentColor"></path>
        
    </g>
        </svg>
    </>
    )
}