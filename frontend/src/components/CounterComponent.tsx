
import { useCounter } from '../hooks/useCounter';

export const CounterComponent = () => {

    const { result, sum, extract } = useCounter();

    return (
        <>
            <h3>Counter <small>{ result }</small> </h3>
            <button
                className="btn btn-primary"
                onClick={ sum }>
                +
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={ extract }>
                -
            </button>

        </>
    )
}
