import styled from "styled-components";

const Container = styled.div<{ $sideBar: boolean }>`
  position: relative;
  transition: 0.3s;

  width: ${(props) => (props.$sideBar ? "20%" : "0%")};
  min-width: ${(props) => (props.$sideBar ? "300px" : "0px")};

  background-color: #fff;
`;

const SearchContainer = styled.div`
  padding: 20px;

  width: 100%;
  height: 200px;
  background-color: #4caf50;
`;

const ExpansionButton = styled.button<{ $sideBar: boolean }>`
  position: absolute;
  right: -20px;
  bottom: 50%;
  z-index: 10;
  transform: translate(0, 50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 50px;

  border: none;
  border-radius: 0 10px 10px 0;
  background-color: #fff;

  > svg {
    color: #4caf50;
    transition: 0.3s;
    transform: ${(props) =>
      props.$sideBar ? "rotate( 0deg )" : "rotate( 180deg )"};
  }
`;

export { Container, ExpansionButton, SearchContainer };
