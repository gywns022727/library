import styled from "styled-components";

const Container = styled.div<{ $sideBar: boolean }>`
  position: relative;

  min-width: 240px;
  width: ${(props) => (props.$sideBar ? "20%" : "0%")};

  background-color: #fff;
`;

const ExpansionButton = styled.button`
  position: absolute;
  z-index: 10;
  right: -20px;
  bottom: 50%;
  transform: translate(0, 50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 50px;

  border: none;
  border-radius: 0 10px 10px 0;
  background-color: #3cb371;
`;

export { Container, ExpansionButton };
