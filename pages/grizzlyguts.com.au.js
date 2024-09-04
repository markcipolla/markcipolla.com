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

function GrizzlyGuts() {
  return (
    <>
      <Head>
        <title>GrizzlyGuts - Mark Cipolla</title>
      </Head>

      <h1>GrizzlyGuts</h1>

      <p>
        <a href="https://www.GrizzlyGuts.com.au">GrizzlyGuts</a>.
      </p>
    </>
  )
}

export default GrizzlyGuts
