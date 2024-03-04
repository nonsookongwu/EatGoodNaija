import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError()
    

  return (
      <><h1>ErrorPage</h1><p>{isRouteErrorResponse(error) ? "Invalid Page": "Unexpected error"}</p></>
  )
}

export default ErrorPage