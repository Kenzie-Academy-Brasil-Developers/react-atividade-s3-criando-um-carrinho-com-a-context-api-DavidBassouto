import styled from "styled-components";

export const Container = styled.ul`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      filter: brightness(1.3);
    }
  }
`;

export const StyledLi = styled.li`
  width: 50%;
  height: 50px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  p {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  div {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .catalogue {
    background: orange;
    border: none;
    border-radius: 5px;
    padding: 5px;
    color: white;
  }
  .cart {
    background: rebeccapurple;
    border: none;
    border-radius: 5px;
    padding: 5px;
    color: white;
  }
`;
