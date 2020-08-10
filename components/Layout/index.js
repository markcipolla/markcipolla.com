import React from 'react'
import Head from 'next/head'

import Header from '../Header'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Mark Cipolla, Designer & Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#333" />
      </Head>

      <Header />
      {children}
    </>
  )
}

export default Layout
