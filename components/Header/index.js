import Link from 'next/link'
import styled from '@emotion/styled'

const Container = styled.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
  margin-bottom: 40px;
  position: relative;
`

const MugShot = styled.img`
  width: 154px;
  border: 2px solid white;
  border-radius: 50%;
  display: block;
`

const Saw = styled.img`
  width: 154px;
  border: 2px solid white;
  position: absolute;
  top: 20px;
  border-radius: 50%;
  opacity: 0;
  height: 154px;
  background: #fff;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.85;
    z-index: 1;
  }
`

function Header() {
  return (
    <Container>
      <Link href="/">
        <a>
          <MugShot src="/me.png" />
          <Saw src="/saw.svg" />
        </a>
      </Link>
    </Container>
  )
}

export default Header
