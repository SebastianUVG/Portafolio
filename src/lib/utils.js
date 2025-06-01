import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"


/*Funcin que junta varias clases*/ 
export const cn = (...inputs) => {
    return twMerge(clsx(inputs))
}