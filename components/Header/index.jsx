import React, { useState } from 'react'
import { Container, Title, NavLinks, Ancora, Content, Menu, CloseSidebar, ContentTitle, LinkSocial } from './style'
import { FaBars, FaTimes, FaIcons, FaTwitter, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const { asPath } = useRouter()

  const showSiderbar = () => setSidebar(!sidebar)

  function activeLink(path) {
    return asPath === `/${path}` ? 'active' : ''
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>
            Carlos Eduardo
          </Title>
          <LinkSocial>
            <a href="https://www.linkedin.com/in/caduhdev/" target="_blank" rel="noreferrer" ><FaLinkedin /></a>
            <a href="https://www.twitter.com/CaduhMourao" target="_blank" rel="noreferrer" ><FaTwitter /></a>
            <a href="https://github.com/CaduhMourao" target="_blank" rel="noreferrer" ><FaGithub /></a>
          </LinkSocial>
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
        <NavLinks sidebar={sidebar}>
          <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>
          <Link href="/">
            <Ancora className={activeLink('')} onClick={showSiderbar}>Home</Ancora>
          </Link>
          <Link href="projects">
            <Ancora className={activeLink('projects')} onClick={showSiderbar}>Projetos</Ancora>
          </Link>
          <Link href="contact">
            <Ancora className={activeLink('contact')} onClick={showSiderbar}>Contato</Ancora>
          </Link>
        </NavLinks>
      </Content>
    </Container>
  )
}