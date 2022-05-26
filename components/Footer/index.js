import Link from 'next/link'
import styled from '@emotion/styled'

const FooterList = styled.ul`
  padding: 0;
  margin: 80px 0;
`

const FooterLink = styled.li`
  list-style: none;
  margin-bottom: 10px;
  vertical-align: center;
`

const Logo = styled.img`
  width: 20px;
  margin-right: 10px;
  position: relative;
  top: 4px;
`

function Footer() {
  return (
    <FooterList>
      <FooterLink>
        <a href="https://twitter.com/markcipolla/">
          <Logo alt="Twitter Logo" src='/twitter.svg' />
          Twitter
        </a>
      </FooterLink>
      <FooterLink>
        <a href="https://www.linkedin.com/in/mark-cipolla/">
          <Logo alt="LinkedIn Logo" src='/linkedin.svg' />
          LinkedIn
        </a>
      </FooterLink>
      <FooterLink>
        <a href="https://github.com/markcipolla">
          <Logo alt="Github Logo" src='/github.svg' />
          Github
        </a>
      </FooterLink>
      <FooterLink>
        <a href="https://www.instagram.com/dmaerk/">
          <Logo alt="Instagram Logo" src='/instagram.svg' />
          Instagram
        </a>
      </FooterLink>
    </FooterList>
  )
}

export default Footer
