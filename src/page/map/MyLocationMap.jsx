import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

// 시고르자브 아이콘 설정
const sigorzabIcon = new L.Icon({
  iconUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMDRfMTQ3%2FMDAxNjcwMTQxNDExOTAy.iDfbhJ6fwx2XwWcKHIKuxl0sQ6qb-HtdR0x3uYhte7Eg.5FgXGTMZ__RUHMmA0UcY0Gcj9hplYQIrQjUxJ60Ew7Qg.JPEG.xgf6580%2FIMG_6881.JPG&type=a340', // 아이콘 URL을 실제 URL로 변경하세요.
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50]
});

const MyLocationMap = () => {
  const [position, setPosition] = useState(null);
  const [path, setPath] = useState([]);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newPosition = [pos.coords.latitude, pos.coords.longitude];
        setPosition(newPosition);
        setPath((prevPath) => [...prevPath, newPosition]);
      },
      (err) => {
        console.error(err);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  useEffect(() => {
    if (path.length > 1) {
      const newDistance = calculateDistance(path);
      setDistance(newDistance);
    }
  }, [path]);

  const calculateDistance = (path) => {
    let totalDistance = 0;
    for (let i = 1; i < path.length; i++) {
      const [lat1, lon1] = path[i - 1];
      const [lat2, lon2] = path[i];
      const R = 6371e3; // metres
      const φ1 = (lat1 * Math.PI) / 180;
      const φ2 = (lat2 * Math.PI) / 180;
      const Δφ = ((lat2 - lat1) * Math.PI) / 180;
      const Δλ = ((lon2 - lon1) * Math.PI) / 180;
      const a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c;
      totalDistance += d;
    }
    return (totalDistance / 1000).toFixed(2); // km 단위로 변환
  };

  return (
    <div className="map-container">
      <div className="info-container">
        <p>이동 거리: 1.1 km</p>
        <p>현재 날씨: 맑음</p>
      </div>
      {position ? (
        <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={sigorzabIcon}>
            <Popup>현재 위치</Popup>
          </Marker>
          <Polyline positions={path} color="blue" />
        </MapContainer>
      ) : (
        <p>위치를 불러오는 중...</p>
      )}
    </div>
  );
};

export default MyLocationMap;