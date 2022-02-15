import { useState } from "react";

export const useCounter = (initValue : number = 0) => {
    
    const [result, setValue] = useState<number>(initValue);

    const sum = () => {
        setValue( result + 1);
    }

    const extract = () => {
        setValue( result - 1);
    }

  
    return { result, sum, extract };
}
