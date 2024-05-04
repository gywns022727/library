import { RootState } from "@/store/config";
import { useSelector, useDispatch } from "react-redux";
import { SET_EXPANSION } from "@/store/slices/sideBarSlice";

import { RiArrowRightSFill } from "react-icons/ri";
import { Container, ExpansionButton, SearchContainer } from "./styled";

export default function SideBar() {
  const { sideBar } = useSelector((state: RootState) => state.sideBar);
  const dispatch = useDispatch();

  const handleSideBar = () => dispatch(SET_EXPANSION(!sideBar));

  return (
    <Container $sideBar={sideBar}>
      <SearchContainer>
        <div>
          <h3>Library</h3>
          <input type="text" />
        </div>
      </SearchContainer>
      <ExpansionButton $sideBar={sideBar} onClick={() => handleSideBar()}>
        <RiArrowRightSFill />
      </ExpansionButton>
    </Container>
  );
}
