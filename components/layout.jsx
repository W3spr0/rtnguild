import React from 'react'
import Nav from './nav'
function Layout({children}) {
  return (
    <>
    <Nav/>
    <main>{children}</main>
    <p>g</p>
    </>
  )
}

export default Layout