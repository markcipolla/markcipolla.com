import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'

import Header from '../Header'
import Footer from '../Footer'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto
`

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Mark Cipolla, Designer & Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#333" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </Head>

      <Container>
        <Header />

        {children}

        <Footer />
      </Container>
    </>
  )
}

export default Layout
