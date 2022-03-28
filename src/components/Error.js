import React, { useEffect } from 'react'

const Error = () => {
  useEffect(() => {
    localStorage.setItem('periouspage', (localStorage.getItem('page')));
    localStorage.setItem('page', (window.location.pathname));
})
  return (
      <>
    <h1>OPs Page Not Found</h1>
    <br/>
    <h1>404 Error</h1>
      </>
  )
}

export default Error