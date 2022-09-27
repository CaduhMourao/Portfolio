import { FaArrowRight, FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa'
import { Container, Content, Infos, Name, Icon, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'


export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>FULL-STACK DEVELOPER</Name>
        <Icon>
          <FaHtml5 /> <FaCss3 /> <FaJs /> <FaReact />
        </Icon>        

        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
