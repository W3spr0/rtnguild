import React from 'react'
import Nav from './nav'
import Footer from './footer'
function Layout({children}) {
  return (
    <>
    <Nav/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout