import React from "react";
import { Map } from "react-kakao-maps-sdk";

export default function Main() {
  return (
    <div>
      <Map
        center={{
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          width: "500px",
          height: "500px",
        }}
        level={3}
      />
    </div>
  );
}
