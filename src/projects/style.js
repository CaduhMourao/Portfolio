import styled from "styled-components";

export const Container = styled.div`
`;
  
export const Content = styled.div`
padding: 20px;
@media (max-width: 600px) {
  padding: 5px;
}
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow-x: auto;
  height: inherit;
  justify-content: space-around;
  padding: auto;
  margin: auto;
  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
    background-color: whitesmoke; 
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: darkgray; 
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  margin: 10px;
  padding: 10px;
  justify-content: center;
  text-align: center;
  gap: 5px;
  border: 1px solid white;
  border-radius: 10px;
  transition: 0.5s ease-out;
  :hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 760px) {
   font-size: 13px;
  }
`;

export const TitleProject = styled.strong``;

export const Url = styled.span``;

export const Created_at = styled.span``;