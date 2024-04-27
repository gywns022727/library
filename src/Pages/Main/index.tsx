import { Map } from "react-kakao-maps-sdk";

export default function Main() {
  return (
    <div>
      <Map
        center={{
          lat: 37.5028448,
          lng: 126.9173764,
        }}
        style={{
          width: "100vw",
          height: "100vh",
        }}
        level={3}
      />
    </div>
  );
}
