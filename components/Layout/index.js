import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'

import Header from '../Header'
import Footer from '../Footer'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  color: #21013D;
`

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Mark Cipolla, Designer & Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#333" />
        <link href="https://fonts.googleapis.com/css2?family=Inclusive+Sans&display=swap" rel="stylesheet" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
