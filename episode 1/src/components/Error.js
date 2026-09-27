import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err= useRouteError()
  return (
    <div>Error
        <h1>Opps! something went wrong</h1>
        <h3>{err.status}:{err.statusText}</h3>
    </div>
  )
}

export default Error