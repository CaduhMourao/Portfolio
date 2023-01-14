import styled from "styled-components";
import 'animate.css';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Infos = styled.div`
  text-align: start;
  width: 50%;
  display: grid;
  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const Profession = styled.span`
  
`;

export const About = styled.span`
  color: #d4c2fc;
  margin-bottom: 20px;
  text-align: justify;
`

export const Icon = styled.span`
  display: flex;
  gap: 20px;
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const LinkProjects = styled.button`
  width: 10rem;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: bold;
  transition: .5s ease-out;
  opacity: 0.2;
  svg {
    font-size: 20px;
  }

  :hover {
    background: white;
    opacity: 1;
  }
`;

export const Logo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 20rem;
    height: 20rem;
  }
  @media (max-width: 760px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    img {
      width: 18rem;
      height: 18rem;
    }
  }
`;

export const Img = styled.img``