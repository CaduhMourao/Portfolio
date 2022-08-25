import styled from "styled-components";

export const Item = styled.div`
  margin-top: 40px;
  width: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  word-break: break-word;
  transition: 0.5s ease-out;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
  
  @media (max-width: 760px) {
   font-size: 12px;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  display: flex;
  svg {
    width: 30px;
    height: 30px;
    color: white;
  }
`;

export const Text = styled.div`
  color: white;
  text-align: start;
`;