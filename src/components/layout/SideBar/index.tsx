import { RootState } from "@/store/config";
import { useSelector, useDispatch } from "react-redux";
import { SET_EXPANSION } from "@/store/slices/sideBarSlice";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Container, ExpansionButton } from "./styled";

export default function SideBar() {
  const { sideBar } = useSelector((state: RootState) => state.sideBar);
  const dispatch = useDispatch();

  const handleSideBar = () => {
    dispatch(SET_EXPANSION(!sideBar));
    console.log("click");
  };
  return (
    <Container $sideBar={sideBar}>
      <ExpansionButton onClick={() => handleSideBar()}>
        <KeyboardArrowRightIcon color="action" fontSize="large" />
      </ExpansionButton>
    </Container>
  );
}
