import { RootState } from "@/store/config";
import { useSelector, useDispatch } from "react-redux";
import { SET_EXPANSION } from "@/store/slices/sideBarSlice";

import { useAddress } from "@/Hooks/useAddress";
import { useGeolocation } from "@/Hooks/useGeolocation";

import { RiArrowRightSFill } from "react-icons/ri";
import { Container, ExpansionButton, SearchContainer } from "./styled";

export default function SideBar() {
  const sideBar = useSelector((state: RootState) => state.sideBar.sideBar);
  const currentPosition = useGeolocation();
  const address = useAddress(currentPosition);

  const dispatch = useDispatch();
  const handleSideBar = () => dispatch(SET_EXPANSION(!sideBar));

  return (
    <Container $sideBar={sideBar}>
      <SearchContainer>
        <button onClick={() => console.log(address)}>asdasd</button>

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
