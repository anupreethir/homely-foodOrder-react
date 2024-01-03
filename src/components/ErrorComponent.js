import {useRouteError} from "react-router-dom"
const ErrorComponent = ()=>{
    const error = useRouteError();
    return (
        <div>{error.status}</div>
    )
}
export default ErrorComponent;