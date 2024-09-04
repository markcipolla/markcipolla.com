import Link from 'next/link'
import Head from 'next/head'
import styled from '@emotion/styled'
import ReactPlayer from 'react-player'

const Logo = styled('img')`
  margin: 40px 0;
  width: 10vw;

  @media screen and (min-width: 1000px) {
    width: 100px;
  }
`

function SuburbAPI() {
  return (
    <>
      <Head>
        <title>SuburbAPI - Mark Cipolla</title>
      </Head>

      <h1>SuburbAPI</h1>

      <p>
        <a href="https://www.suburbapi.com.au">SuburbAPI</a>.
      </p>
    </>
  )
}

export default SuburbAPI
