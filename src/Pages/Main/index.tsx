import { Map, MapMarker } from "react-kakao-maps-sdk";

import { useGeolocation } from "@/Hooks/useGeolocation";

import SideBar from "@/components/layout/SideBar";
import { Container } from "./styled";

const mapSize = {
  width: "100%",
  height: "100%",
};

export default function Main() {
  const currentPosition = useGeolocation();

  return (
    <Container>
      <SideBar />
      <Map center={currentPosition} style={mapSize} level={3}>
        <MapMarker position={currentPosition} />
      </Map>
    </Container>
  );
}
