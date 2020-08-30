import React from 'react'
import NavBar from './navbar'
import '../styles/global.scss'
import layoutStyles from './layout.module.scss'

const layout = ({children}) => {
  return (
    <>
      <NavBar/>
      <main className={layoutStyles.container}> {children} </main>
    </>
  )
}

export default layout