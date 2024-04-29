import { useEffect, useState } from "react";

const useGeolocation = () => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);

  useEffect(() => {
    const successCallback = (pos: GeolocationPosition) => setPosition(pos);
    const errorCallback = (err: GeolocationPositionError) =>
      console.error(`Error(${err.code}): ${err.message}`);

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  // position 값이 없을 시 서울시청의 위도, 경도 좌표 반환
  const currentPosition = {
    lat: position ? Number(position?.coords.latitude) : 37.5665,
    lng: position ? Number(position?.coords.longitude) : 126.978,
  };

  return currentPosition;
};

export { useGeolocation };
