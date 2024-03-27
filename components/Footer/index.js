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
    <>
      <FooterList>
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

      <section className='appreciation'>
        <h4>Mark lives and works on unceded Wurundjeri land in Naarm / Melbourne, Australia.</h4>
        <p>I acknowledge the traditional custodians of the land on which I live and I pay my respects to elders past and present, and recognise the resilience, strength and pride of the Aboriginal and Torres Strait Islander communities.</p>
      </section>
    </>
  )
}

export default Footer
