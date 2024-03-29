import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
`;

export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  
  transition: 0.5s ease-out;
  a {
    :hover {
      color: black;
      background: white;
    }
  }
  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #415a77;
    position: fixed;
    height: 100%;
    gap: 0px;
    top: 0px;
    right: 0px;
    width: 60%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export const Ancora = styled.a`
  font-size: 20px;
  height: 100px;
  transition: 0.3s;
  
  &.active {
    color: black;
    background-color: white;
  }
  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const ContentTitle = styled.div`
  text-align: end;
`;

export const LinkSocial = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  transition: .5s ease-out;
  svg {
    color: white;
    width: 25px;
    height: 25px;
    opacity: 0.5;
    :hover {
      opacity: 1;
    }
  }
`;