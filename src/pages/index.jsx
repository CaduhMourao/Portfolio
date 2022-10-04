import { FaArrowRight, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { Container, Content, Infos, Name, Icon, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'


export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Full Stack Developer</Name>
        <Icon>
          <FaHtml5 color="rgb(255,69,0)" /> <FaCss3 color="rgb(0,0,255)"/> <FaJs color="rgb(255,255,0)" /> <FaReact color="rgb(100,149,237)" /> <FaNodeJs color="rgb(0,128,0)" />
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
