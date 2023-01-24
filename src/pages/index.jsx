import { FaArrowRight, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { Container, Content, Infos, Profession, About, Icon, LinkProjects, Avatar, Img } from '../../styles/indexStyle'
import Link from 'next/link'
import api from '../api'
import { useEffect, useState } from 'react';


export default function Home() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/users/CaduhMourao")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
   <Container>
     <Content>
      <Infos>
        <Profession><a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=36&pause=1000&color=F7F7F7&width=435&lines=FULL+STACK+DEVELOPER" alt="Typing SVG" /></a></Profession>
        <About>
          Olá, meu nome é Carlos Eduardo, também conhecido como Cadu.
          Comecei a estudar programação em janeiro de 2022, iniciando no desenvolvimento web(HTML, CSS e JS), atualmente estou estudando Reactjs, Nodejs e Python, e também tive meu primeiro contato com React Native pela NLW.
        </About>
        <Icon>
          <FaHtml5 /> <FaCss3 /> <FaJs  /> <FaReact /> <FaNodeJs /> <FaPython />
        </Icon>

        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Avatar>
        <Img src={user?.avatar_url} />
      </Avatar>
     </Content>
   </Container>
  )
}
