import Link from 'next/link'
import styled from '@emotion/styled'

const Container = styled.div`
  border-bottom: 1px solid #eee;
  padding: 40px 0;
  margin-bottom: 40px;
`

const MugShot = styled.img`
  width: 154px;
  border: 2px solid white;
  border-radius: 50%;
  display: block;
`

function Header() {
  return (
    <Container>
      <Link href="/">
        <a><MugShot src="/me.png" /></a>
      </Link>
    </Container>
  )
}

export default Header
