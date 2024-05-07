import { useEffect, useState } from "react";

// 현재 위도, 경도 좌포를 반환하는 함수
const useGeolocation = () => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const successCallback = (pos: GeolocationPosition) => setPosition(pos);
    const errorCallback = (err: GeolocationPositionError) =>
      setError(`Error(${err.code}): ${err.message}`);

    if (!position && !error)
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, [position, error]);

  const currentPosition = {
    lat: position ? Number(position?.coords.latitude) : 37.5665,
    lng: position ? Number(position?.coords.longitude) : 126.978,
  };

  // position 값이 없을 시 서울시청의 위도, 경도 좌표 반환
  return currentPosition;
};

export { useGeolocation };
