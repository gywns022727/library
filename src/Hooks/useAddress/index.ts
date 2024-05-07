import { useEffect, useState } from "react";

interface Address {
  address_name: string;
  main_address_no: string;
  mountain_yn: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  sub_address_no: string;
  zip_code: string;
}

interface RoadAddress {
  address_name: string;
  building_name: string;
  main_building_no: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  road_name: string;
  sub_building_no: string;
  underground_yn: string;
  zone_no: string;
}

interface Result {
  address: Address;
  road_address: RoadAddress | null;
}

// 현재 주소를 반환하는 함수
const useAddress = (currentPosition: { lat: number; lng: number }) => {
  const [address, setAddress] = useState<Result | null>(null);

  const { kakao } = window;
  const geocoder = new kakao.maps.services.Geocoder();
  const coord = new kakao.maps.LatLng(currentPosition.lat, currentPosition.lng);

  const callback = (result: Result[], status: string) => {
    if (status === kakao.maps.services.Status.OK) setAddress(result[0]);
  };

  useEffect(() => {
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  }, []);

  // 현재 위도, 경도 좌표를 받아 해당 좌표 값의 주소, 도로 주소 반환
  const resultAddress = {
    address: address?.address,
    road_address: address?.road_address,
  };

  return resultAddress;
};

export { useAddress };
